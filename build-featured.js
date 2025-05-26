// build-featured.js
import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";
import https from "https";

const urls = [
  "https://www.edp24.co.uk/news/health/20739252.world-first-approach-operation-cancer-patient-takes-place-norfolk-hospital/",
  "https://open.spotify.com/episode/0mUfLcPFqIsN5ZMqueMghc?si=57484f3f7c1a4bb1&nd=1&dlsi=b7890703c29a4c46",
  "https://www.edp24.co.uk/news/health/20744491.hospital-team-carries-first-robotic-colorectal-cancer-surgery-regions-cancer-network/",
  "https://www.nnuh.nhs.uk/press-release/milestone-reached-in-nnuh-robotic-assisted-surgery/#:~:text=He%20told%20us%20to%20walk,better%20care%20for%20our%20patients.%E2%80%9D",
  "https://www.nnuh.nhs.uk/news/celebrating-the-success-of-our-robotic-assisted-surgical-programme/",
  "https://www.nnuh.nhs.uk/news/2020/03/research-grant-won-by-cancer-specialists/",
  "https://interestingengineering.com/culture/14-surgeons-and-one-robot-work-simultaneously-on-one-cancer-surgery?utm_source=chatgpt.com",
  "https://www.dailymail.co.uk/health/article-8750669/Robot-14-surgeons-work-single-cancer-patient.html"
];

async function scrapeMetadata(url) {
  try {
    const { data: html } = await axios.get(url, {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    });
    const $ = cheerio.load(html);

    const title =
      $('meta[property="og:title"]').attr("content") ||
      $("title").text().trim();

    let image;
    if (url.includes('nnuh.nhs.uk')) {
      // Special handling for NNUH website
      const imgElement = $('.featured-image img').length ? $('.featured-image img') : $('img.alignnone.size-full');
      
      if (imgElement.length) {
        // Try to get the 1024x768 version from srcset
        const srcset = imgElement.attr('srcset');
        if (srcset) {
          const srcsetUrls = srcset.split(',')
            .map(src => src.trim().split(' ')[0])
            .filter(src => src.includes('1024x768'));
          
          if (srcsetUrls.length > 0) {
            image = srcsetUrls[0];
          } else {
            image = imgElement.attr('src');
          }
        } else {
          image = imgElement.attr('src');
        }
      } else {
        image = $('meta[property="og:image"]').attr("content") ||
                $("img").first().attr("src");
      }
    } else {
      image = $('meta[property="og:image"]').attr("content") ||
              $("img").first().attr("src");
    }

    return { title, image, url };
  } catch (err) {
    console.error("Failed to fetch metadata:", err.message);
    return null;
  }
}

async function buildFeaturedJson() {
  const results = await Promise.all(urls.map(scrapeMetadata));
  const validResults = results.filter(Boolean);

  console.log("Number of valid results:", validResults.length);
  console.log("Results:", JSON.stringify(validResults, null, 2));

  try {
    const filePath = "./public/featured.json";
    const jsonContent = JSON.stringify(validResults, null, 2);
    
    fs.writeFileSync(filePath, jsonContent, "utf-8");
    
    // Verify the file was written correctly
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    console.log("File size:", fileContent.length, "bytes");
    console.log("First 100 characters of file:", fileContent.substring(0, 100));
    
    console.log("✅ featured.json created with", validResults.length, "entries");
  } catch (error) {
    console.error("Error writing file:", error);
  }
}

buildFeaturedJson();

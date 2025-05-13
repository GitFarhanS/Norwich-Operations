import { useEffect, useState } from "react";

export default function Featured() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/featured.json")
      .then((res) => res.json())
      .then(setArticles);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Articles</h2>
      <div className="grid gap-8">
        {articles.map((a, index) => (
          <a
            key={index}
            href={a.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img src={a.image} alt={a.title} className="w-full h-64 object-cover object-[center_30%]" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-800">{a.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

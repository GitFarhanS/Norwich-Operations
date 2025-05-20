import face_recognition
import cv2
import os
import numpy as np

# Load reference image of Mr. Shaikh
known_image = face_recognition.load_image_file("Shaikh.png")
known_encoding = face_recognition.face_encodings(known_image)[0]

# Directories for input and output
input_dir = "public/images"
output_dir = "public/images_blurred"
os.makedirs(output_dir, exist_ok=True)

for filename in os.listdir(input_dir):
    if not filename.lower().endswith((".jpg", ".jpeg", ".png")):
        continue

    image_path = os.path.join(input_dir, filename)
    image = face_recognition.load_image_file(image_path)
    face_locations = face_recognition.face_locations(image)
    face_encodings = face_recognition.face_encodings(image, face_locations)

    # Convert to OpenCV format (BGR)
    image_cv = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

    for (top, right, bottom, left), encoding in zip(face_locations, face_encodings):
        match = face_recognition.compare_faces([known_encoding], encoding)[0]
        if not match:
            # Expand bounding box
            margin = 20
            top_exp = max(top - margin, 0)
            bottom_exp = min(bottom + margin, image_cv.shape[0])
            left_exp = max(left - margin, 0)
            right_exp = min(right + margin, image_cv.shape[1])

            # Extract face region (expanded)
            face_region = image_cv[top_exp:bottom_exp, left_exp:right_exp]

            # Blur the entire region
            blurred = cv2.GaussianBlur(face_region, (101, 101), 60)

            # Create circular mask with feathered edges
            h, w = face_region.shape[:2]
            mask = np.zeros((h, w), dtype=np.uint8)
            radius = int(min(w, h) * 0.6)
            cv2.circle(mask, (w // 2, h // 2), radius, 255, -1)
            mask = cv2.GaussianBlur(mask, (41, 41), 0)  # Feather the edges

            # Blend original + blurred using alpha mask
            mask = mask.astype(float) / 255
            face_region_blended = (
                blurred * mask[:, :, None] + face_region * (1 - mask[:, :, None])
            ).astype(np.uint8)

            # Replace region in original image
            image_cv[top_exp:bottom_exp, left_exp:right_exp] = face_region_blended

    # Save processed image
    output_path = os.path.join(output_dir, filename)
    cv2.imwrite(output_path, image_cv)
    print(f"✅ Processed {filename} → {output_path}")

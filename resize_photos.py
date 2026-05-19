from PIL import Image
import os

folder = "photos"
for filename in os.listdir(folder):
    if filename.lower().endswith((".jpg", ".jpeg")):
        path = os.path.join(folder, filename)
        img = Image.open(path)
        w, h = img.size
        if w > 900:
            ratio = 900 / w
            img = img.resize((900, int(h * ratio)), Image.LANCZOS)
            img.save(path, "JPEG", quality=90)
            print(f"Resized {filename}: {w}x{h} → {img.size}")
        else:
            print(f"Skipped {filename}: already {w}x{h}")
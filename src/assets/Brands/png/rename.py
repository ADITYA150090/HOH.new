import os
import base64

# ---- CONFIG ----
folder = "."                # current directory — since you're running it inside the folder
convert_to_svg = False      # set True to also wrap as SVG (see notes below)
start_at = 1                # starting number
# ----------------

valid_ext = (".png", ".jpg", ".jpeg", ".webp", ".bmp", ".gif")
files = [f for f in os.listdir(folder) if f.lower().endswith(valid_ext)]
files.sort()

temp_names = []
for i, filename in enumerate(files):
    ext = os.path.splitext(filename)[1]
    temp_path = os.path.join(folder, f"__temp_{i}{ext}")
    os.rename(os.path.join(folder, filename), temp_path)
    temp_names.append((temp_path, ext))

for i, (temp_path, ext) in enumerate(temp_names, start=start_at):
    final_path = os.path.join(folder, f"{i}{ext}")
    os.rename(temp_path, final_path)
    print(f"Renamed -> {i}{ext}")

    if convert_to_svg:
        svg_path = os.path.join(folder, f"{i}.svg")
        with open(final_path, "rb") as img_file:
            b64 = base64.b64encode(img_file.read()).decode("utf-8")
        mime = "image/png" if ext.lower() == ".png" else "image/jpeg"
        svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
  <image href="data:{mime};base64,{b64}" width="100%" height="100%"/>
</svg>'''
        with open(svg_path, "w") as f:
            f.write(svg_content)
        print(f"  wrapped -> {i}.svg (still raster inside)")

print("Done.")
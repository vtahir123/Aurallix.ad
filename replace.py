import re

file_path = r"c:\Users\tejas\Downloads\Auralix-ads-main\public\portfolio.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

def replace_img(match):
    img_tag = match.group(0)
    img_tag = re.sub(r'src="[^"]+"', 'src="HOONY HORIZENTALE.png"', img_tag)
    img_tag = re.sub(r'alt="[^"]+"', 'alt="Upcoming"', img_tag)
    return img_tag

new_content = re.sub(r'<img[^>]+>', replace_img, content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Done")

from PIL import Image
import os

def remove_white_background(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        datas = img.getdata()

        new_data = []
        for item in datas:
            # Change all white (also shades of whites)
            # to transparent
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)

        img.putdata(new_data)
        img.save(output_path, "PNG")
        print(f"Successfully processed {input_path}")
    except Exception as e:
        print(f"Error: {e}")

input_file = "public/goku-nimbus.png"
output_file = "public/goku-nimbus.png"

# Since we are in root, path should work if public exists in root
if os.path.exists(input_file):
    remove_white_background(input_file, output_file)
else:
    print(f"File not found: {input_file}")

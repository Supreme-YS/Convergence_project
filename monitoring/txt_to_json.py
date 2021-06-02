import json
import os, io

with open("./lat_lng.txt", "r", encoding='utf-8') as input_file:
    content = json.load(input_file)
    print(content)

with io.open("./lat_lng.json", "w", encoding='utf-8') as output_file:
    json.dump(content, output_file, ensure_ascii=False, indent=1)


import os
from PIL import Image,ImageFilter

directory = r'/Users/inedi/Desktop/AUV/auv-website/src/assets/img/carousel'
for filename in os.listdir(directory):

    if filename.endswith(".jpg") or filename.endswith(".png"):
        print(os.path.join(directory, filename))
        img = Image.open(os.path.join(directory, filename))
        blurred_image = img.filter(ImageFilter.GaussianBlur(20))
        blurred_image.save(os.path.join(directory, filename.split('.')[0])+'-blurred.jpg')
    else:
        continue
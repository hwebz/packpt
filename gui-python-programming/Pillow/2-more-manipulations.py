from PIL import Image
import os

image_dir = os.path.join(os.path.abspath(".."), 'images')

def resize_images(image_names, new_size = (200, 200)):
    for image_name in image_names:
        filename = image_name.split("\\")
        img = Image.open(image_name)
        img = img.resize(new_size)
        img.save("resized_"+filename[len(filename) - 1])

def crop_images(image_names, new_size = (100, 100, 300, 300)):
    for image_name in image_names:
        filename = image_name.split("\\")
        img = Image.open(image_name)
        img = img.crop(new_size)
        img = img.rotate(90)
        img.show()

images = [os.path.join(image_dir, "avatar.png"),
          os.path.join(image_dir, "avatar-2.png"),
          os.path.join(image_dir, "avatar-3.png")]
# resize_images(images)
crop_images(images)

# img = Image.open(images[0])
# img.thumbnail((128,128))
# img.show()
from PIL import Image, ImageFilter, ImageEnhance
import os

image_dir = os.path.join(os.path.abspath(".."), 'images')

rodents_img = Image.open(os.path.join(image_dir, "avatar-4.jpeg"))
rodents_img.show()

grayscale = rodents_img.convert('L')
edge_detect = rodents_img.filter(ImageFilter.FIND_EDGES)
contrast = ImageEnhance.Contrast(rodents_img).enhance(1.5)

grayscale.show()
edge_detect.show()
contrast.show()
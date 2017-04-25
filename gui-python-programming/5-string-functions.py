science = "SCIENCE"
apple = "apples"

print(apple)
apple = apple.upper()
print(apple)
print(apple.lower())

print(apple.capitalize())
print(science.title())

orange = "         oRange           "
print(orange.strip().upper())

# Advanced
prefix = "python is an "
suffix = "awesome language"

astr = prefix + suffix
print(astr)

astr = astr.replace("language", "snake.")
astr = astr * 2
astr = astr.replace("snake.", "language", 1)
print(astr)

print(astr.count("an"))
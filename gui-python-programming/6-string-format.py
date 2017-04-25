n = 11
f = 1.2345678
s = "computer"

print("my number is {:d}".format(n))
print("my number is {:f}".format(f))

# There are many format types such as:
# e, b, d, x, f, s

print("{:.3f}".format(f))
print("{:11.3f}".format(f))

print("{0} {1} {2}".format(n,f,s))

print("{name} own(s) {amount} of {object}".format(
    name = "William",
    amount = 5,
    object = "mangoes"
))
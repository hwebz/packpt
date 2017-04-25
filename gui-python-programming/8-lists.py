numbers = [5, 7, 3, -2, 1]
names = ["Heather", "Micah", "Jane"]

print(numbers[2])
print(names[1])

del names[1]

print(names)

mystr = "Hello world"
print(mystr[0])
print(mystr[6])

# API
alpha = ["a", "b", "c", "d"]
alpha = alpha + ["e", "f"]

d_index = alpha.index("d")
print("d_index: " + str(d_index))
del alpha[d_index]
print(alpha)

alpha.remove("c")
print(alpha)
print("=======================")

alpha1 = ["a", "f", "c", "b", "d"]
alpha2 = ["g", "i", "h"]
alpha3 = "jklmnopqrstuvxyz"

alpha1.sort()
alpha2.sort()
print(alpha1)
print(alpha2)
alpha1.insert(2, "h")
print(alpha1)

alpha1 = '-'.join(alpha1)
alpha2 = ''.join(alpha2)
print(alpha1)
print(alpha2)

alphabet = alpha1 + alpha2 + alpha3
print(alphabet)

# Built-in functions: min, max, sum, len
numbers2 = [3.14, -5, 10, 10**4, 17]
hello_world = "HelloWorld"
print(max(numbers2))
print(min(numbers2))
print(sum(numbers2))
print(len(numbers2))
print(max(hello_world))
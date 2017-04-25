s = "hello world"
a = [4,5,6]

print(5 in a)
print(4 in a)
print("ello" in s)

for even_number in [2,4,6,8,10]:
    print(even_number)

odds = [1,3,5,7,9,11]
for odd_number in odds:
    print(odd_number)

print(range(len(odds)))
for index in range(len(odds)):
    print("Index: {:d}, odd number: {:d}".format(index, odds[index]))

index = 0
names = ["John", "Harry", "Leah", "Micah"]

while index < len(names):
    name = names[index]
    print(name)
    index += 1

# 1 - 10
total = 0
v = 1
while v <= 10:
    total += v
    v += 1
print(total)

# Iterators
my_list = [1,2,3,4,5]
my_tuple = (2,7,8,9,10)
my_string = "Hello world!"

print('__iter__' in dir(my_list))
print('__iter__' in dir(my_tuple))
print('__iter__' in dir(my_string))

list_iterator = iter(my_list)

while True:
    try:
        next_elem = next(list_iterator)
        print(next_elem)
    except StopIteration:
        break
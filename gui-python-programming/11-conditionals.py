age = 35
if age == 35:
    print("Age is equal to 35!")

name = "Micheal"
if name == "Megan":
    print("yes my name is Megan!")
    if (age == 35):
        print("My name is Megan and I am 35 years old!")
    else:
        print("My name is Mogan but I am not 35 years old!")
elif name == "Ricky":
    print("My name is Ricky")
else:
    print("We don't know your name!")


print("===================================")

t = 15
# t = int(input())

# if (t <= -30):
#     print("REALLY COLD!")
# if (t < 0):
#     if (t > -30):
#         print("cold")
# if (t > 0):
#     if (t < 20):
#         print("perfect")
# if (t > 40):
#     print("REALLY HOT!")

if (t <= -30):
    print("REALLY COLD!")
elif (t > -30 & t < 0):
    print("cold")
elif (t >= 0 & t < 40):
    print('perfect')
else:
    print("REALLY HOT!")

if not(1 != 1): print("true")

# Examples

a,b = int(input()), int(input())
if a % b == 0 or b % a == 0:
    print("divisible")

x,y = int(input("x = ")), int(input("y = "))
if b != 0 : print(a/b)
if b is not 0: print(a/b)
if not(b == 0): print(a/b)

name1 = input("Name1: ")
name2 = input("Name2: ")
name3 = input("Name3: ")

if name1.lower() == name2.lower() == name3.lower():
    print("All three are the same")
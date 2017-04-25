'''
PI = 3.141592

def circle_area(r):
    return PI*r*r

print(circle_area(5))
print(circle_area(10))
print(circle_area(20))
'''

import datetime as dt

def record_time(message, time = dt.datetime.now()):
    print ("{:}, time: {:}".format(message, time))

def add(*numbers):
    total = 0
    for n in numbers:
        total += n
    return total

print(add(1,2,3,4,5,6))
record_time("It is the morning")
record_time("It is the morning", "Feb 22nd 1988")
print("================================")

def reverse(s):
    new_str = ""
    for i in range(len(s)):
        new_str += s[len(s) - i - 1]
    return new_str

# E.g: abba, 12321, bbbbb
def is_palindrome(p):
    for i in range(int(len(p)/2)):
        if p[i] != p[len(p) - i - 1]:
            print("No this is not a palindrome")
            return
    print("Yes this is a palindrome")
    # pass

print(reverse("12345"))
print(reverse("edcba"))

is_palindrome("1")
is_palindrome("121")
is_palindrome("abba")
is_palindrome("abcdba")
print("================================")

# Another example
alpha = "abcdefghijklmnopqrstuvxyzw"

def encrypt(s, shift = 3):
    encrypted_str = ""
    for c in s:
        index = alpha.index(c)
        shifted_index = (index + shift) % len(alpha)
        encrypted_str += alpha[shifted_index]
    return encrypted_str

def decrypt(s, shift = 3):
    decrypted_str = ""
    for c in s:
        index = alpha.index(c)
        shifted_index = (index - shift) % len(alpha)
        decrypted_str += alpha[shifted_index]
    return decrypted_str
    pass

# for c in "helloword":
#     print("{:s}: {:d}".format(c, alpha.index(c)))
print(encrypt("helloworld"))
print(decrypt("khoorcruog"))
print(decrypt(encrypt("aaabbbccczzz")))
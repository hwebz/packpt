def double(n):
    if n == 0:
        return 0
    return double(n - 1) + 2

def exponentiate(b, e):
    if e == 0: return 1
    return exponentiate(b, e-1) * b

def count_vowels(s, i = 0):
    if (i == len(s)): return 0

    c = s[i]
    if c in 'aieou':
        return count_vowels(s, i + 1) + 1
    return count_vowels(s, i + 1) + 0

# 345 -> 3 + 4 + 5 = 12
def digit_sum(n):
    if n == 0: return 0
    return digit_sum(n//10) + n % 10

# 0 1 2 3 4 5 6 ..
# 1 1 2 3 5 8 13 ...
def fib(n):
    if n == 0 or n == 1: return 1
    return fib(n - 2) + fib(n - 1)

print(double(3))
print(exponentiate(5, 3))
print(count_vowels('hello'))
print(count_vowels('world'))
print(digit_sum(345))
print(digit_sum(556))

for i in range(10):
    print(fib(i))
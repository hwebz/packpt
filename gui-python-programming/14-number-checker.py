n = int(input("n = "))

if n >= 2:
    divisors = []

    for divisor in range(2, n):
        if n % divisor == 0:
            divisors.append(divisor)

    if len(divisors) == 0:
        print("{:id} is prime".format(n))
    else:
        print("{:d} is not prime because {:} divide {:d}".format(n, str(divisors), n))
else:
    print("{:d} is not prime!".format(n))
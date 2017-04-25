import sys

line = input()

if line.__contains__(' ') is not True or len(line.split()) < 3:
    print("Wrong format")
    sys.exit()

split = line.split()
left = int(split[0])
op = split[1]
right = int(split[2])

val = 0

if op == '+':
    val = left + right
elif op == '-':
    val = left - right
elif op == '*':
    val = left * right
elif op == '/':
    if right == 0:
        print("Division by zero. Halting")
        sys.exit()
    val = left/right
else:
    print("Unknown operator: {operator}".format(operator=op))
    sys.exit()

print("{line_expr} = {value:.2f}".format(line_expr=line, value=val))
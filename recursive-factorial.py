def recursive_factorial(n):
    if (n==1):
        factorial = 1
    else:
        factorial = n * recursive_factorial(n-1)
    return factorial

print(recursive_factorial(4))
# 24

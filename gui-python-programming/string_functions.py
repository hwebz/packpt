def first_half(s):
    return s[:int(len(s)/2)]
def last_half(s):
    return s[int(len(s)/2):]

# We are currently running THIS script
if __name__ == '__main__':
    print("Testing string functions")
    assert first_half("abcd") == "abc", "First half is failing"
    assert last_half("abcd") == "cd", "Last half is failing"
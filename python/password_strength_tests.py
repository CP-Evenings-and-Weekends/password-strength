from password_strength import is_strong_password

# Valid
print(is_strong_password("Pa$$word1") == True)
print(is_strong_password("ShortA1!") == True)
print(is_strong_password("LongerPassword123!") == True)

# Invalid
print(is_strong_password("short1!") == False)        # too short, no upper
print(is_strong_password("alllowercase") == False)   # no upper, digit, symbol
print(is_strong_password("ALLUPPER1!") == False)     # no lowercase
print(is_strong_password("NoSymbol123") == False)    # no symbol
print(is_strong_password("NoDigit!@#") == False)     # no digit
print(is_strong_password("OnlyLetters!") == False)   # no digit
print(is_strong_password("") == False)

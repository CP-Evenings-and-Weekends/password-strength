# Password Strength Checker

## Requirements

Write a function `is_strong_password(password)` (Python) / `isStrongPassword(password)` (JS) that returns `True`/`False`.

A password is **strong** if and only if it meets ALL of these:
- At least **8 characters** long
- Contains at least one **uppercase** letter
- Contains at least one **lowercase** letter
- Contains at least one **digit**
- Contains at least one **symbol** (anything that's not a letter, digit, or whitespace)

Use **regex** for each check. The point is to practice combining multiple regex patterns.

## Examples

```python
is_strong_password("Pa$$word1")    # -> True
is_strong_password("ShortA1!")     # -> True   (exactly 8 chars, has all)
is_strong_password("short1!")      # -> False  (too short, no uppercase)
is_strong_password("alllowercase") # -> False  (no upper, no digit, no symbol)
is_strong_password("ALLUPPER1!")   # -> False  (no lowercase)
is_strong_password("NoSymbol123")  # -> False  (no symbol)
is_strong_password("NoDigit!@#")   # -> False  (no digit)
is_strong_password("")             # -> False
```

## Test Your Code

- Python: `python password_strength_tests.py`
- JS: `node passwordStrengthTests.js`

## Stretch

Write a second function `password_report(password)` / `passwordReport(password)` that returns a dictionary/object showing **which** checks passed:

```python
password_report("short1!")
# -> { "length": False, "uppercase": False, "lowercase": True, "digit": True, "symbol": True }
```

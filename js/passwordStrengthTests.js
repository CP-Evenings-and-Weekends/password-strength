const isStrongPassword = require("./passwordStrength");

// Valid
console.log(isStrongPassword("Pa$$word1") === true);
console.log(isStrongPassword("ShortA1!") === true);
console.log(isStrongPassword("LongerPassword123!") === true);

// Invalid
console.log(isStrongPassword("short1!") === false);        // too short, no upper
console.log(isStrongPassword("alllowercase") === false);   // no upper, digit, symbol
console.log(isStrongPassword("ALLUPPER1!") === false);     // no lowercase
console.log(isStrongPassword("NoSymbol123") === false);    // no symbol
console.log(isStrongPassword("NoDigit!@#") === false);     // no digit
console.log(isStrongPassword("OnlyLetters!") === false);   // no digit
console.log(isStrongPassword("") === false);

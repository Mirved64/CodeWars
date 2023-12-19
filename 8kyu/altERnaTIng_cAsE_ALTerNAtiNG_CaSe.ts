// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.
// For example:
//
// toAlternatingCase("hello world") === "HELLO WORLD"
// toAlternatingCase("HELLO WORLD") === "hello world"
// toAlternatingCase("hello WORLD") === "HELLO world"
// toAlternatingCase("HeLLo WoRLD") === "hEllO wOrld"
// toAlternatingCase("12345")       === "12345"                   // Non-alphabetical characters are unaffected
// toAlternatingCase("1a2b3c4d5e")  === "1A2B3C4D5E"
// toAlternatingCase("String.prototype.toAlternatingCase") === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.
//

export const toAlternatingCase = (s: string): string => {
  let arr = s.split('')
  let result = new Array()
  for (let i = 0; i < arr.length; i++) {
    arr[i] === arr[i].toUpperCase() ? (result.push(arr[i].toLowerCase())) : (result.push(arr[i].toUpperCase()))
  }
  return result.join('')
}

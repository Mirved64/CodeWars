// When provided with a letter, return its position in the alphabet.
//
// Input :: "a"
//
// Ouput :: "Position of alphabet: 1"

export const position = (alphabet:string):string =>
  `Position of alphabet: ${alphabet.toLowerCase().charCodeAt(0) - 96}`

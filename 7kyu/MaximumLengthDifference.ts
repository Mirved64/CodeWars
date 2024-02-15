// You are given two arrays a1 and a2 of strings.
// Each string is composed with letters from a to z.
// Let x be any string in the first array and y be any string in the second array.
//
//   Find max(abs(length(x) − length(y)))
//
// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
//
//   Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
//   input : 2 strings with substrings separated by ,
//   output: number as a string

export const mxdiflg = (a1:string[], a2:string[]): number => {
  if (a1.length === 0 || a2.length === 0) return -1
  const maxLength1 = a1.map((value) => value.length).sort((a, b) => a - b)[0]
  const minLength1 = a1.map((value) => value.length).sort((a, b) => b - a)[0]
  const maxLength2 = a2.map((value) => value.length).sort((a, b) => a - b)[0]
  const minLength2 = a2.map((value) => value.length).sort((a, b) => b - a)[0]
  return Math.abs(maxLength1 - minLength2) >= Math.abs(minLength1 - maxLength2) ? Math.abs(maxLength1 - minLength2) : Math.abs(minLength1 - maxLength2)
}

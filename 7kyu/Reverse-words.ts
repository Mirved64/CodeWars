// Complete the function that accepts a string parameter,
// and reverses each word in the string.
// All spaces in the string should be retained.
//
//   Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

export const reverseWords = (str: string): string =>
  str.split(' ').map((el) => el.split('').reverse().join('')).join(' ')

// Instructions
// Write a function that takes a single non-empty string of only lowercase
// and uppercase ascii letters (word) as its argument, and returns an ordered
// list containing the indices of all capital (uppercase) letters in the string.
//
// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

export const capitals = (word: string): number[] =>
  [...word].reduce(
    (res: number[], el: string, index: number): number[] => /[A-Z]/.test(el) ? [...res, index] : res
    , [])

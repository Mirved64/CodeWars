// Write a function that accepts an integer n and a string s as parameters,
// and returns a string of s repeated exactly n times.
//
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

export const repeatStr = (n: number, s: string): string => {
  const array = new Array(n)
  return array.fill(s).join('')
}

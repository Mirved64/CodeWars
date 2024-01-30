// Your task is to write function factorial.
//
// https://en.wikipedia.org/wiki/Factorial

// Solution 1
// export const factorial = (n: number): number => {
//   let result = 1
//   for (let i = 1; i <= n; i++){
//     result *= i
//   }
//   return result
// }

// Solution 2
export function factorial (n: number): number {
  return n ? n * factorial(n - 1) : 1
}

// Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string, the longest possible,
// containing distinct letters - each taken only once - coming from s1 or s2.
//
//   Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

export const longest = (s1:string, s2:string): string => {
  const arrFirst = s1.split('')
  const arrSecond = s2.split('')
  const arrResult = [...arrFirst, ...arrSecond]
  const set = new Set(arrResult)
  const answer = [...set]
  const collator =  new Intl.Collator('ru')
  return answer.sort((a, b) => collator.compare(a,b)).join('')
}

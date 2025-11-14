/*
    LINK: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
    NOTE: In terms of memory usage, this solution is awesome but in terms of time complexity,
    it is O(4^n) which is not favorable.
*/

const numbers = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
};

function letterCombinations(digits: string): string[] {
  let letterCombinations: string[] = [];

  for (const digit of digits) {
    console.log(numbers[digit]);
    if (numbers[digit]) {
      if (letterCombinations.length < 1) {
        letterCombinations = letterCombinations.concat(numbers[digit]);
        continue;
      }
      const newCombinations = [];
      for (const letter of numbers[digit]) {
        for (const combination of letterCombinations) {
          newCombinations.push(combination.concat(letter));
        }
      }
      letterCombinations = newCombinations;
    }
  }

  return letterCombinations;
}

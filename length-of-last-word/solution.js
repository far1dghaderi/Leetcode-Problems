/**
 * @param {string} s
 * @return {number}
 */
//This solution is not optimal in terms of time complexity and space complexity.
// var lengthOfLastWord = function (s) {
//   let newString = '';
//   let prevChar = null;
//   let length = 0;
//   for (const char of s.trim()) {
//     if (prevChar === null) {
//       prevChar = char;
//       newString += char;
//       length += 1;
//     } else {
//       if (prevChar === ' ' && char === ' ') continue;
//       if (char === ' ') length = 0;
//       else length += 1;
//       prevChar = char;
//       newString += char;
//     }
//   }
//   return length;
// };


var lengthOfLastWord = function (s) {
  let length = 0;
  s = s.trim();
  for (let i = s.length - 1; 0 <= i; i--) {
    if (s[i] !== ' ') length += 1;
    else break;
  }
  return length;
};

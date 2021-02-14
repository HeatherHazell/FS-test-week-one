/*------------------
1)
Write a function that determines
if a number is a palindrome. A number is a
palindrome if it reads the same forwards and
backwards. 

Note:
- All negative numbers should return false.
- Single numbers should return true.

Test cases:
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(-12321)); // false
console.log(isPalindrome(1)); // true
console.log(isPalindrome(84146)); // false
console.log(isPalindrome(12)); // false
------------------*/

// This is taking the word and reversing it
//  function isPalindrome(num) {
//      let reversed = (num.split('').reverse().join(''));
//      return reversed;
//  }

// This is comparing the reversed. However, you need to compare it to the same type.
// Right now this is comparing a sting (reversedNum) and an integer (num).
// These will always be false.
// function isPalindrome(num) {
    // Split, reverse and join string to get reversed text
    // let reversedNum = num.reverse();

    // return num === reversedNum;
    // }

// // joining the two you would get the following
// function isPalindrome(num) {
//     const numStr = num.toString();
//     const reversedNum = numStr.split('').reverse().join('');
//     return numStr === reversedNum;
//   }
  
//   However, this is what we call a brute force solution. Its the simplest but least effecient.
//   I would solve this by comparing each value until I find a mismatch.
  function isPalindrome(num) {
    const numStr = num.toString();
    const lenNum = numStr.length;
    const halfLenNum = Math.floor(lenNum/2);
    for (let idx = 0; idx <= halfLenNum; idx++) {
      const mirroredIdx = (lenNum - 1) - idx;
      if (numStr[idx] !== numStr[mirroredIdx]) {
        return false;
      }
    }
    return true;
  }

console.log(isPalindrome(12321)); // true
console.log(isPalindrome(-12321)); // false
console.log(isPalindrome(1)); // true
console.log(isPalindrome(84146)); // false
console.log(isPalindrome(12)); // false
/*------------------
2)
Create a function that takes a grid
as an argument and adds all the numbers
in that grid together.

Examples:
const y = [[[1], [2]]];
console.log(addGridItems(y)); // 3

const x = [[[1, 0, -3], [2, 4], [3]], [[4, 4, 3], [5, -3, -1], [6, 10]], [[7, -5, -5], [8, 0], [9, 1]]];
console.log(addGridItems(x)); // 50
------------------*/

// function addGridItems(grid) {}


// const y = [[[1], [2]]];
// console.log(addGridItems(y)); // 3

// const x = [[[1, 0, -3], [2, 4], [3]], [[4, 4, 3], [5, -3, -1], [6, 10]], [[7, -5, -5], [8, 0], [9, 1]]];
// console.log(addGridItems(x)); // 50

/*------------------
3)
Create a function that turns a string into a
file name: all letters are lowercase, spaces are
swapped for underscores, and it includes a
file extension. 

This function should take two parameters: the string, 
and the type of file it is (so you know what file
extension to add). You only need to cover
the extensions below:
- PDF: .pdf
- image: .png
- JSON: .json

Examples:
console.log(createFileName("Sofia Engineering Resume", "PDF")); // "sofia_engineering_resume.pdf"
console.log(createFileName("Sofia Profile Photo", "image")); // "sofia_profile_photo.png"
console.log(createFileName("Data from Pokemon API", "JSON")); // "data_from_pokemon_api.json"
------------------*/

// function createFileName(string, typeOfFile) {}


// console.log(createFileName("Sofia Engineering Resume", "PDF")); // "sofia_engineering_resume.pdf"
// console.log(createFileName("Sofia Profile Photo", "image")); // "sofia_profile_photo.png"
// console.log(createFileName("Data from Pokemon API", "JSON")); // "data_from_pokemon_api.json"

/*------------------
4) Print the following pattern
99 96 93 90 88
99 96 93 90
99 96 93
99 96
99

Hints:
- Use a loop within a loop.
------------------*/

// for (let num = 99; num.length <=5; num = num -=3){
//     console.log(num);
//   }

//   for (let i = 5; i >= 99; --i) {
//     for (let j = 99; j <= i; ++j) {
//       console.log(`${j} `);
//     }
//     console.log();
//   }

//   for (let i = 5; i <= 99; i -= 3) {
//     for (let j = 1; j <= i; j -=3) {
//       console.log(j + " ");
//     }
//     console.log();
//   }

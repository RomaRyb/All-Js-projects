// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:
// "a" -> 1 
// "aab" -> 2  
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

// longestPalindrome = function (s) {
//     var longest = 0;
//     var length = s.length;

//     for (var i = 0; i < length; i++) {
//         for (var j = i + 1; j <= length; j++) {
//             var str = s.slice(i, j);
//             var l = str.length;
//             if (isPalindrome(str) && longest < l) {
//                 longest = l;
//             }
//         }
//     }
//     return longest;
// }

// function isPalindrome(s) {
//     var arr = s.split("");
//     return s == arr.reverse().join("");
// }
//======================================================
// longestPalindrome = function (s){
//     let minLength = 0;

//     for (let i = 0; i < s.length; i++){
//         for (let j = i + 1; j <= s.length; j++){
//             let str = s.slice(i,j);
//             if (isPalindrome(str) && minLength < s.length){
//                 minLength = s.length;
//             }
//         }
//     }
//     return minLength;
// }
// function isPalindrome(s) {
//     return palindrome = s.split('').reverse().join('');
// }



//===================================================
// longestPalindrome = function (s) {
//     s = s.toLowerCase().split(/\s/g,'');
//     return s === s.split('').reverse().join('');
// }

//======================================================
// function longestPalindrome(s) {
//     const len = Math.floor(s.length / 2);
//     for (let i = 0; i < len; i++){
//         if (s[i] !== s[s.length - i -1]){
//             return false;
//         }
//     }
//     return true;
//}

// function longestPalindrome(s) {
//     if (s === '') {
//         return '';
//     }
//     let arr = [];
//     let _s = s.split('');
//     for (let i = 0; i < _s.length; i++) {
//         for (let j = 0; j < _s.length; j++) {
//             let word = _s.slice(0, j + 1).join('');
//             let rev_word = _s.slice(0, j + 1).reverse().join('');
//             if (word === rev_word) {
//                 arr.push(word)
//             }
//         }
//         _s.splice(0, 1)
//     }
//     let _arr = arr.sort((a, b) => a.length - b.length);
//     for (let i = 0; i < _arr.length; i++) {
//         if (_arr[arr.length - 1].length === _arr[i].length) {
//             return _arr[i]
//         }
//     }
// }


// ========================= sol was so easy lol ==============================
var longestPalindrome = function (s) {
    if (!s) return 0;
    for (let c = s.length; c > 0; c--) {
        for (let i = 0; i <= s.length - c; i++) {
            var check = s.substr(i, c);
            if (check === check.split("").reverse().join("")) return c;
        }
    }
}

// ==================== another sol =============================
longestPalindrome = function (s) {
    //your code here
    let isPalindrome = str => str.split('').reverse().join('') === str;

    for (let i = s.length; i >= 0; i--) {
        for (let j = s.length - i; j >= 0; j--) {
            if (isPalindrome(s.substr(j, i))) {
                return i;
            }
        }
    }
}
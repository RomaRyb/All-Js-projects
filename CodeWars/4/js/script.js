                        // Complete the function that accepts a string parameter, and reverses each word in the string. 
                        // All spaces in the string should be retained.

                        // Examples
                        // "This is an example!" ==> "sihT si na !elpmaxe"
                        // "double  spaces"      ==> "elbuod  secaps"


// ============================== 1 ===========================

// function reverseWords(str) {
//     return str.split('').reverse().join('').split(' ').reverse().join(' ')
// }
// console.log(reverseWords('This is awesome!'));

// ========================== 2 with .map method ==============

function reverseWords(str) {
    return str.split(' ').map(w => w.split('').reverse().join('')).join(' ');
}
console.log(reverseWords('This is awesome!'));

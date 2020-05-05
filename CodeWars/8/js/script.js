// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//===================================== 1 =====================================


// function descendingOrder(n){
//     let result = ('' + n).split('').sort(function(a,b){return b - a});  //in ascending order
//     result = result.join('');
//     return Number(result);
// }
// console.log(descendingOrder('1234335'));

//===================================== 2 =====================================

// function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''))
// }

// console.log(descendingOrder('12343358'));

//===================================== 3 =====================================

function descendingOrder(n){
    return +(n + '').split('').sort(function(a,b){return b - a;}).join('');
}
console.log(descendingOrder('123433589'));

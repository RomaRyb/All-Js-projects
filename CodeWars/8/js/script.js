// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//https://medium.com/@stasonmars/%D0%BA%D0%B0%D0%BA-%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D1%83-%D0%B2-javascript-%D0%BF%D1%80%D0%B8-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D0%B8-sort-d492c97ccfdf

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

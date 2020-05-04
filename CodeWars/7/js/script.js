// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

// The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

// #Examples:

// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]
// The form of the examples may change according to the language, see Example Tests: for more details.

// Note

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

// explain from https://www.florin-pop.com/blog/2019/06/jcc-integers-recreation-one/



 // ====================================== 1 ==============================

// function listSquared(m, n) {
//     const res = [];

//     for (let i = m; i <= n; i++) {
//         const divs = devisorsOf(i);

//         const sumOfSquaredDivs = divs.reduce(
//             (accumulator, current) => (accumulator += current * current),
//             0
//         );

//         if (isSquare(sumOfSquaredDivs)) {
//             res.push([i, sumOfSquaredDivs]);
//         }
//     }

//     return res;
// }

// console.log(listSquared(1, 42));


// function devisorsOf(x) {
//     const devisors = [];
//     for (let j = 1; j <= x; j++){
//         if(x % j === 0){
//             devisors.push(j);
//         }
//     }
//     return devisors;
// }

// function isSquare(x) {
//     return Math.sqrt(x) % 1 === 0;
// }

 // ============================ 2 ================================== other

function listSquared(m, n) {
    let answer = [];
    for (let i = m; i <= n; i++) {                              //loop through each digit m --> n
        let squaredArray = [];
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {                                 //find each digit's divisors
                squaredArray.push(Math.pow(j, 2));               //square them and pop them in an array
            }
        }

        let squaredSum = squaredArray.reduce((a, b) => a + b);  //reduce that array

        if (Number.isInteger(Math.sqrt(squaredSum))) {        //check if the square root of that reduction is an integer
            answer.push(Array.of(i, squaredSum));              //push it along with the original number as an Array
        }
    }
    return answer;                                          //return it like you bought it from Bed, Bath, and Beyond
}

                            //Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument 
                            //(also a string).

                            //Examples:

                            //solution('abc', 'bc') // returns true
                            //solution('abc', 'd') // returns false


function solution(str, ending){
    if (str.substr(-ending.length) === ending){
        return true
    }else {
        return false;
    }
}
console.log(solution('abcdf', 'cdf'));



//https://www.freecodecamp.org/news/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac/   explain





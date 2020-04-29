
                                // In this kata you are required to, given a string, replace every letter with its position in the alphabet.
                                // If anything in the text isn't a letter, ignore it and don't return it.
                                // "a" = 1, "b" = 2, etc.
                                // Example
                                // alphabetPosition("The sunset sets at twelve o' clock.")
                                // Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)





//========================   1   =======================
function alphabet(text) {
    let position = [];
    for (let i = 0; i < text.length; i++) {
        let letterCode = text.charCodeAt(i);
        if (letterCode >= 97 && letterCode <= 122){
            position.push(letterCode - 96);
        } else if (letterCode === -1) {
            continue;
        }
    }
    return position.join(" ");
};
let position = alphabet(' a hooba  sta;;nk');
console.log(position);

//========================   1.1 works on code wars   =======================
function alphabetPosition(text) {
    let position = [];
    
    text = text.toLowerCase();
    
    for (let i = 0; i < text.length; i++){
    let letterCode = text.charCodeAt(i);
        if(letterCode >= 97 && letterCode <= 122){
        position.push(letterCode - 96);
        }else if (letterCode === -1){
        continue;
        }
        
    }
    return position.join(" ");
}
alphabetPosition("The sunset sets at twelve o' clock.");
alphabetPosition("The narwhal bacons at midnight.");

//========================   1.3 works on code wars   =======================

function alphabetPosition(text) {
    return text
        .toUpperCase()
        .match(/[a-z]/gi)
        .map( (c) => c.charCodeAt() - 64)
        .join(' ');
    }

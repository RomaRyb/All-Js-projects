// ==================== 1 =====================

// function DNAStrand(dna){
//     let result = '';
//     for(let i = 0; i < dna.length; i++){
//         switch(dna[i]) {
//             case 'A':
//                 result += 'T';
//                 break;
//             case 'T':
//                 result += 'A';
//                 break;
//             case 'C':
//                 result += 'G';
//                 break;
//             case 'G':
//                 result += 'C';
//                 break;
//             default:
//                 return 'u are an alien 0_o';
//         }
//     }
//     return result;
// }
// console.log(DNAStrand('AATTCCGG'));

// ========================== 2 ======================

var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
    return dna.split('').map(function(v){ return pairs[v] }).join('');
}

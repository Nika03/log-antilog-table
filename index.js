"use strict";

// array that holds integers, index is the exponent for the integer 
var exp = [];
// holds integer until pushed to array
var integer = 0;
// holds xor output 
var xored;
// exponent for 2nd if statement 
var pow = 1;
 
// 256 values, 0-255
for (var i = 0; i < 256; i++) {
    // initialization by getting 2**0 to 2**8
    if (integer <= 256 && i <= 8) {
        integer = 2 ** i;
    }
    // if i is less than 8 is here to make sure that init stage doesn't trip
    // integer has to be less or equal, to make sure xor stage doesn't trip
    if (i > 8 && integer <= 255) {
        // take xored var and multiply by pow, which rises until int is above 255
        integer = xored * 2 ** pow;
        pow++;
    }
    // when more than 255, xor integer with 285 and save that value in 'xored' var for 2nd if statement
    if (integer > 255) {
        integer = integer ^ 285;
        xored = integer;
        // pow gets reset after xor
        pow = 1;
    }
    exp.push(integer);
} 

console.log(`Integer for exponent 55: ${exp[55]}`);
console.log(`Exponent for integer 55: ${exp.findIndex((element) => element == 55)}`);

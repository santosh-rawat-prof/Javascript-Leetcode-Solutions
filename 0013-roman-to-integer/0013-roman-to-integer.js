/**
 * @param {string} s
 * @return {number}
 */

// Brute Force 
// var romanToInt = function(s) {
//     const romans = s.split("");
//     let prev = 0;
//     let convertedNumber = 0;
//     romans.map((roman) => {
//         if(roman === "I") {
//             convertedNumber += 1;
//             prev = 1;
//         } else if(roman === "V") {
//             if(prev === 1) {
//                 convertedNumber += 3;
//             } else {
//                 convertedNumber += 5;
//             }
//         }
//         else if(roman === "X") {
//             if(prev === 1) {
//                 convertedNumber += 8
//             } else {
//                 convertedNumber += 10;
//                 prev = 10;
//             }
//         }
//         else if(roman === "L") {
//             if(prev === 10) {
//                 convertedNumber += 30;
//             } else {
//                 convertedNumber += 50;
//             }
//         }
//         else if(roman === "C") {
//             if(prev === 10) {
//                 convertedNumber += 80;
//             } else {
//                 convertedNumber += 100;
//                 prev = 100;
//             }
//         }
//         else if(roman === "D") {
//             if(prev === 100) {
//                 convertedNumber += 300;
//             } else {
//                 convertedNumber += 500;
//             }
//         }
//         else if(roman === "M") {
//             if(prev === 100) {
//                 convertedNumber += 800;
//             } else {
//                 convertedNumber += 1000;
//             }
//         }
//     })
//     console.log(romans);
//     return convertedNumber;
// };

// Optimized

var romanToInt = function(s) {
    const romanToIntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let convertedNumber = 0;
    let prevValue = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
        let currentValue = romanToIntMap[s[i]];
        
        if (currentValue >= prevValue) {
            convertedNumber += currentValue;
        } else {
            convertedNumber -= currentValue;
        }
        
        prevValue = currentValue;
    }
    
    return convertedNumber;
};
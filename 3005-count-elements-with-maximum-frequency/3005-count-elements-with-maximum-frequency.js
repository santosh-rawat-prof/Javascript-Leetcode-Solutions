/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {

    let count = new Array(101).fill(0);

    let maxFreq = 0;

    nums.forEach((num) => {
        count[num]++;
        maxFreq = Math.max(maxFreq, count[num]);
    })

    let result = 0;

    for (i = 0; i < 101; i++) {
        if (count[i] === maxFreq) {
            result += maxFreq;
        }
    }

    return result;

};
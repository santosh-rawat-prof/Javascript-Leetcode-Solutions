/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Time Complexity O(n^2)
    // for(i = 0; i <= nums.length; i++) {
    //     for(j = i + 1; j <= nums.length; j++) {
    //         if(nums[i] + nums[j] == target) {
    //             return [i,j];
    //         }
    //     }
    // }

    // Time Complexity O(n) Using Map
    const seenNumbers = {};
    for(i = 0; i <= nums.length; i++) {
        let remainingCount = target - nums[i];
        if(seenNumbers.hasOwnProperty(remainingCount)) {
            return [seenNumbers[remainingCount], i]
        } else {
            seenNumbers[nums[i]] = i;
        }
    }
};
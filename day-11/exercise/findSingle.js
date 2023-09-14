function singleNumber(nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num; // operasi ^= untuk menambah array jika ada array yang sama maka dikurangi dengan bilangan yang sama
    }
    return result;
}
// input
const nums1 = [2, 2, 1];
console.log(singleNumber(nums1)); // Output: 1

const nums2 = [4, 1, 2, 1, 2];
console.log(singleNumber(nums2)); // Output: 4

const nums3 = [1];
console.log(singleNumber(nums3)); // Output: 1

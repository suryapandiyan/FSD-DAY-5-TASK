// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  
function findMedianSortedArrays(nums1, nums2) {
  const n = nums1.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const mid1 = Math.floor((left + right) / 2);
    const mid2 = n - 1 - mid1;

    if (nums1[mid1] > nums2[mid2 + 1]) {
      right = mid1 - 1;
    } else if (nums2[mid2] > nums1[mid1 + 1]) {
      left = mid1 + 1;
    } else {
      return (Math.max(nums1[mid1], nums2[mid2]) + Math.min(nums1[mid1 + 1], nums2[mid2 + 1])) / 2;
    }
  }
}

   
 });
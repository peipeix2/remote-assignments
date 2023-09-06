function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.includes(target - nums[i])) {
      let secondIndex = nums.indexOf(target - nums[i])
      return [i, secondIndex]
    }
  }
  return `Can't find any solution.`
}

console.log(twoSum([2, 7, 11, 15], 9))
function twoSum(numbers, target) {
  let result = [];

  numbers.forEach((number, index) => {
    numbers.forEach((targetNumber, targetIndex) => {
      if (numbers[index] === numbers[targetIndex]) return;
      if (number + targetNumber === target) result = [index, targetIndex];
    });
  });

  return result;
}

console.log(twoSum([2, 2, 3], 4));

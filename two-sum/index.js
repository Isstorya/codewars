function twoSum(numbers, target) {
  let result = [];

  numbers.forEach((number, index) => {
    numbers.forEach((targetNumber, targetIndex) => {
      if (index === targetIndex) return;
      if (number + targetNumber === target) result = [index, targetIndex];
    });
  });

  return result;
}

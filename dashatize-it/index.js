function dashatizeit(inputNumber) {
  const slicedNumber = inputNumber.toString().split("");
  const isEven = (number) => {
    return !(number % 2);
  };
  const mappedNumbers = slicedNumber.map((number) => {
    if (isEven(number)) {
      return number;
    } else {
      return "-" + number + "-";
    }
  });
  return mappedNumbers;
}

console.log(dashatizeit(974302));

function dashatizeit(inputNumber) {
  const isEven = (number) => !(number % 2);

  const slicedNumber = inputNumber.toString().split("");
  const mappedNumbers = slicedNumber.map((number, index) => {
    if (isEven(number)) {
      return number;
    } else {
      if (index === 0) {
        return number + "-";
      }
      if (index === slicedNumber.lenght - 1) {
        return "-" + number;
      }
      return "-" + number + "-";
    }
  });

  return mappedNumbers.join("");
}

console.log(dashatizeit(974302));
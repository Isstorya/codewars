function dashatize(inputNumber) {
  if (!Number.isInteger(inputNumber)) {
    return "NaN";
  }

  const isEven = (number) => !(number % 2);
  const replaceDash = (str) => str.replace(/--+/g, "-");
  const removeFirstNLastDash = (str) => {
    let result = str;
    if (result.startsWith("-")) {
      result = result.slice(1);
    }
    if (result.endsWith("-")) {
      result = result.slice(0, -1);
    }
    return result;
  };

  const slicedNumber = inputNumber.toString().split("");
  const mappedNumbers = slicedNumber.map((number) =>
    isEven(number) ? number : "-" + number + "-"
  );

  return removeFirstNLastDash(replaceDash(mappedNumbers.join("")));
}

console.log(dashatize(-86320));

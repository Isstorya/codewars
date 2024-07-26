var numeralCodes = [
  ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], // Ones
  ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], // Tens
  ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], // Hundreds
];

const findOnes = function (number) {};

function solution(roman) {
  const result = [];
  let tmp = roman[0];
  for (let index = 1; index < roman.length; index++) {
    numeralCodes.forEach((code) =>
      code.forEach((number) => {
        console.log(tmp);
        if (tmp + roman[index] == number) tmp += roman[index];
        else {
          result.push(tmp);
          tmp = roman[index];
        }
      })
    );
  }
  return;
}
solution("XXI"); //21
solution("I");
solution("IV");
solution("MMVIII");
solution("MDCLXVI");

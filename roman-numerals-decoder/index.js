function solution(romanNumeral) {
  var romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  var result = 0;
  for (var i = romanNumeral.length - 1; i >= 0; i--) {
    var currentValue = romanValues[romanNumeral[i]];
    if (i > 0 && romanValues[romanNumeral[i - 1]] < currentValue) {
      result += currentValue - romanValues[romanNumeral[i - 1]];
      i--;
    } else {
      result += currentValue;
    }
  }
  console.log(result);
  return result;
}
solution("XXI"); //21
solution("I");
solution("IV");
solution("MMVIII");
solution("MDCLXVI");

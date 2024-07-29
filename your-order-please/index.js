function order(words) {
  const slicedWords = words.split(" ");
  const result = new Array(slicedWords.length);
  for (let index = 0; index < slicedWords.length; index++) {
    result[index] = slicedWords.find((word) =>
      word.split("").some((v) => +v === index + 1)
    );
  }
  return result.join(" ");
}

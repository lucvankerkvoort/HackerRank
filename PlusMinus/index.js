const sample = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  const sorted = arr.sort();
  const length = arr.length;
  let answer = "";
  let negative = 0;
  let zero = 0;
  let positive = 0;

  for (let i = 0; i < length; i++) {
    if (sorted[i] > 0) {
      positive++;
    } else if (sorted[i] === 0) {
      zero++;
    } else if (sorted[i] < 0) {
      negative++;
    }
  }

  let fractionNegative = negative / length;
  let fractionPositive = positive / length;
  let fractionZero = zero / length;

  answer =
    fractionPositive.toFixed(6) +
    "\n" +
    fractionNegative.toFixed(6) +
    "\n" +
    fractionZero.toFixed(6);

  console.log(answer);
}

plusMinus(sample);

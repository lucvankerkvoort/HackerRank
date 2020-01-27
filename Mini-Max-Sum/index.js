const arr = [1, 2, 4, 5, 3];

function miniMaxSum(arr) {
  // if the array has one number we return that number
  if (arr.length < 2) {
    return arr;
  }

  // if the array has not been sorted we sort it
  const sorted = arr.sort((a, b) => a - b);

  let answer = "";
  let highest = 0;
  let lowest = 0;
  const highArr = sorted.slice(0, arr.length - 1);
  const lowArr = sorted.slice(1, arr.length);

  for (let i = 0; i < highArr.length; i++) {
    highest += highArr[i];
    lowest += lowArr[i];
  }

  answer = highest + " " + lowest;

  console.log(answer);
}

miniMaxSum(arr);

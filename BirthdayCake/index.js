const arr = [3, 2, 1, 3];

function birthdayCake(arr) {
  const sorted = arr.sort((a, b) => a - b);
  console.log(sorted);
}

birthdayCake(arr);

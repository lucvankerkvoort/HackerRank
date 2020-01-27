const arr = [3, 2, 1, 3];

function birthdayCake(arr) {
  let counter = 0;

  const highestNum = Math.max(...arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === highestNum) {
      counter++;
    }
  }
  console.log(counter);
}

birthdayCake(arr);

const arr = [1, 2, 3, 4, 5];

function leftRotation(arr, num) {
  for (let i = 0; i < num; i++) {
    let removableItem = arr.shift();
    arr.push(removableItem);
  }
  return console.log(arr);
}
leftRotation(arr, 3);

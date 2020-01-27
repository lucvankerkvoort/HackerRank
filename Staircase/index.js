const n = 6;

function staircase(n) {
  let str = "";
  let pound = "#";
  let empty = " ";
  for (let i = 1; i < n + 1; i++) {
    str += empty.repeat(n - i);
    str += pound.repeat(i) + "\n";
  }
  console.log(str);
}

staircase(n);

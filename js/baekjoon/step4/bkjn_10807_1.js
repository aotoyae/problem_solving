const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = input[0];
const s = input[1].split(" ");
const v = input[2];
let result = 0;

for (i = 0; i <= n; i++) {
  if (s[i] === v) {
    result++;
  }
}
console.log(result);

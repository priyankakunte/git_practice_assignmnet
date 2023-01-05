let num = 7;
let stat = "Yes";
for (i = 2; i <= num / 2; i++) {
  if (num % 2 == 0) {
    if (i != 1) {
      stat = "No";
      break;
    }
  }
}
console.log(stat);

let num = 15;
let stat = "Yes";
for (i = 1; i <= num / 2; i++) {
  if (num % i == 0) {
    if (i != 1) {
      stat = "No";
      break;
    }
  }
}
console.log(stat);
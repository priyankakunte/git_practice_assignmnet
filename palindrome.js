let str = "Priyanka";
let N = str.length;
let a = "";
for (let i = N-1; i >= 0; i--) {
  a = a + str[i];
}
if (str== a) {
  console.log("Yes");
} else {
  console.log("No");
}
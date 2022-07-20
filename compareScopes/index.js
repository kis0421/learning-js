for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 100);
}

for (var i = 0; i < 10; i++) {
  ((a) => setTimeout(() => {
    console.log(a);
  }, i * 100))(i);
}

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 100);
}

//-----------
var vv = 4;
function aaa() {
  console.log(vv); // undefined;
  var vv = 1;
  console.log(vv);
}
console.log(vv);
aaa();
console.log(vv);
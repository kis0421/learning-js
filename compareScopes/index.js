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
function testHoisting() {
  console.log(vv); // undefined;
  var vv = 1;
  console.log(vv);
}
console.log(vv);
testHoisting();
console.log(vv);

//-----------
function testGlobalVariable() {
  // console.log(vv);
  adad = 1;
  console.log(adad);
}
testGlobalVariable();
console.log(adad,"v");
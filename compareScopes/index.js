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
let count = 0;

for (count = 0; count < 11; count++) {
  if (count == 4) {
    console.log("Loop Broken!");
    continue;
  }
  console.log(count);
}

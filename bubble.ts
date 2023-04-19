function bubbleSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        // let temp: number = array[j];
        // array[j] = array[i];
        // array[i] = temp;
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
  return array;
}

// let testArray = [10, 11, 21, 412, 79, 90, 121, 56, 78, 2, 21, 6];
let testArray2: number[] = [];
for (let i = 0; i < 100; i++) {
  testArray2.push(Math.round(Math.random() * 100));
}
console.log(testArray2);
console.log(bubbleSort(testArray2));

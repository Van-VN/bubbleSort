function bubbleSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // let temp: number = array[j];
        // array[j] = array[i];
        // array[i] = temp;
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        console.log(`Swap ${array[j]} with ${array[j + 1]}`);
        console.log(`Current Array is: \n${array}\n`);
      }
    }
  }
  return array;
}

// let testArray = [10, 11, 21, 412, 79, 90, 121, 56, 78, 2, 21, 6];
let testArray2: number[] = [];
for (let i = 0; i < 10; i++) {
  testArray2.push(Math.round(Math.random() * 100));
}
console.log(testArray2);
console.log(bubbleSort(testArray2));

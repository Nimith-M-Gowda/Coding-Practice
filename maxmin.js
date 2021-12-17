const arr = [3, 5, 1, 2, 6, 9, 2, 10, 11, -6, -34];
getminmax = (arr) => {
  let min = arr[arr.length - 1];
  let max = arr[arr.length - 1];
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i * 2] > arr[i * 2 + 1]) {
      max = max < arr[i * 2] ? (max = arr[i * 2]) : max;
      min = arr[i * 2 + 1] < min ? arr[i * 2 + 1] : min;
    } else {
      max = max < arr[i * 2 + 1] ? arr[i * 2 + 1] : max;
      min = arr[i * 2] < min ? arr[i * 2] : min;
    }
  }

  return { max, min };
};
console.log(getminmax(arr));

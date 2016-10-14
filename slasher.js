function slasher(arr, howMany) {
  leftOvers = arr.splice(0,howMany)
  return arr;
}


slasher([1, 2, 3], 2);
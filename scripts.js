function isValidSubsequence(array, sequence) {
  // Write your code here.
  let arrIndex = 0;
  let seqIndex = 0;
  while(arrIndex < array.length && seqIndex < sequence.length) {
    if (sequence[seqIndex] == array[arrIndex]) {
      seqIndex++;
    }
    arrIndex++;
  }
  return seqIndex == sequence.length;
}


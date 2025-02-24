function getFibonacciSequence(num: number, sequence: number[] = [0, 1]) {
  if (sequence.length >= num) {
    return sequence.slice(0, num);
  }
  const fibonacciElement = sequence.at(-1) + sequence.at(-2);
  sequence.push(fibonacciElement);
  return getFibonacciSequence(num, sequence);
}


function getFibonacciSequence(num: number): number[] {
  if (num === 1) {
    return [0];
  }
  if (num === 2) {
    return [0, 1];
  }

  const fibonacciSequence = [0, 1];
  for (let i = 2; i < num; i++) {
    const fibonacciElement = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(fibonacciElement);
  }
  return fibonacciSequence;
}

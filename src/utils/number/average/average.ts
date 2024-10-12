export const average = (array: Array<number>) =>
  array.reduce((acc: number, num: number) => acc + num, 0) / array.length;

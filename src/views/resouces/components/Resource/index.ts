/**
 * 将一维列表转换为二维列表(网格数据)
 * @param array 一维列表
 * @param columns 每行的元素个数
 * @returns 二维列表
 */
export function convertToGridArray(array: Resource[], numArrays: number) {
  const result: Resource[][] = new Array(numArrays).fill([]).map(() => []);
  for (let i = 0; i < array?.length; i++) {
    result[i % numArrays].push(array[i]);
  }
  return result;
}

/**
 * 将一维列表转换为二维列表(瀑布流数据)
 * @param array 一维列表
 * @param columns 每行的元素个数
 * @returns 二维列表
 */
export function convertToWaterfallArray(array: Resource[], numArrays: number) {
  const result: Resource[][] = new Array(numArrays).fill([]).map(() => []);
  const columnHeights: number[] = new Array(numArrays).fill(0);
  array?.forEach((item) => {
    const shortestColumnIndex = columnHeights.indexOf(
      Math.min(...columnHeights)
    );
    result[shortestColumnIndex].push(item);
    columnHeights[shortestColumnIndex] += item.height;
  });
  return result;
}

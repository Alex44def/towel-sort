
module.exports = function towelSort(matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return []
  }
  let arr = matrix[0];
  for (let i = 1; i < matrix.length; i++) {
    let tempArr = ((i + 1) % 2 === 0) ? matrix[i].reverse() : matrix[i];
    arr = arr.concat(tempArr);
  }
  return arr;
}

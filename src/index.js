
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = [];
  if (!matrix) return [];
  else matrix.map((element, index) => {
      if (index % 2 !== 0) {
            element.reverse();
        }
        newArr.push(element)
    })
    return newArr.flat();

}

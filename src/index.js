
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let myArr = [];
  let result = [];
  if (matrix){
  for (let i = 0; i < matrix.length; i++) {
    if(i === 0 || i%2 === 0){
      myArr.push(matrix[i])
      continue;
    }else{
      myArr.push(matrix[i].reverse())
    }
  }
  for(let i = 0; i < myArr.length; i++){
    for(let x = 0; x < myArr[i].length; x++){
      result.push(myArr[i][x]);
    }
  }
  return result
}else{
  return [];
}  
}

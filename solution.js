function descendingOrder(n){
  let nStrArr = n.toString().split('')
  let numArr = nStrArr.map(eachNum => parseInt(eachNum)).sort().reverse().join('')

  return parseInt(numArr)
}
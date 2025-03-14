function fibonacci(num) {
  
  if(num <= 2) {
    return
  }
  runningTotal = [0,1]
  for (x=2;x<num;x++) {
    runningTotal.push(runningTotal[x-2]+runningTotal[x-1])

  }
  return runningTotal
}
console.log(fibonacci(9))
module.exports = fibonacci;

//done1
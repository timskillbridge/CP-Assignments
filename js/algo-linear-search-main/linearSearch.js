function linearSearch(searchTerm, arr) {

  for(x = 0; x<arr.length; x++)
    if (arr[x] == searchTerm) {
      return x
    }
  return undefined;
}

function globalLinearSearch(searchTerm, arr) {
  answers = []
  for(x=0; x<arr.length; x++)
    if (arr[x] == searchTerm) {
      answers.push(x)
    }
  if (answers.length == 0) {
    return undefined
  } else {return answers}
}

console.log(linearSearch("asdf",["a","b","c","asdf",false,true]))
console.log(globalLinearSearch("mac",["steve","mac","mike","mac","Tony"]))
module.exports = { linearSearch, globalLinearSearch };

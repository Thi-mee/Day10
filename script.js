
function mergeAndSort(x,y){
  let arrMerge = []
  x.forEach(number => {
    arrMerge.push(number)
  });
  y.forEach(number =>{
    arrMerge.push(number)
  })

  // using bubbling method
  let done = false
  while(!done){
    done = true
    for (let i = 1; i < arrMerge.length; i+=1) {
      if(arrMerge[i - 1] > arrMerge[i]){
        done = false
        let temp = arrMerge[i - 1]
        arrMerge[i - 1] = arrMerge[i]
        arrMerge[i] = temp 
      }
    }
  }
  return arrMerge
}


console.log(mergeAndSort([1,3,7,2,3,4], [6,2,5,1]))
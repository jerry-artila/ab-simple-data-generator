/**
 * 
 * @param dataSeries 數字陣列
 * @param forever 布林旗標
 */
function * simpleDataGenerator (dataSeries, forever=true){
  let i = 0
  while(i<dataSeries.length){
    yield dataSeries[i++]
    if(forever && i==dataSeries.length){
      i=0
    }
  }
}

export {simpleDataGenerator}

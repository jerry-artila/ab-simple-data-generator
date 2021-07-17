import { simpleDataGenerator } from "./index.mjs"

import {expect} from "chai"

expect(true).to.be.true

console.log('start testing')
console.log('test phase 1 ...')


const dataSeries = [1,2,3,4,5,4,3,2]

//使用原始的 for loop 來迭代
let dataGen = simpleDataGenerator(dataSeries, false)
for(let i=0; i<dataSeries.length; i++){
  let item = dataGen.next()
  // console.log(item)
  expect(item.value).to.be.equals(dataSeries[i])
  expect(item.done).to.be.equals(false)
}

console.log('test phase 2 ...')
// 使用 forof 來迭代，注意：會直接迭代出 value
// 而且會每次會檢查 done 的狀態
// 迭代器數據用磬，精盡人忘，必需再一次補血
dataGen = simpleDataGenerator(dataSeries, false)
let i=0
for (const value of dataGen) {
  // console.log(value)
  expect(value).to.be.equals(dataSeries[i++])
}

console.log('done!')
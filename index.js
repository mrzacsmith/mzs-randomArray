let randomArray = []

const arrayLength = (maxNum) => Math.floor(Math.random() * maxNum) + 3
const arrayValues = () => Math.floor(Math.random() * 500) - 30

const createRandomArray = (n, cb = arrayValues) => {
  let max = arrayLength(n)
  for (let i = 0; i < max.length + 1; i++) {
    let ran = cb()
    randomArray.push(ran)
    console.log(randomArray)
  }
  return randomArray
}

module.exports = createRandomArray

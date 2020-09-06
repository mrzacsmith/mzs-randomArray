const randomArray = []

const arrLength = (range) => {
  return Math.floor(Math.random() * range) + 3
}
const arrValues = () => {
  return Math.floor(Math.random() * 500) - 30
}

const createRandomArray = (n, cb = arrValues) => {
  let max = arrLength(n)
  for (let i = 0; i < max; i++) {
    let ran = cb()
    randomArray.push(ran)
  }
  return randomArray
}

module.exports = createRandomArray

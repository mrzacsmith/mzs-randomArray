const randomArray = []

const arrLength = (range) => {
  return Math.floor(Math.random() * range) + 3
}
const arrValues = (minV, maxV) => {
  return Math.floor(Math.random() * (maxV - minV)) + minV
}

const createRandomArray = (n, minV = -30, maxV = 500, cb = arrValues) => {
  if (typeof n !== 'number' || n <= 1 || n == null) {
    n = 10
  }

  let max = arrLength(n)
  for (let i = 0; i < max; i++) {
    let ran = cb(minV, maxV)
    randomArray.push(ran)
  }
  return randomArray
}

module.exports = createRandomArray

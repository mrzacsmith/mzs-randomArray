const randomArray = []

const arrLength = (range) => {
  return Math.floor(Math.random() * range) + 3
}
const arrValues = (minV, maxV) => {
  return Math.floor(Math.random() * maxV) - Math.abs(minV)
}

const createRandomArray = (n, minV = 30, maxV = 500, cb = arrValues) => {
  if (!Number.isInteger(n) || n <= 1 ) {
    console.log("n must be an integer greater than 1.")
    n = 10
  }

  if (!Number.isInteger(maxV)) {
    console.log("maxV must be an integer.")
    maxV = 500
  }

  if (!Number.isInteger(minV)) {
    console.log("minV must be an integer.")
    minV = 30
  }

  if (minV >= maxV) {
    console.log("minV must be less than maxV.")
    minV = 30
    maxV = 500
  }

  let max = arrLength(n)
  for (let i = 0; i < max; i++) {
    let ran = cb(minV, maxV)
    randomArray.push(ran)
  }
  return randomArray
}

module.exports = createRandomArray

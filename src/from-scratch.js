const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront) {
    arr.unshift(value)
  } else {
    arr.push(value)
  }
};

const reverseString = (str) => {
  const letters = str.split('')
  const reversed = letters.reverse()
  const joined = reversed.join('')
  return joined
};

const newArrayFullOf = (value, numOfValue) => {
  const arr = []
  for (let i = 0; i < numOfValue; i ++) {
    arr.push(value)
  } return arr

};

const insertIntoMiddle = (arr, value) => {
  const middleIndex = Math.floor(arr.length / 2)
  arr.splice(middleIndex, 0, value)
};

const deleteFromMiddle = (arr, value) => {
  const middleIndex = Math.floor(arr.length / 2)
  arr.splice(middleIndex, 1)
};


const isRightIndex = (arr, value, index) => {
  
  if (arr[index] === value) {
    return true
  } else {
    return false
  }
};

const roundAllNumsDown = (arr) => {
  return arr.map(num => Math.floor(num))
};

const getAllYCoordinates = (arrOfCoords) => {
  const result = []
  for (let i = 0; i < arrOfCoords.length; i ++) {
    const coordinate = arrOfCoords[i]
    const y = coordinate[1]
    result.push(y)
  } return result 
}; 

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};

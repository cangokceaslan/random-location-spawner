import {generateRandomLat,generateRandomLong} from './modules/coordinates';


export const generateRandomCoordinate = ()=>{
  return {
    latitude:generateRandomLat(),
    longitude:generateRandomLong()
  }
}

export const generateRandomCoordinates = (len = 1) => {
  const arr = [];
  Array(len).fill(1).forEach((item,index)=>{
      arr.push({
        latitude:generateRandomLat(),
        longitude:generateRandomLong()
      })
  })
  return arr;
}

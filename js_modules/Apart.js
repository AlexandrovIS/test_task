import {EXCAHGE_RATE} from './const.js'

export default function Apart(title,apartNum,numOfRooms, price,corpus,delivery){
  if(!new.target){
    return new Apart(title,apartNum,numOfRooms, price,corpus,delivery)
  }
    this.id=`${title}_${apartNum}_${corpus}`
    // this.title=title,
    this.apartNum=apartNum,
    this.numOfRooms=numOfRooms,
    this.price=price*EXCAHGE_RATE,
    this.corpus=corpus,
    this.delivery=delivery
}

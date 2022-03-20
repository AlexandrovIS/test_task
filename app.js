import ApartmentComplex from './js_modules/ApartmentComplex.js'
import {ApartBase} from './js_modules/createAparts.js'
import {YEAR_OF_DELIVERY} from './js_modules/const.js'
import {roomFilter,deliveryFilter,priceFilter} from './js_modules/filters/filters.js'
import {isActiveBtn} from './js_modules/renders/isActiveBtn.js'
import {rangeMinMaxParam} from './js_modules/renders/rangeParam.js'
import {render} from './js_modules/renders/render.js'

const roomList=document.querySelectorAll('#numOfRoomsList li')
const deliveryList=document.querySelectorAll('#delivery li input')
const formBtn=document.getElementById('getFormInfo')
const minInput=document.getElementById('inputMinPrice')
const maxInput=document.getElementById('inputMaxPrice')

const collectionActiveRoom=[]
const collectionActiveDelivery=[]
let roomsFilterResult=[]
let deliveryFilterResult=[]
let currentBase = JSON.parse(JSON.stringify(ApartBase))

render(currentBase)

function roomInstruction(el){
  let gettingParam=el.target.dataset.room
  isActiveBtn('room',gettingParam)
  roomsFilterResult=launchFilter(gettingParam,collectionActiveRoom,roomFilter)
  
   let arr= choiseRenderArray(currentBase,roomsFilterResult,deliveryFilterResult) 
   
   rangeMinMaxParam(arr)
   render(arr)
}

function deliveryInstruction(el){
  let gettingParam=`${el.target.id}.${YEAR_OF_DELIVERY}`
  deliveryFilterResult=launchFilter(gettingParam,collectionActiveDelivery,deliveryFilter)
  
  let arr= choiseRenderArray(currentBase,roomsFilterResult,deliveryFilterResult)
  
  rangeMinMaxParam(arr)
  render(arr)
}

function launchFilter(paramName, collectionName,filterName){
  let value=collectionName.indexOf(paramName)
  if(value==-1)collectionName.push(paramName)
  else collectionName.splice(value,1)
  return filterName(currentBase,collectionName)
}

function priceInstruction(min,max){
  let arr= choiseRenderArray(currentBase,roomsFilterResult,deliveryFilterResult)
  let arrForRender=priceFilter(arr,min,max)
  render(arrForRender)
}

function choiseRenderArray(currentArr, roomsArr, deliveryArr){
  let arr=[]
  arr.length=0
  
  if(roomsArr.length==0 && deliveryArr.length==0)return currentArr

  else if(roomsArr.length>0 && deliveryArr.length==0){
   currentArr.forEach(currentEl=>{
    const result=new ApartmentComplex(currentEl.img,currentEl.title, currentEl.district,currentEl.notes)
    roomsArr.forEach((roomEl,ind)=>{
       if(currentEl.title==roomEl.title){
         currentEl.aparts.forEach(item=>{
           roomEl.aparts.forEach(item2=>{
             if(item.id==item2.id){
              result.addApart(item)
             }
           })
         })
       }
     })
     if(result.aparts.length>0){
      arr.push(result)
    }
     return arr
   })
   
   return arr
  }

  else if(roomsArr.length==0 && deliveryArr.length>0){
    currentArr.forEach(currentEl=>{
      const result=new ApartmentComplex(currentEl.img,currentEl.title, currentEl.district,currentEl.notes)
     deliveryArr.forEach(roomEl=>{
        if(currentEl.title==roomEl.title){
          currentEl.aparts.forEach(item=>{
            roomEl.aparts.forEach(item2=>{
              if(item.id==item2.id){
               result.addApart(item)
              }
            })
          })
        }
      })
      if(result.aparts.length>0){
        arr.push(result)
      }
      return arr
    })
    
    return arr
  }
  
  else if(roomsArr.length>0 && deliveryArr.length>0){
    let firstArr=[]
    let secondArr=[]

    roomsArr.length<deliveryArr.length? firstArr=JSON.parse(JSON.stringify(roomsArr)) : firstArr=JSON.parse(JSON.stringify(deliveryArr))
    roomsArr.length>=deliveryArr.length? secondArr=JSON.parse(JSON.stringify(roomsArr)) : secondArr=JSON.parse(JSON.stringify(deliveryArr))
    
    firstArr.forEach(currentEl=>{
      
      const result=new ApartmentComplex(currentEl.img,currentEl.title, currentEl.district,currentEl.notes)
      
      secondArr.forEach(secondEl=>{
        
        if(currentEl.title==secondEl.title){
         
          currentEl.aparts.forEach(item=>{
            secondEl.aparts.forEach(item2=>{
              if(item.id==item2.id){
               
                result.addApart(item)

              }
            })
          })
        }
      })
      if(result.aparts.length>0){
        
        arr.push(result)
      }
      return arr
    })

    return arr
  }
}


roomList.forEach(el=>el.addEventListener('click',roomInstruction))
deliveryList.forEach(el=>el.addEventListener('click',deliveryInstruction))
// priceInstruction(3000000,4000000)

formBtn.addEventListener('click',()=>{
  priceInstruction(minInput.value,maxInput.value)
})
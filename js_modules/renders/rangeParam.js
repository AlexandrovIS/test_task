import {ApartBase} from '../createAparts.js'
const formSubmit=document.getElementById('getFormInfo')

const inputMinPrice=document.getElementById('inputMinPrice')
const inputMaxPrice=document.getElementById('inputMaxPrice')
const rangeMinPrice=document.getElementById('rangeMinPrice')
const rangeMaxPrice=document.getElementById('rangeMaxPrice')

let currentBase = JSON.parse(JSON.stringify(ApartBase))
const arrAllPrice=[]

currentBase.map(el=>{
  el.aparts.map(el=>arrAllPrice.push(el.price))  
})

let minRange=Math.min.apply(null,arrAllPrice)
let maxRange=Math.max.apply(null,arrAllPrice)

// formSubmit.addEventListener('click',()=>{
//   console.log(
//   document.getElementById("priceForm-min").value,
//   document.getElementById("priceForm-max").value
//   )
// })
const activeMinMax=(minRange,maxRange)=>{
  inputMinPrice.min=minRange
  inputMinPrice.max=maxRange
  inputMinPrice.value=minRange
  
  inputMaxPrice.min=minRange
  inputMaxPrice.max=maxRange
  inputMaxPrice.value=maxRange
  
  rangeMinPrice.min=minRange
  rangeMinPrice.max=maxRange
  rangeMinPrice.value=minRange
  
  rangeMaxPrice.min=minRange
  rangeMaxPrice.max=maxRange
  rangeMaxPrice.value=maxRange
}



activeMinMax(minRange,maxRange)
// const rangeFormInput=document.getElementById('rangeFormInput')

// const average=maxRange/2
// rangeFormInput.min=minRange
// rangeFormInput.max=maxRange
// rangeFormInput.value=average

// const priceFormMin=document.getElementById('priceForm-min')
// const priceFormMax=document.getElementById('priceForm-max')
// priceFormMin.value=minRange
// priceFormMax.value=maxRange

export  function rangeMinMaxParam(arr){
  arrAllPrice.length=0
  arr.map(el=>{
    
    el.aparts.map(el=>arrAllPrice.push(el.price))
  })
  minRange=Math.min.apply(null,arrAllPrice)
  maxRange=Math.max.apply(null,arrAllPrice)
  activeMinMax(minRange,maxRange)
}

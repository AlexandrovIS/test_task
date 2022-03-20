export const activeArrowBtn=()=>{
  const deliveryDataList=document.querySelectorAll('.delivery_data__list')
  const arrowArr=[]

  deliveryDataList.forEach(el=> arrowArr.push(el.children[0]))

  arrowArr.forEach(el=>el.addEventListener('click',()=>{
    for (let i = 0; i < el.parentElement.children.length; i++) {
      el.parentElement.children[i].classList.toggle('data__item__active')
      
    }
  // console.log(   el.parentElement.children.length)
  }))
  
}
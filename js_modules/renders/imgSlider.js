import {SLIDE_TIME}  from '../const.js'

export const imgSlider=()=>{
  const photosAndTags=document.querySelectorAll('.photos_and_tags')

  photosAndTags.forEach(el=>{
    const photoArr=el.querySelectorAll('.photo_list')
    const photoList=el.querySelectorAll('.photo_item')
    const switchsList=el.querySelectorAll('.switchs li')
    
    selectPhoto(photoArr,switchsList[0].dataset.switch)
    selectSwitch(switchsList,0)

    switchsList.forEach(el=>{
      // el.classList.remove('active_switch')
      el.addEventListener('mouseover',()=>{
        removeClass(photoList)
        selectSwitch(switchsList,el.dataset.switch)
        selectPhoto(photoArr,el.dataset.switch)
        clearInterval(timeId)
      })
    })

    let timeId=autoSlider(photoArr,switchsList.length-1,photoList,switchsList)
    photoList.forEach(el=>el.addEventListener('mouseover',()=>{
      clearInterval(timeId)
    }))
    photoList.forEach(el=>el.addEventListener('mouseleave',()=>{
      timeId=autoSlider(photoArr,switchsList.length-1,photoList,switchsList)
    }))
  })
}

const selectPhoto=(arr,ind)=>{
  arr.forEach(el=>el.children[ind].classList.add('photo_item_active'))}

const removeClass=(arr)=>{
  arr.forEach(el=>el.classList.remove('photo_item_active'))}


const autoSlider=(arr,count,arrList,switchsList)=>{
  let ind=0

  let timeId=  setInterval(()=>{
    ind++
   
    if(ind>count) ind=0
    removeClass(arrList)
    selectSwitch(switchsList,ind)
    selectPhoto(arr,ind)
    
  },SLIDE_TIME)
  return timeId
}



const selectSwitch=(arr,ind)=>{
  arr.forEach(el=>el.classList.remove('active_switch'))
  arr[ind].classList.add('active_switch')
}
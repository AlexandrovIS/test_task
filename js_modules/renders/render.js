import {ARRAY_DELIVERY}  from '../const.js'
import {activeArrowBtn} from './arrow_btn.js'
import {imgSlider} from './imgSlider.js'

const $goodsHeader=document.querySelector('#projectCounter')
const $goodsList=document.querySelector('#app #object_list')

const renderGoodsItem=({img,title,district,notes,aparts})=>{
  return `
  <li>
  <div class="photos_and_tags">
    <ul class="photo_list">${img.map(el=>createImgLink(el)).join('\n')}</ul>
    <ul class="switchs">${img.map((el,ind)=>createSwitchs(ind)).join('\n')}</ul>
    <ul class="nameplates_list">
      ${notes.length>0?`<li class="notes">${notes}</li>`:``}
      <li class="live">Live</li>
      <li class="offers">${aparts.length} предложений</li>
    </ul>
  </div>  
  <div class="informations">
    <ul class="info_list">
      <li>
        <ul class="description_apart">
          <li class="description_apart__title">${title}</li>
          <li class="description_apart__district">${district}</li>
        </ul>
      </li>
      <li>
        <button class="choice_apart_btn">Квартиры</button>
      </li>
    </ul>
   
     <ul class="aparts_list"> 
     ${sortByDelivery(aparts).map(el=>`<ul class="delivery_data__list">${createDeliveryList(el)}</ul>`).join('\n')}
     </ul>
   
  </div>
  </li>
  `
}

const createImgLink=(src)=>`<li class="photo_item"><img src="${src}" alt="photos of apartments"/></li>`

const createSwitchs=(ind)=>`<li data-switch="${ind}"></li>`

const createDeliveryList=(el)=>
  el.map(e=>createApartList(e)).join('\n')


const createApartList=(el)=>{ 
  
  return `<li class="delivery_data__item"><span>${el.corpus}. ${el.delivery} </span> <span> ${el.price/1000000} млн. &#8381;<div class="arrow_btn"></div></span></li>`
}

const renderGoodsList=(list)=>{
  let goodsList = list.map(
    item => renderGoodsItem(item)
  ).join('\n')
  $goodsList.insertAdjacentHTML('beforeend', goodsList)
}

const sortByDelivery=(arr)=>{
let deliveryArr=[]
ARRAY_DELIVERY.forEach((el,ind)=>{
  let newArr=arr.filter((item)=>item.delivery==ARRAY_DELIVERY[ind])
  if(newArr.length>0) deliveryArr.push(newArr)
})
return deliveryArr
}
  
function sortArr(arr){
  arr.map(el=>{
    el.aparts.sort(function(a,b){
      if (a.price > b.price) return 1
      if (a.price < b.price) return -1
      return 0
    })
  }
  )
}

export function render(goodsArr){
  sortArr(goodsArr)
  $goodsHeader.innerHTML=goodsArr.length
  $goodsList.innerHTML=''
  renderGoodsList(goodsArr)
  activeArrowBtn()
  imgSlider()
}


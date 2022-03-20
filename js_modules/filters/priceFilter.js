import ApartmentComplex from '../ApartmentComplex.js'

export const priceFilter=(array,min,max)=>{
  const resultArr=[]
  array.map(currentApart=>{
    const result=new ApartmentComplex(currentApart.img,currentApart.title, currentApart.district,currentApart.notes)
    
    currentApart.aparts.map(apart=>{
     if(apart['price']>=min&&apart['price']<=max){
      result.addApart(apart)
     }
    })

    if(result.aparts.length>0){
      resultArr.push(result)
    }    

  })

  return resultArr
  
}


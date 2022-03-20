import ApartmentComplex from '../ApartmentComplex.js'

export const deliveryFilter=(array,param)=>{
  const resultArr=[]
 console.log(array)

  array.forEach(currentApart=>{
    const result=new ApartmentComplex(currentApart.img,currentApart.title, currentApart.district,currentApart.notes)
    
    let a=currentApart.aparts.forEach(apart=>{

     if(apart['delivery']===param[0]
     ||apart['delivery']==param[1]
     ||apart['delivery']==param[2]
     ||apart['delivery']==param[3]
     ){
      result.addApart(apart)
     }
    })
    if(result.aparts.length>0){
      resultArr.push(result)
    }    

  })

  return resultArr
  
}

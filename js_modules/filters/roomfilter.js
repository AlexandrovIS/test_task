import ApartmentComplex from '../ApartmentComplex.js'

export const roomFilter=(array,param)=>{
  const resultArr=[]
  array.forEach(currentApart=>{
    const result=new ApartmentComplex(currentApart.img,currentApart.title, currentApart.district,currentApart.notes)

    result['sort_param']=param

    currentApart.aparts.forEach(apart=>{
           if(apart['numOfRooms']==param[0]
            ||apart['numOfRooms']==param[1]
            ||apart['numOfRooms']==param[2]
            ||apart['numOfRooms']==param[3]){
            result.addApart(apart)
           }
          })
          if(result.aparts.length>0){
            resultArr.push(result)
            
          }  

  })
  return resultArr
}
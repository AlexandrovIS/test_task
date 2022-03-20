export default class ApartmentComplex{
  constructor([...img],title,district,notes,...aparts){
    this.img=[...img],
    this.title=title,
    this.district=district,
    this.notes=notes,
    this.aparts=[...aparts]
  }

  addApart(apart){
    this.aparts.push(apart)
  }
}
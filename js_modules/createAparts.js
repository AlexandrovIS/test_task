import Apart from './Apart.js'
import ApartmentComplex from './ApartmentComplex.js'

const ApartBase =[]

function createAparts(id,[...img],title, district,notes,...apart){
  id=new ApartmentComplex([...img],title,district,notes,...apart)
  ApartBase.push(id)
}



createAparts('vyborgsky',

[
  './cdn/img/vyborgsky/01.jpeg',
'./cdn/img/vyborgsky/02.jpeg',
'./cdn/img/vyborgsky/03.jpeg'
],

'ЖК Выборгский', 'м. Московская','Мебилировка зависит от сценария',
Apart('vyborgsky','1','1',37500,'корпус 1','03.2022'),
Apart('vyborgsky','2','1',37500,'корпус 1','03.2022'),
Apart('vyborgsky','3','студия',27500,'корпус 1','03.2022'),
Apart('vyborgsky','4','студия',27500,'корпус 1','03.2022'),
Apart('vyborgsky','5','1',37500,'корпус 1','03.2022'),

Apart('vyborgsky','6','студия',27500,'корпус 1','03.2022'),
Apart('vyborgsky','7','1',37500,'корпус 1','03.2022'),
Apart('vyborgsky','8','2',47500,'корпус 1','03.2022'),
Apart('vyborgsky','9','1',37500,'корпус 1','03.2022'),
Apart('vyborgsky','10','2',47500,'корпус 1','03.2022'),

Apart('vyborgsky','11','студия',27500,'корпус 1','03.2022'),
Apart('vyborgsky','12','студия',27500,'корпус 1','03.2022'),
Apart('vyborgsky','13','1',37500,'корпус 1','03.2022'),
Apart('vyborgsky','14','2',47500,'корпус 1','03.2022'),
Apart('vyborgsky','15','2',47500,'корпус 1','03.2022'),

Apart('vyborgsky','16','студия',27500,'корпус 1','03.2022'),
Apart('vyborgsky','17','1',37500,'корпус 1','03.2022'),
Apart('vyborgsky','18','студия',27500,'корпус 1','03.2022'),
Apart('vyborgsky','19','студия',27500,'корпус 1','03.2022'),
Apart('vyborgsky','20','студия',27500,'корпус 1','03.2022'),

Apart('vyborgsky','1','1',37500,'корпус 2','06.2022'),
Apart('vyborgsky','2','1',37500,'корпус 2','06.2022'),
Apart('vyborgsky','3','студия',27500,'корпус 2','06.2022'),
Apart('vyborgsky','4','студия',27500,'корпус 2','06.2022'),
Apart('vyborgsky','5','1',37500,'корпус 2','06.2022'),

Apart('vyborgsky','6','студия',27500,'корпус 2','06.2022'),
Apart('vyborgsky','7','1',37500,'корпус 2','06.2022'),
Apart('vyborgsky','8','2',47500,'корпус 2','06.2022'),
Apart('vyborgsky','9','1',37500,'корпус 2','06.2022'),
Apart('vyborgsky','10','2',47500,'корпус 2','06.2022'),

Apart('vyborgsky','11','студия',27500,'корпус 2','06.2022'),
Apart('vyborgsky','12','студия',27500,'корпус 2','06.2022'),
Apart('vyborgsky','13','1',37500,'корпус 2','06.2022'),
Apart('vyborgsky','14','2',47500,'корпус 2','06.2022'),
Apart('vyborgsky','15','2',47500,'корпус 2','06.2022'),

Apart('vyborgsky','16','студия',27500,'корпус 2','06.2022'),
Apart('vyborgsky','17','1',37500,'корпус 2','06.2022'),
Apart('vyborgsky','18','студия',27500,'корпус 2','06.2022'),
Apart('vyborgsky','19','студия',27500,'корпус 2','06.2022'),
Apart('vyborgsky','20','студия',27500,'корпус 2','06.2022'),
)

createAparts('partnera',
[
  './cdn/img/partnera/01.jpeg',
  './cdn/img/partnera/02.jpeg',
  './cdn/img/partnera/03.jpeg',
  './cdn/img/partnera/04.jpeg',
  './cdn/img/partnera/05.jpeg'
],

'ЖК Партнера','м. Фрунзенская','',
Apart('partnera','1','1',33500,'корпус 1','12.2022'),
Apart('partnera','2','1',33500,'корпус 1','12.2022'),
Apart('partnera','3','студия',23500,'корпус 1','12.2022'),
Apart('partnera','4','студия',23500,'корпус 1','12.2022'),
Apart('partnera','5','1',33500,'корпус 1','12.2022'),
Apart('partnera','6','1',33500,'корпус 1','12.2022'),
Apart('partnera','7','1',33500,'корпус 1','12.2022'),
Apart('partnera','8','студия',23500,'корпус 1','12.2022'),
Apart('partnera','9','студия',23500,'корпус 1','12.2022'),
Apart('partnera','10','1',33500,'корпус 1','12.2022'),
Apart('partnera','11','2',49500,'корпус 1','12.2022'),
Apart('partnera','12','студия',27500,'корпус 1','12.2022'),
Apart('partnera','13','студия',23500,'корпус 1','12.2022'),
Apart('partnera','14','студия',28500,'корпус 1','12.2022'),
Apart('partnera','15','2',43500,'корпус 1','12.2022'),
Apart('partnera','16','2',43500,'корпус 1','12.2022'),
Apart('partnera','17','1',33500,'корпус 1','12.2022'),
Apart('partnera','18','1',33500,'корпус 1','12.2022'),
Apart('partnera','19','1',33500,'корпус 1','12.2022'),
Apart('partnera','20','3',58500,'корпус 1','12.2022'),

Apart('partnera','1','1',33500,'корпус 2','09.2022'),
Apart('partnera','2','1',33500,'корпус 2','09.2022'),
Apart('partnera','3','студия',23500,'корпус 2','09.2022'),
Apart('partnera','4','студия',23500,'корпус 2','09.2022'),
Apart('partnera','5','1',33500,'корпус 2','09.2022'),
Apart('partnera','6','1',33500,'корпус 2','09.2022'),
Apart('partnera','7','3',61500,'корпус 2','09.2022'),
Apart('partnera','8','студия',23500,'корпус 2','09.2022'),
Apart('partnera','9','студия',23500,'корпус 2','09.2022'),
Apart('partnera','10','1',33500,'корпус 2','09.2022'),
Apart('partnera','11','2',49500,'корпус 2','09.2022'),
Apart('partnera','12','студия',27500,'корпус 2','09.2022'),
Apart('partnera','13','студия',23500,'корпус 2','09.2022'),
Apart('partnera','14','студия',28500,'корпус 2','09.2022'),
Apart('partnera','15','2',43500,'корпус 2','09.2022'),
Apart('partnera','16','2',43500,'корпус 2','09.2022'),
Apart('partnera','17','1',33500,'корпус 2','09.2022'),
Apart('partnera','18','1',33500,'корпус 2','09.2022'),
Apart('partnera','19','1',33500,'корпус 2','09.2022'),
Apart('partnera','20','3',53500,'корпус 2','09.2022'),

Apart('partnera','1','1',33500,'корпус 5','06.2022'),
Apart('partnera','2','1',33500,'корпус 5','06.2022'),
Apart('partnera','3','студия',23500,'корпус 5','06.2022'),
Apart('partnera','4','студия',23500,'корпус 5','06.2022'),
Apart('partnera','5','1',33500,'корпус 5','06.2022'),
Apart('partnera','6','1',33500,'корпус 5','06.2022'),
Apart('partnera','7','1',33500,'корпус 5','06.2022'),
Apart('partnera','8','студия',23500,'корпус 5','06.2022'),
Apart('partnera','9','студия',23500,'корпус 5','06.2022'),
Apart('partnera','10','1',33500,'корпус 5','06.2022'),
Apart('partnera','11','2',49500,'корпус 5','06.2022'),
Apart('partnera','12','студия',27500,'корпус 5','06.2022'),
Apart('partnera','13','студия',23500,'корпус 5','06.2022'),
Apart('partnera','14','студия',28500,'корпус 5','06.2022'),
Apart('partnera','15','2',43500,'корпус 5','06.2022'),
Apart('partnera','16','2',43500,'корпус 5','06.2022'),
Apart('partnera','17','1',33500,'корпус 5','06.2022'),
Apart('partnera','18','1',33500,'корпус 5','06.2022'),
Apart('partnera','19','1',33500,'корпус 5','06.2022'),
Apart('partnera','20','3',53500,'корпус 5','06.2022'),
)

export {ApartBase}


/*Crea un objeto Array con los días laborables de la semana 
(Lunes a Viernes) y utiliza un método del objeto para recorrer 
el array y convertir cada elemento de ese array a mayúsculas.
 sa console.table para ver el resultado.*/
let diasLaborables = new Array();
diasLaborables = ['Lunes','Martes','Miércoles','Jueves','Viernes'];
const diasMayusculas = diasLaborables.map((el)=>el.toUpperCase());
console.log(diasMayusculas);
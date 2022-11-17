/*Crea un array de al menos 10 elementos para guardar números enteros.
 Usa un método para obtener 
la suma de los números pares y la de los números impares.*/

let numeros=[1,2,3,4,5,6,7,8,9,10];

const sumaPares = numeros.filter((el)=>el%2==0).reduce((total,el)=>total+el);
console.log(sumaPares);
const sumaImpares = numeros.filter((el)=>el%2!=0).reduce((total,el)=>total+el);
console.log(sumaImpares);
/*Tenemos dos listas de asistentes a dos cursos: html y css. 
Queremos obtener una lsita de los asistentes a ambos cursos. 
La lista estará ordenada.*/
let html = ['Luis','Juan','Ana'];
let css = ['Luis','Juan', 'Ana','María'];
const repetidos =(a,b)=>a.filter(Set.prototype.has, new Set(b));
console.log(repetidos(html,css));
/*Crea un array bidimensional para almacenar nombre y calificación
 de un grupo de asistentes a un curso. Una vez creado rellenalo con
  al menos 4 elementos 
y luego ordénalos por orden crecientes de las calificaciones. */

let alumnos=[
    {
        nombre: "Angel",
        calif:10
    },
    {
        nombre: "Raquel",
        calif: 10
    },
    {
        nombre: "Alberto",
        calif:2
    },
    {
        nombre: "Paco",
        calif: 5
}
]

const ordenarAlumnos = alumnos.sort((a,b)=>b.calif-a.calif);

console.log(ordenarAlumnos);
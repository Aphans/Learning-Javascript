/*Añade un atributo mas a la lista*/

const lista=[
    {
        name:"Angel",
        apellido:"Jiménez"

    },
    {
        name:"Raquel",
        apellido:"Perez"
    }
]

/*Se añade la propiedad nota*/

const listado=lista.map((el)=>{return{...el,nota:0}});

/*Cambia la nota de los alumnos donde el nombre sea angel*/


const filtro = listado.filter((el)=>el.name==="Angel")
                .map((el)=>{
                    el.nota+=5;
                    return el;
                });


console.log(listado);
let MisCervezas=[
    {
        "nombre":"Erdinger",
        capacidad:500
    },
    {
        "nombre":"Delirium",
         capacidad:300
    },
    {
        "nombre":"Diosa blanca",
        capacidad:700
    },
    {
        "nombre":"Caguana",
        capacidad:1500
    },
    {
        "nombre":"Fuller",
        capacidad:500
    }
]

/*Cervezas de mas de 500 ml*/
let cervezasMas500 = MisCervezas.filter((el)=>el.capacidad>500);

/*Restar 100 ml a cada cerveza*/

let restar100ml = MisCervezas.map((el)=>{el.capacidad-=100;return el});


/*Sumar todos los ml de las cervezas*/

let sumaml = MisCervezas.reduce((total,sig)=>total+sig.capacidad,0);


/*Ordena las cervezas por capacidad*/

let ordenaCapacidad = MisCervezas.sort((a,b)=>b.capacidad-a.capacidad);

console.log(ordenaCapacidad);
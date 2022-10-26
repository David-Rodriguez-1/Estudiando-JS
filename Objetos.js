const misDatos = {
    nombre: "David",
    apellido: "Rodriguez",
    edad: 31,
    altura: 1.74,
    eresDesarrollador: "No por ahora",
}

const edadDeDavid = misDatos.edad;
console.log(edadDeDavid)

const listaDeMisDatos =[misDatos]
console.log(listaDeMisDatos)

const mejoresAmigos = [
    {
    nombre: "Adrian",
    apellido: "Beltrame",
    edad: 39,
    altura: 1.70,
    eresDesarrollador: "No"
    },
    {
    nombre: "Matias",
    apellido: "Cuellar",
    edad: 38,
    altura: 1.80,
    eresDesarrollador: "No"
    }
]

const ordenado = mejoresAmigos.sort((a, b) => a.edad - b.edad)
console.log(ordenado)
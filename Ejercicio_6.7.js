const compra = ["Leche", "Galletas", "Azucar", "Harina", "Carne"]

compra.push("Aceite de Girasol")
console.log(compra)

compra.pop()
console.log(compra)

const peliFav = [
    { titulo: "Toy Story", director: "John Lasseter", fecha: VarDate = new Date ("1996 march 19") }, //para agregar date de fecha y hora en una objeto. VarDate = new Date();
    { titulo: "El rey leon", director: "Rob Minkoff, Roger Allers", fecha: VarDate = new Date ("1994 july 7") },
    { titulo: "Advenger", director: "Anthony y Joe Russo", fecha: VarDate = new Date ("2019 july 4") },
];

const peliMayor = peliFav.filter(vari => vari.fecha > new Date(2010, 0, 1));
console.log(peliMayor)

const directores = peliFav.map(obj => obj.director)
console.log(directores)

const titulos = peliFav.map((obj) => obj.titulo);
console.log(titulos)

const concatPelis = directores.concat(titulos)
console.log(concatPelis)

const concatProp = [...directores, ...titulos]
console.log(concatProp)
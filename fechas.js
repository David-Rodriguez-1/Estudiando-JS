const fechaDeHoy = new Date()
console.log(fechaDeHoy)

const nacimiento = new Date(1991, 6, 2)
console.log(nacimiento.toLocaleDateString("en-US"))

const diferente = fechaDeHoy.getTime() === nacimiento.getTime()
console.log(diferente)

const diaDeNacido = nacimiento.getDay()
console.log(diaDeNacido)

const mesDeNacido = nacimiento.getMonth()
console.log(mesDeNacido + 1)

const añoDeNacido = nacimiento.getFullYear()
console.log(añoDeNacido)
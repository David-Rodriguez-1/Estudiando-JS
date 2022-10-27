function sinParametro() {
    return true
}

setTimeout(function () {
    console.log("Hola soy una promesa")
}, 5000)


function* generadora() {
    let indice = 0;
    while (true) {
        indice += 2;
        if (indice === 10) {
            return indice;
        }
        yield indice;
    }
}

const sumando = generadora()

console.log(sumando.next());
console.log(sumando.next())
console.log(sumando.next())
console.log(sumando.next())
console.log(sumando.next())
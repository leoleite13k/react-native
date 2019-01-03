 //Rest

 function adicionar (...numeros){
    console.log(numeros);
} 

adicionar(1,2,3,4,5,6)

//Rest + Spread

function adicionar(nomes,...novosNomes) {
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ];

    return novoConjunto;
}

let nomes = ["Leonardo", "Daniele"];
let outros = adicionar(nomes, "Maria", "Marcos", "Paulo");

console.log(outros);
let info = {
let info = {
    nome:"Leonardo",
    sobrenome:"Leite",
    idade:24
}

let newInfo ={
    ...info,
    cidade:"Rio Claro",
    estado:"São Paulo",
    pais:"Brasil"
}

usando em funcoes

function adicionarItem(info) {
    let novaInfo ={
        ...info,
        status:0,
        token:"1564564",
        sexo:"Masc"
    }

    console.log(novaInfo);
}

adicionarItem({nome:"Leonardo", sobrenome:"Leite"});
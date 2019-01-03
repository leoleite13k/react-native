const url = 'https://alunos.b7web.com.br/api/ping';
const params ={
    method:'POST',
    body:JSON.stringify({
        nome:'Leonardo',
        idade: 24
    })
};

fetch(url, params)
    .then((r) = > r.jason())
    .then(json) => {
        console.log(json);
    }
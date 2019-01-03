function fazer() {
    let promise = new Promise((resolve, reject) => {

        setTimeout(() =>{

            resolve('OK');

        });
    });

    return promise;
}

fazer()
    .then((resposta) =>{
        console.log("Resposta" + resposta);
    })
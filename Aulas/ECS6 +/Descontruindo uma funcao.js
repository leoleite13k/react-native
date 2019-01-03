function addEndereco(endereco) {
    const {cidade, estado} = endereco;
    const newEndereco = {cidade, estado, pais:"Brasil"};
    console.log(`${newEndereco.cidade}, ${newEndereco.estado}, ${newEndereco.pais}`);
}

addEndereco({cidade:'Campina Grande', estado:'Paraiba'});
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function checarStatus(listaDeURLs){
    const listaDeStatus = await Promise
        .all(listaDeURLs
            .map(async statusURL => {
                const res = await fetch(statusURL);
                return `${res.status} - ${res.statusText}`;;
    }))
    return listaDeStatus;
}

function gerarListaDeURLs(listaDeLinks){
    //  Transforma o array de arrays com chave e valor em apenas um array de valores
    return listaDeLinks
        .map(objetoLink => Object
                .values(objetoLink).join());
}

async function validarLinks(listaDeLinks){
    const listaDeURLs = gerarListaDeURLs(listaDeLinks);
    const listaDeStatus = await checarStatus(listaDeURLs);    
    //spread operator
    const listaDeResultados = listaDeLinks.map((objeto, indice) => ({...objeto, status: listaDeStatus[indice]})); //    Adiciona o novo conjunto de chave e valor (status e seu valor) 

    return listaDeResultados;
}

module.exports = validarLinks;
const chalk = require('chalk');
const fs = require('fs');

function tratarErro(erro){
  throw new Error(chalk.red(erro));
}

function extrairTexto(texto){
  const regex = /\[([^\[]*)\]\((http[^\)]*)\)/gm;
  const linksExtraidos = [];
  let temp;

  while((temp = regex.exec(texto)) !== null){
    linksExtraidos.push({ [temp[1]] : temp[2]})
  }

  return linksExtraidos.length == 0 ? 'não há links' : linksExtraidos;
}

async function pegarArquivo(caminho){
  console.log(caminho);
  const encoding = 'utf-8';

  try{
    const texto = await fs.promises.readFile(caminho, encoding);  
    return extrairTexto(texto);  
  } catch(erro){
    tratarErro(erro);
  }
}

module.exports = pegarArquivo;
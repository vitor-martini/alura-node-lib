#!/usr/bin/env node
const chalk = require('chalk');
const pegarArquivo = require('./index.js');
const validarLinks = require('./validacao-links.js')

const caminho = process.argv

async function processarTexto(caminho){    
    const textoProcessado = await pegarArquivo(caminho[2]);

    if(caminho[3] == '--v')
        console.log(chalk.yellow('links validados:\n'), await validarLinks(textoProcessado));
    else         
        console.log(chalk.yellow('links encontrados:\n'), textoProcessado);
}

if (caminho[2] == null) 
    console.log('Execute no formato "node .\cli.js <caminho>"');
else
    processarTexto(caminho);
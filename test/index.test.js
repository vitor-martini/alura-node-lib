const pegarArquivo = require('../index.js');

const resultadoArray = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegarArquivo:', () => {
    it('deve ser uma função', () => {
        expect(typeof pegarArquivo).toBe('function');
    })
    it('deve retornar um array com resultados', async () =>{
        const resultado = await pegarArquivo('D:\\Projetos\\alura-node-primeira-biblioteca\\test\\arquivos\\texto1.md');
        expect(resultado).toEqual(resultadoArray);
    })
    it('deve retornar "não há links"', async () => {
        const resultado = await pegarArquivo('D:\\Projetos\\alura-node-primeira-biblioteca\\test\\arquivos\\texto1-sem-links.md');
        expect(resultado).toBe('não há links');
    })
    it('deve lançar um erro caso não encontre arquivo', async () => {
        await expect(pegarArquivo('teste/caminho/invalido')).rejects.toThrow();
    })
})

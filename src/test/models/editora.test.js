import Editora from '../../models/editora.js';
import { jest } from '@jest/globals';

describe('Testando o modelo Editora',( ) => {
    const objetoEditora = { nome: 'Campinas Write', cidade: 'Campinas', email: 'cd@cdc' };

    it('Deve instanciar uma nova Editora', () => {
        const editora = new Editora(objetoEditora);
        expect(editora).toEqual(expect.objectContaining(objetoEditora));
    });

    it.skip('Deve salvar editora no BD', () => {
        const editora = new Editora(objetoEditora);
        editora.salvar().then((dados) => {
            expect(dados.nome).toBe('Campinas Write');
        });
    });

    it.skip('Deve salvar no BD usando a sintaxe moderna', async () => {
        const editora = new Editora(objetoEditora);
        const dados = await editora.salvar();
        const retornado = await Editora.pegarPeloId(dados.id);

        expect(retornado).toEqual(expect.objectContaining({
            id: expect.any(Number),
            ...objetoEditora,
            created_at: expect.any(String),
            updated_at: expect.any(String),
        }));
    });

    it('Deve fazer uma chamada simulada no BD', () => {
        const editora = new Editora(objetoEditora);

        editora.salvar = jest.fn().mockReturnValue({
            id: 10,
            nome: 'Campinas Write',
            cidade: 'Campinas',
            email: 'cd@cdc',
            created_at: '2025-02-11',
            updated_at: '2025-02-12',
        });

        const retorno = editora.salvar();

        expect(retorno).toEqual(expect.objectContaining({
            id: expect.any(Number),
            ...objetoEditora,
            created_at: expect.any(String),
            updated_at: expect.any(String),
        }));
    });
})
import Item from '../item.js';

describe('Testes dos itens', () => {
  it('Deve ter 3 campos: nome, valor e quantidade', () => {
    const item = new Item('Beterraba', 2.5, 10);

    expect(item.nome).toBe('Beterraba');
    expect(item.valor).toBe(2.5);
    expect(item.quantidade).toBe(10);
  });

  it('Deve calcular preço pela quantidade', () => {
    const item = new Item('Batata', 0.3, 10);

    expect(item.pegaValorTotalItem()).toBe(3);
  });
});

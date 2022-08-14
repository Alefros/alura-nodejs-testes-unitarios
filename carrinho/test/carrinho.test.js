import Carrinho from '../carrinho.js';
import Item from '../item.js';

describe('Testes do carrinho', () => {
  it('Deve inicializar vazio', () => {
    const carrinho = new Carrinho();
    expect(carrinho.subtotal).toBeNull();
  });

  it('Deve ter itens', () => {
    const banana = new Item('Banana', 0.3, 10);
    const abacate = new Item('Abacate', 0.3, 10);

    const carrinho = new Carrinho();
    carrinho.adiciona(banana);
    carrinho.adiciona(abacate);

    expect(typeof carrinho).toBe('object');
    expect(carrinho.itens).toContain(banana);
    expect(carrinho.itens).toContain(abacate);
  });

  it('Deve ter propriedade "total" na inicialização', () => {
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty('total');
  });
});

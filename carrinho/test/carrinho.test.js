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

  it('Deve lançar uma exceção ao finalizar a compra com carrinho vazio', () => {
    function englobaErroCarrinho() {
      const carrinho = new Carrinho();
      carrinho.finalizaCompra();
    }
    expect(englobaErroCarrinho).toThrowError('Carrinho de compras vazio');
  });

  it('Deve adicionar o frete', () => {
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(10);
    expect(carrinho.frete).toBe(10);
  });

  it('Deve finalizar compras', () => {
    const banana = new Item('Banana', 2, 5);
    const mel = new Item('Mel', 1, 5);

    const carrinho = new Carrinho();
    carrinho.adiciona(banana);
    carrinho.adiciona(mel);
    carrinho.adicionaFrete(10);

    expect(carrinho.finalizaCompra()).toStrictEqual({
      subtotal: 15,
      frete: 10,
      total: 25,
    });
  });
});

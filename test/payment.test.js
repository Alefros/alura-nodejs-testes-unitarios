/* eslint-disable no-undef */
import { somaHorasExtras, calculaDescontos } from "../index.js";

describe('Testes dos cálculos de folha', () => {
  it('Deve retornar a soma das horas extras', () => {
    const expected = 2500;
    const returned = somaHorasExtras(2000, 500);

    expect(returned).toBe(expected);
  });

  it('Deve descontar o valor do salário', () => {
    const expected = 2300;
    const returned = calculaDescontos(2500, 200);

    expect(returned).toBe(expected);
  });
});

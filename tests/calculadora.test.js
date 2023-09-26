const calculadora = require('../calculadora');

test('Suma 1 y 2 deber ser igual a 3', () => {
  expect(calculadora.sumar(1, 2)).toBe(3);
});

test('Restar 5 menos 4 debe ser igual a 1', () => {
    expect(calculadora.restar(5, 4)).toBe(1);
  });

test('Multiplicar 5 por 4 debe ser igual a 20', () => {
    expect(calculadora.multiplicar(5, 4)).toBe(20);
  });


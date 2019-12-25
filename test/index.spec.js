// importamos la funcion que vamos a testear
import { signUp } from "../src/lib/index";

describe('signUp', () => {
  it('debería ser una función', () => {
    expect(typeof signUp).toBe('function');
  });
});

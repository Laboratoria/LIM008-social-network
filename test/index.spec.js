// importamos la funcion que vamos a testear
import { authenticateFacebook,authenticateGoogle } from "../src/lib/auth/authenticateFaceGoogle";

describe('authenticateFacebook', () => {

  it('debería permitirme autenticarme con mi cuenta de Facebook', () => {
    expect(typeof myFunction).toBe('function');
  });
});

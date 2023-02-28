import {findRicardo} from "../src/exercicio2"
import {users} from "../src/exercicio2"

describe("teste para localizar o nome AstroDev", ()=>{
test("executando a função",()=>{
  const result = findRicardo(users)
  console.log(`result`, result);
  
  expect(result).toBe("astrodev")
})
})
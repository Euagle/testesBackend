import {dataFormatada} from "../src/exercicio3"


describe("Verificar a formatação da data", ()=>{
  test("deve retornar a data correta",()=>{
    const result = dataFormatada("2026/09/22")
    expect(result).toBeTruthy()
  })
})
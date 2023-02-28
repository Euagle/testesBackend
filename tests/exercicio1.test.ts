import {returnNumber} from "../src/exercicio1"

describe("Exercícios Tarde", ()=>{
  test("Type of NUMBER", ()=>{
    const result = returnNumber("40" as string)
    expect(typeof result).toBe('number')

  })
})
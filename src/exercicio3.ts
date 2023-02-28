export function dataFormatada(data: string):boolean {
    const dataFormatada = data.split("/").reverse().join("/");
    const ano = dataFormatada.toString()
    const anosplit = ano.split("/")
    console.log(`ano split`, anosplit);
    
    return anosplit[2] !== "2026" ? false : true;
  
  }
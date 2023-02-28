

export interface IUsers {
    name:string;
    nasc:string
  }
  
  
  export let users: IUsers[] = [
    {
      name: "Gleice",
      nasc: "2001",
    },
    {
      name: "Pedro",
      nasc: "1998",
    },
    {
      name: "Rafaela",
      nasc: "2000",
    },
    {
      name: "Ricardo",
      nasc: "1997",
    }
  ]
  
  export function findRicardo(users:IUsers[]) {
  let values:string[] = []
  Object.values(users).forEach(val => values.push(val.name))
  const find = values.find(usuario => usuario === "Ricardo") 
  return find
  }
import { prismaClient } from "../prisma";

class SearchService {
  async execute(cpf:string) {
    try {
      const cliente = await prismaClient.clientes.findMany({ 
        where: { 
          cpf: cpf
        }
      })
      
      if(cliente.length === 0){
        return null;
      }
      return cliente;
      
    } catch (error) {
      return null;
    }
  }
}

export { SearchService };


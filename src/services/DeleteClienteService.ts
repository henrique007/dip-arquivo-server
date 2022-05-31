import { prismaClient } from "../prisma";

class DeleteClienteService {
  async execute(id:string) {
    try {
      const deleteCliente = await prismaClient.clientes.delete({ 
        where: { 
          id: id
        }
      })
  
      return deleteCliente;
      
    } catch (error) {
      return null;
    }
  }
}

export { DeleteClienteService };

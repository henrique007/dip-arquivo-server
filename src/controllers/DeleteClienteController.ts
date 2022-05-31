import { Request, Response } from "express";
import { DeleteClienteService } from "../services/DeleteClienteService";

class DeleteClienteController {
  async handle(request: Request, response:Response){
    const {id} = request.params;
    const service = new DeleteClienteService();
    const result = await service.execute(id);

    if(!result){
      return response.status(404).json({message: "Cliente não consta na base de dados"});
    }
    return response.status(200).json({message: `O cliente ${result.nome} foi excluído.`});
  }
}

export { DeleteClienteController };


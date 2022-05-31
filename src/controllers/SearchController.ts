import { Request, Response } from "express";
import { SearchService } from "../services/SearchService";

class SearchController {
  async handle(request: Request, response:Response){
    const {cpf} = request.body;
    const service = new SearchService();
    const result = await service.execute(cpf);

    if(!result){
      return response.status(404).json({message: "CPF incorreto ou cliente não consta na base de dados"})
    }

    return response.json(result);
  }
}

export { SearchController };

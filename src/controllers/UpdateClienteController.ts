import { Request, Response } from "express";
import { UpdateClienteService } from "../services/UpdateClienteService";

class UpdateClienteController {
  async handle(request: Request, response:Response){
    const {id} = request.params;
    const {user_id} = request;
    const {admissao,
      agencia,
      bairro,
      banco,
      cargo,
      categoria,
      celular,
      cep,
      cidade,
      comp_end,
      conta,
      cpf,
      data_aposentadoria,
      duplicada,
      email,
      endereco,
      est_civil,
      funcao,
      links,
      mae,
      nascimento,
      nome,
      num_end,
      numero_pasta,
      obs,
      org_rg,
      pai,
      pasep,
      pis,
      prontuario,
      recisao,
      rg,
      sexo,
      telefone,
      uf,
      uf_rg,} = request.body;

    const service = new UpdateClienteService();
    const result = await service.execute(
      admissao,
      agencia,
      bairro,
      banco,
      cargo,
      categoria,
      celular,
      cep,
      cidade,
      comp_end,
      conta,
      cpf,
      data_aposentadoria,
      duplicada,
      email,
      endereco,
      est_civil,
      funcao,
      links,
      mae,
      nascimento,
      nome,
      num_end,
      numero_pasta,
      obs,
      org_rg,
      pai,
      pasep,
      pis,
      prontuario,
      recisao,
      rg,
      sexo,
      telefone,
      uf,
      uf_rg,
      user_id,
      id,
       );


       if(!result){
        return response.status(404).json({message: "Cliente não consta na base de dados"})
      }


       return response.status(200).json({message: `O cliente ${result.nome} foi atualizado.`});
  }
}

export { UpdateClienteController };

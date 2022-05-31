import {Request, Response} from "express";
import {CreateClienteService} from "../services/CreateClienteService";

export class CreateClienteController {
  async handle(request:Request, response:Response) {
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
    
    const {user_id} = request;

    const service = new CreateClienteService();

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
      user_id
    );

    return response.json(result);
  }
}

import { prismaClient } from "../prisma";

class UpdateClienteService {
  async execute(admissao:string,
    agencia:string,
    bairro:string,
    banco:string,
    cargo:string,
    categoria:string,
    celular:string,
    cep:string,
    cidade:string,
    comp_end:string,
    conta:string,
    cpf:string,
    data_aposentadoria:string,
    duplicada:string,
    email:string,
    endereco:string,
    est_civil:string,
    funcao:string,
    links:string,
    mae:string,
    nascimento:string,
    nome:string,
    num_end:string,
    numero_pasta:string,
    obs:string,
    org_rg:string,
    pai:string,
    pasep:string,
    pis:string,
    prontuario:string,
    recisao:string,
    rg:string,
    sexo:string,
    telefone:string,
    uf:string,
    uf_rg:string,
    user_id:string,
    id:string
    ) {
      try {
        const cliente = await prismaClient.clientes.update({
          where: {
            id: id,
          },
          data: {
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
          },
          include: {
            user: true,
          },
        })
  
        return cliente;
        
      } catch (error) {
        return null;
      }
    }
}

export { UpdateClienteService };

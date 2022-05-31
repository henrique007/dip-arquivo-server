import { prismaClient } from "../prisma";

class ProfilerUserService {
  async execute(user_id:string) {
    const user = await prismaClient.users.findFirst({ 
      where: { 
        id: user_id
      }
    })

    return user;
  }
}

export {ProfilerUserService};
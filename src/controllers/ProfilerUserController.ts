import { Request, Response } from "express";
import {ProfilerUserService} from "../services/ProfileUserService"

class ProfilerUserController {
  async handle(request: Request, response:Response){
    const {user_id} = request;
    const service = new ProfilerUserService();
    const result = await service.execute(user_id);

    return response.json(result);
  }
}

export {ProfilerUserController};
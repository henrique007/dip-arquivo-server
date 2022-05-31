import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateClienteController } from "./controllers/CreateClienteController";
import { DeleteClienteController } from "./controllers/DeleteClienteController";
import { ProfilerUserController } from "./controllers/ProfilerUserController";
import { SearchController } from "./controllers/SearchController";
import { UpdateClienteController } from "./controllers/UpdateClienteController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

export const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle)

router.post("/cliente",ensureAuthenticated, new CreateClienteController().handle)

router.put("/update/:id",ensureAuthenticated, new UpdateClienteController().handle)

router.post("/search", new SearchController().handle)

router.get("/profile",ensureAuthenticated, new ProfilerUserController().handle);

router.delete("/delete/:id",ensureAuthenticated, new DeleteClienteController().handle)
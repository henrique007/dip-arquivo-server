import cors from "cors";
import "dotenv/config";
import express, { json } from 'express';

import { router } from "./routes";

const app = express();
app.use(cors())

app.use(json());

app.use(router);


app.get("/github", (request, response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.
    GITHUB_CLIENT_ID}`)
})

app.get("/signin/callback", (request, response) => {
  const { code } = request.query;

  return response.json(code)
})

app.listen(process.env.PORT || 4000, () => console.log('Server is running on port 4000'));



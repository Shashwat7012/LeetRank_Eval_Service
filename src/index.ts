
import express, { Express } from "express";

import serverConfig from "./config/serverConfig";




const app: Express = express();

app.listen(serverConfig.PORT, () => {
  console.log(`server started at port  number *:${serverConfig.PORT}`);
  console.log("wow");
});

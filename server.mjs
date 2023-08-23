import express from "express";
import path from "path";
import { __dirname } from "./util/dirname.mjs";
import { web2 } from "./serWeb.mjs";
import {PORT} from './util/port.mjs'

const app = express();

//-------------------------------------------------------------
app.use(express.static(path.join(__dirname + "/style")));
//-------------

app.get("/", (req, res) => {
  res.send(web2("pepetrueno"));
});
app.listen(PORT, () => console.log(`Server en puerto ${PORT}`));

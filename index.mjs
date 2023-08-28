import express from "express";
const app = express();
import cors from "cors";
import path from "path";
import * as url from "url";
import { PORT } from "./util/util.mjs";
import { fechaActual, fechaUnix } from "./app/fechaActual.mjs";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
app.use(express.static(path.join(__dirname + "/style")));
app.use(express.static(path.join(__dirname + "/app")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "views/index.html"));
});

app.get("/api", (req, res) => {
  res.json(fechaActual());
});

app.get("/api/:date", (req, res) => {
  const { date } = req.params;

  if (isNaN(Date.parse(date))) {
    //ES UNIX
    if (isNaN(parseInt(date))) {
      res.json({
        error: "Invalid Date",
      });
    } else {
      let number = Number.parseInt(date);
      res.json({
        unix: number,
        utc: new Date(number).toUTCString(),
      });
    }
  } else {
  
    res.json(fechaUnix(new Date(date)));

    
  }
});

app.listen(PORT, () => console.log(`Server en puerto ${PORT}`));

// function changeToGMT(fecha) {
//   let dates = new Date(fecha);
//   let GMTtime =
//     dates.getUTCMonth() +
//     1 +
//     "/" +
//     dates.getUTCDate() +
//     "/" +
//     dates.getUTCFullYear() +
//     " " +
//     dates.getUTCHours() +
//     ":" +
//     dates.getUTCMinutes() +
//     ":" +
//     dates.getUTCSeconds() +
//     " GMT";
//   return GMTtime;
// }


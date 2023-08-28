import express from "express";
const app = express();
import cors from "cors";

import path from "path";
import * as url from "url";
// import { __dirname } from "./util/dirname.mjs";
import { PORT, isErrorData } from "./util/util.mjs";
//import { isDate } from "./util/types";
import { fechaActual, fechaUnix } from "./app/fechaActual.mjs";

//const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
app.use(express.static(path.join(__dirname + "/style")));
app.use(express.static(path.join(__dirname + "/app")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "views/index.html"));
});

app.get("/api", (req, res) => {
  const data = Date.now();
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
    //ES FECHA
    // console.log("MODO FECHA:");
    //console.log("what fuck");
    //console.log(new Date(date));
    //console.log(changeToGMT(date));
    //console.log(fechaActual(changeToGMT(new Date(date))));
    //res.json(fechaActual(changeToGMT(new Date(date))));
    //console.log(fechaUnix(date));
    //console.log(fechaUnix(new Date(date)));
    res.json(fechaUnix(new Date(date)));

    // if(){

    // }else{

    // }
    // res.json(fechaUnix(date));
    // console.log("------------1");
    // console.log(new Date(date));
    // console.log("------------2");
    // console.log(new Date(date).toUTCString());
    // console.log("------------3");
    // console.log(new Date(date).getUTCDate());
    // console.log("------------4");
    // console.log(Date.parse(date));

    // Number.parseInt(changeToUTC(date));

    // let fecha = changeToGMT(date);

    // res.send({
    //   unix: (new Date(fecha) / 1000) | 0,
    //   utc: new Date(fecha).toUTCString(),
    // });
  }
});
// app.get("/api", (req, res) => {
//   const data = Date.now();
//   res.send({ data });
// });

// app.get("/api/:date", (req, res) => {
//   const { date } = req.params;
//   if (isErrorData(date)) {
//     res.send({ error: "Invalid Date" });
//   } else {
//     const data = Date.now();

//     res.send({ unix: data, utc: date });
//   }
// });
app.listen(PORT, () => console.log(`Server en puerto ${PORT}`));

function changeToGMT(fecha) {
  let dates = new Date(fecha);
  let GMTtime =
    dates.getUTCMonth() +
    1 +
    "/" +
    dates.getUTCDate() +
    "/" +
    dates.getUTCFullYear() +
    " " +
    dates.getUTCHours() +
    ":" +
    dates.getUTCMinutes() +
    ":" +
    dates.getUTCSeconds() +
    " GMT";
  return GMTtime;
}
// function changeToUTC(date) {
//   return new Date(date);
// }

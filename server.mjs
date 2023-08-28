import express from "express";
import path from "path";
import * as url from "url";
// import { __dirname } from "./util/dirname.mjs";
import { PORT, isErrorData } from "./util/util.mjs";
//import { isDate } from "./util/types";
import { fechaActual } from "./app/fechaActual.mjs";

const app = express();
//const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

app.use(express.static(path.join(__dirname + "/style")));
app.use(express.static(path.join(__dirname + "/app")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "views/index.html"));
});

app.get("/api", (req, res) => {
  const data = Date.now();
  res.send(fechaActual());
});

app.get("/api/:date", (req, res) => {
  const { date } = req.params;

  if (isNaN(Date.parse(date))) {
    //ES UNIX
    let number = Number.parseInt(date);
    res.send({
      unix: number,
      utc: new Date(number).toUTCString(),
    });
  } else {
    //ES FECHA
    console.log("2015-12-02");
    res.send("fecha formato 26/11/1981");
    //console.log(new Date(date).toUTCString());

    // let fecha = changeToGMT(date);
    // Number.parseInt(changeToUTC(date));

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

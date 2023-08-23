import express from "express";
import path from "path";
import { __dirname } from "./util/dirname.mjs";
import { web2 } from "./serWeb.mjs";
import { PORT, isErrorData } from "./util/util.mjs";

const app = express();

//-------------------------------------------------------------
app.use(express.static(path.join(__dirname + "/style")));
//-------------

app.get("/", (req, res) => {
  res.send(web2("pepetrueno"));
});
app.get("/api", (req, res) => {
  const data = Date.now();
  res.send({ data });
});

app.get("/api/:date", (req, res) => {
  const { date } = req.params;
  if (isErrorData(date)) {
    res.send({ error: "Invalid Date" });
  } else {
    const data = Date.now();

    res.send({ unix: data, utc: date });
  }

  //console.log(new Date(26-11-1981).toString())
  //console.log(Date.now());
  //console.log(Date.UTC());
  const unixTimeZero = Date.parse("01 Jan 1970 00:00:00 GMT");
  const javaScriptRelease = Date.parse("04 Dec 1995 00:12:00 GMT");
  const x = Date.parse("04 Dec 1995 00:12:00 GMT");
  //console.log(unixTimeZero);
  //console.log(javaScriptRelease);
  //console.log(x);
  //console.log("--------<<-<--");

  //console.log(isErrorData("04 Dec 1995 00:12:00 GMT"));

  //console.log(new Date("Thu, 01 Jan 1970 00:00:00 GMT").toString());
  //console.log(new Date(8.64e15).toString());
});
app.listen(PORT, () => console.log(`Server en puerto ${PORT}`));

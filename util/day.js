const dayjs = require("dayjs");

const data = Date.now();


// console.log(dayjs("2015-12-02").$d);
// console.log(dayjs("hleoo").$d);
// console.log(dayjs("1451001600000").$y);
// const validarDate = (dateIn) => dayjs(dateIn);
const isUNIX = (dateIn) => isNaN(Date.parse(dateIn));

const validarFecha = (fecha) => {
  if (fecha === "") return objectResponse["1"];
  //let dates = new Date(fecha);
  //console.log(dates);
  //console.log(dates.toUTCString())
  console.log(Date.parse(fecha));
  //console.log(parseInt(fecha))
  //   if (typeof fecha === "number") {
  //     return "Es un número";
  //   }
};

//validarFecha("1981/11/26");
console.log(Date.parse("1981/11/26"));
console.log(Date.parse(1981 / 11 / 26));
console.log(Date.parse("ajkajsk"));
console.log(Date.parse("1950"));
//validarFecha("1451001600000");
//validarFecha(1451001600000);
//validarFecha('sdsdsds')



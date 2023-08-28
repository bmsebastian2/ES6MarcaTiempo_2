console.log("anexado");
let data = "";
let button = document.getElementById("fetch");
let sistema = document.getElementById("sistema");
let sistemaAll = document.querySelectorAll("#sistema");
let info = document.getElementById("info");

async function buscardatos(elemento) {
  try {
    let data = await fetch("/sistema");
    let resp = await data.json();
    plusInfoList(sistemaAll, Object.values(resp));
  } catch (error) {
    elemento.innerText = "🚧Error, vuelva a intentar";
  }
}

function plusInfoList(nodeList, arr) {
  let x = 0;
  Array.prototype.forEach.call(nodeList, function (item) {
    plusMensaje(item, arr[x]);
    x++;
  });
}

function plusMensaje(element, message) {
  element.innerText += ` --${message}`.toUpperCase();
}

buscardatos(sistema);

let data = "";
let button1 = document.getElementById("fetch1");
let button2 = document.getElementById("fetch2");
let sistema = document.getElementById("sistema");
let sistemaAll = document.querySelectorAll("#sistema");
let info = document.getElementById("info");

button1.addEventListener("click", () => {
  // info.innerHTML += ` <p>📅 - Track: </p><strong id="sistema"> </strong>`
  window.location.href = "/api/2015-12-25";
});
button2.addEventListener("click", () => {
  // info.innerHTML += ` <p>📅 - Track: </p><strong id="sistema"> </strong>`
  window.location.href = "/api/1451001600000";
});

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

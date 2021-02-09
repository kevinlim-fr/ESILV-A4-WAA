var bobn;
var defaultColor = "#FFFFFF";

window.addEventListener("load", startup, false);
colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
  });
}

function startup() {
    bobn = document.querySelector("#bobn");
    bobn.value = defaultColor;
    bobn.addEventListener("input", updateFirst, false);
    bobn.addEventListener("change", updateAll, false);
    bobn.select();
}
function updateFirst(event) {
  var p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
function updateAll(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
  });
}
let btnMore = document.getElementById("btn");
let spanText = document.getElementById("more");
let btnClose = document.getElementById("btn-close");

btnMore.onclick = function () {
  spanText.style.display = "block";
};

btnClose.onclick = function () {
  spanText.style.display = "none";
};
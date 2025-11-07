// TODO
const AMettreEnRouge = document.querySelector("#a-mettre-en-rouge");
AMettreEnRouge.style.color = "red";

const Leclick = document.querySelector("button");
Leclick.addEventListener("click",(evt)=>{Leclick.style.color = "red"});

const collH2 = document.querySelectorAll("H2");
collH2.forEach((elm)=>{elm.addEventListener("click", (evt)=>{evt.target.style.color = "red";})})
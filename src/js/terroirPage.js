import { setupHeaderInteractions } from "../components/header/header.js";
import { terroirsJson } from "../data.js";

function exibirDadosTerroir() {
  const urlParams = new URLSearchParams(window.location.search);
  const terroirId = parseInt(urlParams.get("id"));
  console.log(terroirId)
  const terroirSelecionado = terroirsJson.find((terroir) => terroir.id == terroirId);

  console.log(terroirSelecionado)
  if (terroirSelecionado) {
    document.getElementById("titleLocation").textContent = `Terroirs do Brasil · ${terroirSelecionado.location}`;
    document.getElementById("terroirName").textContent = `${terroirSelecionado.name}`;
    document.getElementById("mainheadlineTerroir").textContent = terroirSelecionado.main_headline;
    document.getElementById("terroirImage").src = `./public/terroirs/${terroirSelecionado.cardImage}`
    document.getElementById("location").src = terroirSelecionado.location
    document.getElementById("state").textContent = terroirSelecionado.state
  }
}

setupHeaderInteractions();
exibirDadosTerroir();
document.addEventListener("DOMContentLoaded", exibirDadosTerroir);
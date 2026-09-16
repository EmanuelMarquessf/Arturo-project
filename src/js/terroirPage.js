import { setupHeaderInteractions } from "../components/header/header.js";
import { terroirsJson } from "../data.js";

function exibirDadosTerroir() {
  const urlParams = new URLSearchParams(window.location.search);
  const terroirId = parseInt(urlParams.get("id"));
  console.log(terroirId);
  const terroirSelecionado = terroirsJson.find((terroir) => terroir.id == terroirId);

  console.log(terroirSelecionado);
  if (terroirSelecionado) {
    document.getElementById("titleLocation").textContent = `Terroirs do Brasil · ${terroirSelecionado.region}`;
    document.getElementById("terroirName").textContent = `${terroirSelecionado.name}`;
    document.getElementById("mainheadlineTerroir").textContent = terroirSelecionado.main_headline;
    document.getElementById("terroirImage").src = `./public/terroirs/${terroirSelecionado.cardImage}`;
    document.getElementById("regionImage").src = terroirSelecionado.region;
    document.getElementById("stateImage").textContent = terroirSelecionado.state;

    document.getElementById("description").textContent = terroirSelecionado.description;
    document.getElementById("regionDescription").textContent = terroirSelecionado.region;
    document.getElementById("stateDescription").textContent = terroirSelecionado.state;

    document.getElementById("relief").textContent = terroirSelecionado.characteristics.relief;
    document.getElementById("climate").textContent = terroirSelecionado.characteristics.climate;
    document.getElementById("soil").textContent = terroirSelecionado.characteristics.soil;
    document.getElementById("identity").textContent = terroirSelecionado.characteristics.identity;

    document.getElementById("arturo_perspective").textContent = terroirSelecionado.arturo_perspective;
  }
}

setupHeaderInteractions();
exibirDadosTerroir();
document.addEventListener("DOMContentLoaded", exibirDadosTerroir);

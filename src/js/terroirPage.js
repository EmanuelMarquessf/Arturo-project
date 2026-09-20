import { setupHeaderInteractions } from "../components/header/header.js";
import { terroirsJson, vinhosJson  } from "../data.js";

function exibirDadosTerroir() {
  const urlParams = new URLSearchParams(window.location.search);
  const terroirId = parseInt(urlParams.get("id"));
  const terroirSelecionado = terroirsJson.find((terroir) => terroir.id == terroirId);
  
  if (terroirSelecionado) {
    document.getElementById("titleLocation").textContent = `Terroirs do Brasil · ${terroirSelecionado.region}`;
    document.getElementById("terroirName").textContent = `${terroirSelecionado.name}`;
    document.getElementById("mainheadlineTerroir").textContent = terroirSelecionado.main_headline;
    document.getElementById("terroirImage").src = `./public/terroirs/${terroirSelecionado.cardImage}`;
    document.getElementById("regionImage").textContent = terroirSelecionado.region;
    document.getElementById("stateImage").textContent = terroirSelecionado.state;

    document.getElementById("description").textContent = terroirSelecionado.description;
    document.getElementById("regionDescription").textContent = terroirSelecionado.region;
    document.getElementById("stateDescription").textContent = terroirSelecionado.state;

    document.getElementById("relief").textContent = terroirSelecionado.characteristics.relief;
    document.getElementById("climate").textContent = terroirSelecionado.characteristics.climate;
    document.getElementById("soil").textContent = terroirSelecionado.characteristics.soil;
    document.getElementById("identity").textContent = terroirSelecionado.characteristics.identity;

    document.getElementById("arturo_perspective").textContent = terroirSelecionado.arturo_perspective;

    filterSelectedProducts(terroirId);
  }
}

function filterSelectedProducts(terroirId) {
  const selectedContainer = document.getElementById("terroirProducts");

  if (!selectedContainer) {
    console.error("Elemento 'terroirProducts' não encontrado.");
    return;
  }
  
  const filteredWine = vinhosJson.filter((item) => item.terroir == terroirId);

  if (filteredWine.length === 0) {
    selectedContainer.innerHTML = "<p class='text-brown-500'>Nenhum vinho encontrado para este terroir no momento.</p>";
    return;
  }

  const cardsHTML = filteredWine.map((vinho) => {
    return `
      <a href="productPage.html?id=${vinho.id}" class="flex flex-col items-center text-center bg-brown-200 rounded flex items-center transition-all duration-300 ease-out hover:-translate-y-2 p-4 min-w-[300px] w-[300px]">
        <img src="${vinho.image}" alt="" class="h-72" />
        <div class="flex flex-col p-4 gap-3">
          <div class="flex flex-col">
            <span class="text-brown-500 uppercase tracking-[0.2em] uppercase">${vinho.type.replace('Vinho', '')}</span>
            <span class="text-brown-600 text-xl font-medium">${vinho.title}</span>
          </div>
          <div class="bg-[#E5D3B3] w-1/2 h-[2px] mx-auto mb-2"> </div>
          <p class="text-brown-600 libre-baskerville-regular text-base line-clamp-3 leading-relaxed">${vinho.description}</p>
        </div>
      </a>
    `;
  }).join("");

  selectedContainer.innerHTML = cardsHTML;
}

//setupHeaderInteractions();
document.addEventListener("DOMContentLoaded", exibirDadosTerroir);

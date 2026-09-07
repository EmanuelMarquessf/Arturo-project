import { setupHeaderInteractions } from "../components/header/header.js";
import { setupFooterInteractions } from "../components/footer/footer.js";

import { vinhosJson, terroirsJson } from "../data.js";

const filteredWine = vinhosJson.filter((item) => item.selected == true);
// --- Lógica de Verificação de Idade ---
function setupAgeGate() {
  const ageGate = document.getElementById("age-gate");
  const btnYes = document.getElementById("age-gate-yes");
  const btnNo = document.getElementById("age-gate-no");

  if (!ageGate) return;

  const verificationData = localStorage.getItem("age-verified-data");
  const now = new Date().getTime();
  const time = 1000 * 60 * 60 * 6;

  if (verificationData) {
    const lastVerificationTime = parseInt(verificationData);
    if (now - lastVerificationTime < time) {
      ageGate.remove();
      return;
    }
  }

  ageGate.style.display = "flex";

  btnYes.addEventListener("click", () => {
    const timestamp = new Date().getTime();
    localStorage.setItem("age-verified-data", timestamp.toString());

    ageGate.style.opacity = "0";
    setTimeout(() => ageGate.remove(), 300);
  });

  btnNo.addEventListener("click", () => {
    window.location.href = "https://www.google.com";
  });
}


function filterSelectedProducts() {
  const selectedContainer = document.getElementById("productCards");

  if (!selectedContainer) {
    console.error("Elemento 'productCards' não encontrado.");
    return;
  }

  const cardsHTML = filteredWine.map((vinho) => {
    return `
      <a href="productPage.html?id=${vinho.id}" class="flex flex-col items-center text-center bg-brown-200 rounded flex items-center transform transition duration-300 ease-in-out hover:scale-105 p-4 min-w-[300px] w-[300px]">
        <img src="${vinho.image}" alt="" class="h-72" />
        <div class="flex flex-col p-4 gap-3">
          <div class="flex flex-col">
            <span class="text-brown-500 uppercase tracking-[0.2em] uppercase">${vinho.type.replace('Vinho', '')}</span>
            <span class="text-brown-600 text-xl">${vinho.title}</span>
          </div>
          <hr class="border-[#E5D3B3] w-1/2 mx-auto mb-2" />
          <p class="text-brown-400 libre-baskerville-regular-italic line-clamp-3 leading-relaxed">${vinho.description}</p>
        </div>
      </a>
    `;
  }).join("");

  selectedContainer.innerHTML = cardsHTML;
}

function loadTerroirs() {
  const selectedContainer = document.getElementById("terroirsCards");

  if (!selectedContainer) {
    console.error("Elemento 'terroirsCards' não encontrado.");
    return;
  }

  const cardsHTML = terroirsJson.map((terroir) => {
    return `
    <a href="terroirPage.html?id=${terroir.id}" class="group relative flex flex-col justify-end w-[350px] h-[450px] md:h-[650px] overflow-hidden transform transition duration-300 ease-in-out cursor-pointer shrink-0">
      
      <!-- Imagem de fundo com efeito de zoom suave no hover -->
      <img src="${terroir.cardImage}" alt="${terroir.name}" class="absolute inset-0 w-full h-full object-cover z-0 transition duration-700 ease-in-out group-hover:scale-110" />
      
      <!-- Gradiente escuro para garantir a leitura do texto -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
      
      <!-- Conteúdo do Card -->
      <div class="relative z-20 w-full p-6 flex flex-col items-center text-center">
        
        <!-- Título principal -->
        <h3 class="text-brown-300 text-lg tracking-[0.15em] uppercase libre-baskerville-regular mb-1">
          ${terroir.name}
        </h3>
        
        <!-- Subtítulo (Localização) -->
        <span class="text-brown-100 text-xs tracking-wider">
          ${terroir.location || "Região | Estado"}
        </span>
        
        <!-- Linha decorativa com ícone -->
        <div class="flex items-center justify-center w-full gap-3 mt-5 opacity-70">
          <div class="h-[1px] w-8 bg-brown-400"></div>
          
          <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
          <svg class="size-8 text-brown-400 fill-current" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path d="M544 195.2a160 160 0 0196 60.8 160 160 0 11146.24 254.976 160 160 0 01-128 224 160 160 0 11-292.48 0 160 160 0 01-128-224A160 160 0 11384 256a160 160 0 0196-60.8V128h-64a32 32 0 010-64h192a32 32 0 010 64h-64v67.2zM512 448a96 96 0 100-192 96 96 0 000 192zm-256 0a96 96 0 100-192 96 96 0 000 192zm128 224a96 96 0 100-192 96 96 0 000 192zm128 224a96 96 0 100-192 96 96 0 000 192zm128-224a96 96 0 100-192 96 96 0 000 192zm128-224a96 96 0 100-192 96 96 0 000 192z"/>
          </svg>
          
          <div class="h-[1px] w-8 bg-brown-400"></div>
        </div>
        
      </div>
    </a>
  `;
  }).join("");

  selectedContainer.innerHTML = cardsHTML;
}



function initializeApp() {
  setupAgeGate();
  setupHeaderInteractions();
  setupFooterInteractions();
  filterSelectedProducts();
  loadTerroirs();
}

// Inicializa quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", initializeApp);

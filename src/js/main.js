import { setupHeaderInteractions } from "../components/header/header.js";
import { setupFooterInteractions } from "../components/footer/footer.js";

import { vinhosJson } from "../data.js";

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
const selectedContainer = document.getElementById("selectedContainer");

  if (!selectedContainer) {
    console.error("Elemento 'selectedContainer' não encontrado.");
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

function initializeApp() {
  setupAgeGate();
  setupHeaderInteractions();
  setupFooterInteractions();
  filterSelectedProducts();
}

// Inicializa quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", initializeApp);

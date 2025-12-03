import { vinhosJson } from "../data.js";

const urlParams = new URLSearchParams(window.location.search);
const typeParam = urlParams.get("type");

const filteredVinhos = vinhosJson.filter((vinho) =>
  vinho.type.toLowerCase().includes(typeParam?.toLowerCase())
);

document.getElementById('categoryTitle').innerText = typeParam == 'suave' ? 'Vinhos Suaves' : typeParam == 'tinto' ? 'Vinhos Tintos' : typeParam == 'branco' ? 'Vinhos Brancos' : typeParam;


function criarCards(vinhos) {
  const container = document.getElementById("cardContainer");

  // 1. Verificação de segurança
  if (!container) {
    console.error("Elemento com ID 'cardContainer' não encontrado.");
    return;
  }

  // 2. Criação do HTML dos cards
  // O método map percorre o array e retorna um array de strings HTML.
  const cardsHTML = vinhos
    .map((vinho) => {
      // Uso de template literals (strings com acento grave `) para construir o HTML.
      // As classes Tailwind CSS e as variáveis do objeto 'vinho' são mantidas.
      return `
            <a href="productPage.html?id=${vinho.id}" 
                class="grid grid-cols-6 items-center bg-brown-200 rounded p-4 flex flex-col text-center transform transition duration-300 ease-in-out hover:scale-105">
                <img src="${vinho.image}" 
                    alt="${vinho.title}" 
                    class="col-span-2 h-50 mx-auto">
                <div class="text-left col-span-4 libre-baskerville-regular flex flex-col justify-between gap-4">
                    <div class=""> 
                        <span class="text-brown-500 text-md">${vinho.type}</span>
                        <h3 class="text-brown-600 text-lg">${vinho.title}</h3>
                    </div>
                    <div class="w-3 h-[2px] bg-brown-500"></div>

                    <p class="text-left text-sm text-brown-400 line-clamp-3">
                        ${vinho.description}
                    </p>
                </div>
            </a>
        `;
    })
    .join(""); // O método join('') concatena o array de strings em uma única string HTML.

  // 3. Inserção do HTML no container
  // O 'innerHTML' substitui qualquer conteúdo existente (se houver) pelo novo HTML dos cards.
  container.innerHTML = cardsHTML;
}

document.addEventListener("DOMContentLoaded", () => {
  criarCards(filteredVinhos);
});

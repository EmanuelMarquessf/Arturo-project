import { setupHeaderInteractions } from "./components/header/header.js";
import { setupFooterInteractions } from "./components/footer/footer.js";
import { vinhosJson } from './data.js';
// ... importar outros módulos aqui ...

function criarCards(vinhos) {
    const container = document.getElementById("cardContainer");
    vinhos.forEach((vinho) => {
        const card = document.createElement("a");
        card.className =
        "bg-white rounded-lg shadow-md w-64 p-4 flex flex-col items-center";
        card.href = `productPage.html?id=${vinho.id}`
    const imagem = document.createElement("img");
    imagem.src = vinho.image;
    imagem.alt = vinho.title;

    const titulo = document.createElement("h3");
    titulo.textContent = vinho.title;

    const descricao = document.createElement("p");
    descricao.textContent = vinho.description;

    card.appendChild(imagem);
    card.appendChild(titulo);
    card.appendChild(descricao);

    container.appendChild(card);
    });
}

function initializeApp() {
    setupHeaderInteractions();
    setupFooterInteractions();
}

document.addEventListener("DOMContentLoaded", initializeApp);

document.addEventListener("DOMContentLoaded", () => { criarCards(vinhosJson);});

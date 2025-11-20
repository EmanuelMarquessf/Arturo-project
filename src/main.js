import { setupHeaderInteractions } from "./components/header/header.js";
import { setupFooterInteractions } from "./components/footer/footer.js";
// ... importar outros módulos aqui ...

const vinhosJson = [
    {
        title: "Espumante Brut Rosé",
        description: "Notas frutadas e refrescantes, ideal para celebrações.",
        image: "../public/img/garrafas/Espumantes/1.png",
    },
    {
        title: "Tinto Reserva Especial",
        description: "Aroma intenso de frutas vermelhas com toque de carvalho.",
        image: "../public/img/garrafas/Espumantes/1.png",
    },
    {
        title: "Branco Seco Sauvignon",
        description: "Leve e cítrico, perfeito para dias quentes.",
        image: "../public/img/garrafas/Espumantes/1.png",
    },
    {
        title: "Rosé Provence",
        description: "Elegante e floral, ideal para aperitivos e pratos leves.",
        image: "../public/img/garrafas/Espumantes/1.png",
    },
    {
        title: "Espumante Moscatel",
        description: "Doce e delicado, ótimo para sobremesas.",
        image: "../public/img/garrafas/Espumantes/1.png",
    },
];

function criarCards(vinhos) {
    const container = document.getElementById("cardContainer");
    vinhos.forEach((vinho) => {
        const card = document.createElement("div");
        card.className =
        "bg-white rounded-lg shadow-md w-64 p-4 flex flex-col items-center";

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

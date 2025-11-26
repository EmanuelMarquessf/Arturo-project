// ==========================================================
// 1. IMPORTAÇÃO DOS DADOS
// Garanta que o caminho e o nome do arquivo estejam corretos
// ==========================================================
import { vinhosJson } from "./data.js";

function buscarVinhoEExibirDetalhes() {
  // Obtém o parâmetro 'id' da URL (ex: detalhe.html?id=1)
  const urlParams = new URLSearchParams(window.location.search);
  const vinhoId = parseInt(urlParams.get("id"));

  // Busca o objeto de vinho correspondente ao ID
  const vinhoSelecionado = vinhosJson.find((vinho) => vinho.id === vinhoId);

  // Se o vinho for encontrado, injeta os dados no HTML
  if (vinhoSelecionado) {
    // --- INJEÇÃO DE CAMPOS SIMPLES ---
    document.getElementById("tipoVinho").textContent = vinhoSelecionado.type;
    document.getElementById("tituloVinho").textContent = vinhoSelecionado.title;
    document.getElementById("categoria").textContent = vinhoSelecionado.type;
    document.getElementById("variedade").textContent =
      vinhoSelecionado.textContent =
        vinhoSelecionado.grape.split(",").length > 1
          ? "Blend"
          : vinhoSelecionado.grape;
    document.getElementById("volume").textContent = vinhoSelecionado.volume;
    document.getElementById("teor").textContent = vinhoSelecionado.alcolic;
    vinhoSelecionado.volume;
    document.getElementById("descricaoContainer").textContent = vinhoSelecionado.description;

    // --- INJEÇÃO DA IMAGEM ---
    document.getElementById("imagemContainer").innerHTML = `
            <img 
                src="${vinhoSelecionado.image}" 
                alt="Imagem de ${vinhoSelecionado.title}" 
                class="w-56 lg:w-92 h-auto object-contain transition-transform duration-500 hover:scale-105"
            />
        `;

    const descriptionHTML = vinhoSelecionado.description;
    // --- INJEÇÃO DA DESCRIÇÃO (Múltiplos Parágrafos) ---
    const detailDescriptionHTML = vinhoSelecionado.detailDescription
      .map((p) => {
        // Aplica formatação específica para a seção de Destaques
        if (p.startsWith("**Destaques:**")) {
          // Remove a tag forte do JS para usar o <strong>
          const textoLimpo = p.replace("**Destaques:**", "Destaques:");
          return `<p class="text-brown-500 libre-baskerville-regular text-base mt-4 pt-2 border-t border-brown-300">
                            <strong>${textoLimpo}</strong>
                        </p>`;
        }
        return `<p class="text-brown-400 libre-baskerville-regular text-base mb-4">${p}</p>`;
      })
      .join("");

    // Usa insertAdjacentHTML para adicionar conteúdo, e não substituir tudo
    // O h2 "Sobre o Vinho" já está no HTML estático
    document
      .getElementById("descricaoContainer")
      .insertAdjacentHTML("beforeend", descriptionHTML);

    document
      .getElementById("detailDescricaoContainer")
      .insertAdjacentHTML("beforeend", detailDescriptionHTML);

    // --- MONTAGEM E INJEÇÃO DA FICHA TÉCNICA ---

    // Lista de campos a serem exibidos na ficha (na ordem desejada)
    const caracteristicas = [
      { label: "Tipo", value: vinhoSelecionado.type },
      { label: "Uva(s)", value: vinhoSelecionado.grape },
      { label: "País", value: vinhoSelecionado.country },
      { label: "Região", value: vinhoSelecionado.region },
      { label: "Safra", value: vinhoSelecionado.safra },
      { label: "Produtor", value: vinhoSelecionado.productor },
      { label: "Teor Alcoólico", value: vinhoSelecionado.alcolic },
    ];

    // Cria os elementos <li> para a lista
    const caracteristicasHTML = caracteristicas
      .map(
        (item) => `
            <li class="flex justify-between border-b border-brown-200 py-1">
                <span>${item.label}:</span>
                <span class="font-medium text-brown-600">${item.value}</span>
            </li>
        `
      )
      .join("");

    // Injeta os itens <li> na lista <ul>
    document.getElementById("fichaTecnicaLista").innerHTML =
      caracteristicasHTML;
  } else {
    // --- TRATAMENTO DE ERRO (Vinho não encontrado) ---
    // Se o vinho não for encontrado, exibe a mensagem de erro no container principal
    const estruturaPrincipal = document.getElementById("estruturaPrincipal");
    if (estruturaPrincipal) {
      estruturaPrincipal.innerHTML = `
                <div class="text-center p-10 bg-white rounded-lg shadow-md max-w-lg mx-auto md:col-span-2">
                    <h1 class="text-2xl text-red-600 libre-baskerville-bold">Vinho não encontrado.</h1>
                    <p class="text-gray-500 mt-2">O ID do produto na URL está incorreto ou o produto foi removido.</p>
                </div>
            `;
      // Remove as classes de layout para centralizar a mensagem de erro
      estruturaPrincipal.className = "flex flex-col gap-16";
    }
  }
}

// ==========================================================
// 2. INICIALIZAÇÃO
// Garante que a função seja chamada somente após o DOM estar pronto
// ==========================================================
document.addEventListener("DOMContentLoaded", buscarVinhoEExibirDetalhes);

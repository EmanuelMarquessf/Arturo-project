import { setupHeaderInteractions } from "../components/header/header.js";
import { setupFooterInteractions } from "../components/footer/footer.js";

document.addEventListener("DOMContentLoaded", () => {
  setupHeaderInteractions();
  setupFooterInteractions();

  const btnContinuar = document.getElementById("btn-continuar-leitura");
  const iconeChevron = document.getElementById("icone-chevron");
  const conteudoHistoria = document.getElementById("myHistoryExpanded");
  const textoBotao = document.getElementById("texto-botao");
  

  if (btnContinuar && iconeChevron && conteudoHistoria) {
    btnContinuar.addEventListener("click", () => {
      btnContinuar.classList.toggle("col-span-4");
      iconeChevron.classList.toggle("rotate-180");
      conteudoHistoria.classList.toggle("hidden");

      if (conteudoHistoria.classList.contains("hidden")) {
        textoBotao.textContent = "Continuar Leitura";
      } else {
        textoBotao.textContent = "Ocultar Leitura";
      }
    });
  }
});

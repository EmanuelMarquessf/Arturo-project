export function setupFooterInteractions() {
  const footerYear = document.getElementById("footer-year");

  if (!footerYear) {
    console.error("Elemento do Footer não encontrado.");
    return;
  }

  function updateYear() {
    const anoAtual = new Date().getFullYear();
    footerYear.innerText = `© ${anoAtual} Boteco do Vinho. Todos os direitos reservados.`;
  }


  updateYear();
}

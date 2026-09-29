export function scrollCarousel(containerId, direction) {
  console.log('aa')
  const container = document.getElementById(containerId);

  if (!container) return;

  const pageWidth = container.clientWidth;

  const currentPage = Math.round(
    container.scrollLeft / pageWidth
  );

  const totalPages = Math.ceil(
    container.scrollWidth / pageWidth
  );

  let nextPage = currentPage + direction;

  nextPage = Math.max(
    0,
    Math.min(nextPage, totalPages - 1)
  );

  container.scrollTo({
    left: nextPage * pageWidth,
    behavior: "smooth"
  });
}


export function goToCarouselPage(containerId, page) {
  const container = document.getElementById(containerId);

  if (!container) return;

  const pageWidth = container.clientWidth;

  container.scrollTo({
    left: page * pageWidth,
    behavior: "smooth"
  });
}


export function updateCarouselDots(containerId, dotsId) {
  const container = document.getElementById(containerId);
  const dotsContainer = document.getElementById(dotsId);

  if (!container || !dotsContainer) return;

  const maxScroll = container.scrollWidth - container.clientWidth;

  // Não precisa de bolinhas se não houver scroll
  if (maxScroll <= 0) {
    dotsContainer.innerHTML = "";
    return;
  }

  const pageWidth = container.clientWidth;

  const pages = Math.ceil(
    container.scrollWidth / pageWidth
  );

  // Cria as bolinhas
  if (dotsContainer.children.length !== pages) {
    dotsContainer.innerHTML = "";

    for (let i = 0; i < pages; i++) {
      const dot = document.createElement("button");

      dot.type = "button";

      dot.className = `
        carousel-dot
        w-2 h-2
        rounded-full
        bg-brown-300
        transition-all
        duration-300
        cursor-pointer
      `;

      dot.setAttribute(
        "aria-label",
        `Página ${i + 1}`
      );

      dot.addEventListener("click", () => {
        goToCarouselPage(containerId, i);
      });

      dotsContainer.appendChild(dot);
    }
  }

  // Página atual
  const currentPage = Math.round(
    container.scrollLeft / pageWidth
  );

  // Atualiza bolinha ativa
  Array.from(dotsContainer.children).forEach(
    (dot, index) => {

      if (index === currentPage) {
        dot.classList.remove(
          "w-2",
          "bg-brown-300"
        );

        dot.classList.add(
          "w-6",
          "bg-brown-600"
        );
      } else {
        dot.classList.remove(
          "w-6",
          "bg-brown-600"
        );

        dot.classList.add(
          "w-2",
          "bg-brown-300"
        );
      }
    }
  );
}


export function initCarousel(containerId, dotsId) {
  const container = document.getElementById(containerId);

  if (!container) return;

  const update = () => {
    updateCarouselDots(containerId, dotsId);
  };

  container.addEventListener("scroll", update);

  // Inicializa
  update();

  // Recalcula quando a tela mudar de tamanho
  window.addEventListener("resize", update);
}
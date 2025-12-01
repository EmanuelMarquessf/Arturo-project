export function setupHeaderInteractions() {
  const container = document.getElementById("wine-dropdown-container");
  const menu = document.getElementById("wine-dropdown-menu");
  const arrow = document.getElementById("wine-dropdown-arrow");

  if (!container || !menu || !arrow) {
    console.error("Elementos do Header Dropdown não encontrados.");
    return;
  }
  function openDropdown() {
    // Remove 'hidden' para mostrar o menu
    menu.classList.remove("hidden");

    menu.classList.add("opacity-100", "scale-y-100");
    menu.classList.remove("opacity-0", "scale-y-0");

    arrow.classList.add("rotate-180");
  }

  function closeDropdown() {
    menu.classList.add("opacity-0", "scale-y-0");
    menu.classList.remove("opacity-100", "scale-y-100");

    arrow.classList.remove("rotate-180");

    setTimeout(() => {
      menu.classList.add("hidden");
    }, 300);
  }

  container.addEventListener("mouseenter", openDropdown);
  container.addEventListener("mouseleave", closeDropdown);
}

//Mobile menu funcitons
document.addEventListener("DOMContentLoaded", () => {
    // ---------------------------------------------
    // 1. Funcionalidade do Menu Mobile (Hamburger)
    // ---------------------------------------------
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const iconOpen = document.getElementById("icon-open");
    const iconClose = document.getElementById("icon-close");

    // É crucial definir estas variáveis aqui, antes que sejam usadas em closeMobileMenu()
    const mobileWineDropdownButton = document.getElementById("mobile-wine-dropdown-button");
    const mobileWineDropdownMenu = document.getElementById("mobile-wine-dropdown-menu");
    const mobileWineDropdownArrow = document.getElementById("mobile-wine-dropdown-arrow");
 
    function closeMobileMenu() {
        mobileMenu.classList.add('hidden');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
        
        // Opcional: Garante que o dropdown interno também feche
        if (mobileWineDropdownMenu) {
            mobileWineDropdownMenu.classList.add('hidden');
            mobileWineDropdownArrow.classList.remove('rotate-180');
        }
    }

    mobileMenuToggle.addEventListener("click", () => {
        // Alterna a visibilidade do menu
        mobileMenu.classList.toggle("hidden");
    
        // Alterna os ícones de Hamburger (abrir/fechar)
        iconOpen.classList.toggle("hidden");
        iconClose.classList.toggle("hidden");
    });

    // Fechar o menu mobile ao clicar em um link (Usando a função auxiliar)
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
        // CORRIGIDO: Usa closeMobileMenu para evitar duplicação
        link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener('click', (event) => {
        // Verifica se o menu está visível e se o clique foi fora do toggle E fora do menu
        const isMenuVisible = !mobileMenu.classList.contains('hidden');
        const isClickInsideToggle = mobileMenuToggle.contains(event.target);
        const isClickInsideMenu = mobileMenu.contains(event.target);

        if (isMenuVisible && !isClickInsideToggle && !isClickInsideMenu) {
            closeMobileMenu();
        }
    });

    // ---------------------------------------------
    // 2. Funcionalidade do Dropdown Desktop
    // ---------------------------------------------
    const wineDropdownContainer = document.getElementById(
        "wine-dropdown-container"
    );
    const wineDropdownButton = document.getElementById("wine-dropdown-button");
    const wineDropdownMenu = document.getElementById("wine-dropdown-menu");
    const wineDropdownArrow = document.getElementById("wine-dropdown-arrow");
    
    // Toggle por clique no desktop
    wineDropdownButton.addEventListener("click", () => {
        wineDropdownMenu.classList.toggle("hidden");
        wineDropdownArrow.classList.toggle("rotate-180");
    });
    
    // Fechar se clicar fora
    document.addEventListener("click", (event) => {
        if (
            !wineDropdownContainer.contains(event.target) &&
            !wineDropdownMenu.classList.contains("hidden")
        ) {
            wineDropdownMenu.classList.add("hidden");
            wineDropdownArrow.classList.remove("rotate-180");
        }
    });
    
    // ---------------------------------------------
    // 3. Funcionalidade do Dropdown Mobile
    // ---------------------------------------------
    // CORRIGIDO: As variáveis já foram definidas acima. Mantemos apenas o listener.
    
    mobileWineDropdownButton.addEventListener("click", () => {
        // Alterna a visibilidade do dropdown mobile
        mobileWineDropdownMenu.classList.toggle("hidden");
        // Gira a seta
        mobileWineDropdownArrow.classList.toggle("rotate-180");
    });
});
// CORRIGIDO: Removida a chave de fechamento desnecessária da função exportada.
// Caso você queira manter o 'export function setupHeaderInteractions() {'
// e chamar document.addEventListener('DOMContentLoaded', setupHeaderInteractions);
// fora da função (como no código completo anterior), o bloco acima deve estar
// dentro da função 'setupHeaderInteractions'.

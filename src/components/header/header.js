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

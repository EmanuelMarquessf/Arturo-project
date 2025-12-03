import { setupHeaderInteractions } from "../components/header/header.js";
import { setupFooterInteractions } from "../components/footer/footer.js";


function initializeApp() {
  setupHeaderInteractions();
  setupFooterInteractions();
}

document.addEventListener("DOMContentLoaded", initializeApp);

import { setupHeaderInteractions } from './components/header/header.js';
import { setupFooterInteractions } from './components/footer/footer.js';
// ... importar outros módulos aqui ...

function initializeApp() {
    setupHeaderInteractions(); 
    setupFooterInteractions(); 
}

document.addEventListener('DOMContentLoaded', initializeApp);
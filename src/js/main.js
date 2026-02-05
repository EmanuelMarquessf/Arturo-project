import { setupHeaderInteractions } from "../components/header/header.js";
import { setupFooterInteractions } from "../components/footer/footer.js";

// --- Lógica de Verificação de Idade ---
function setupAgeGate() {
  const ageGate = document.getElementById('age-gate');
  const btnYes = document.getElementById('age-gate-yes');
  const btnNo = document.getElementById('age-gate-no');

  if (!ageGate) return;

  const verificationData = localStorage.getItem('age-verified-data');
  const now = new Date().getTime();
  const time = 1000 * 60 * 60 * 6;

  if(verificationData){
    const lastVerificationTime = parseInt(verificationData)
    if(now - lastVerificationTime < time){
      ageGate.remove();
      return;
    }
  }

  ageGate.style.display = 'flex';

  btnYes.addEventListener('click', () => {
    const timestamp = new Date().getTime();
    localStorage.setItem('age-verified-data', timestamp.toString());
    
    ageGate.style.opacity = '0';
    setTimeout(() => ageGate.remove(), 300);
  });

  btnNo.addEventListener('click', () => {
    window.location.href = "https://www.google.com";
  });
}

function initializeApp() {
  setupAgeGate();
  setupHeaderInteractions();
  setupFooterInteractions();
}

// Inicializa quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", initializeApp);
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
  const thirtyMinutes = 10 * 60 * 1000; // 30 minutos em milissegundos

  // Verifica se existe dado e se ainda está dentro do prazo de 30 min
  if(verificationData){
    const lastVerificationTime = parseInt(verificationData)
    if(now - lastVerificationTime < thirtyMinutes){
      ageGate.remove();
      return;
    }
  }

  // Se chegou aqui, ou não tem dado ou expirou. Mostramos o modal.
  ageGate.style.display = 'flex';

  btnYes.addEventListener('click', () => {
    // Salva o horário atual (timestamp) no momento do clique
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
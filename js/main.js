document.addEventListener("DOMContentLoaded", () => {
  const surpriseBtn = document.getElementById("surpriseBtn");
  const surpriseMessage = document.getElementById("surpriseMessage");

  if (surpriseBtn && surpriseMessage) {
    surpriseBtn.addEventListener("click", () => {
      const mensagens = [
        "🐶 Um animal agradece pelo seu carinho!",
        "🐱 Seu apoio muda vidas. Obrigado!",
        "💚 Você acabou de ganhar um 'au' de gratidão!",
        "✨ Juntos somos + fortes pela causa animal!",
        "🏡 Adotar é um ato de amor. Compartilhe!",
      ];
      const randomIndex = Math.floor(Math.random() * mensagens.length);
      surpriseMessage.textContent = mensagens[randomIndex];
      surpriseMessage.style.opacity = "0";
      setTimeout(() => {
        surpriseMessage.style.transition = "opacity 0.5s";
        surpriseMessage.style.opacity = "1";
      }, 50);
    });
  }
});

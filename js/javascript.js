
const formAdote = document.getElementById("formAdocao");
const feedbackAdote = document.getElementById("feedbackAdote");

formAdote.addEventListener("submit", function(event) {
  event.preventDefault();
  const nome = document.getElementById("nomeAdote").value;
  
  feedbackAdote.style.color = "#70ae6e";
  feedbackAdote.textContent = `Olá ${nome}! Recebemos seu interesse em adotar. Entraremos em contato para a entrevista!`;
  
  formAdote.reset();
});


const formApadrinha = document.getElementById("formApadrinha");
const feedbackApadrinha = document.getElementById("feedbackApadrinha");

formApadrinha.addEventListener("submit", function(event) {
  event.preventDefault();
  const nome = document.getElementById("nomeApadrinha").value;
  const tipo = document.getElementById("tipoApoio").value;
  
  feedbackApadrinha.style.color = "#3c6e71";
  feedbackApadrinha.textContent = `Gratidão, ${nome}! Seu apoio do tipo "${tipo}" fará toda a diferença para nossos pets.`;
  
  formApadrinha.reset();
});
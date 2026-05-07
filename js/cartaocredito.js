// 1. Formatar Número do Cartão (Grupos de 4)
const cardNumber = document.getElementById('cardNumber');
cardNumber.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo o que não é número
    value = value.replace(/(\d{4})(?=\d)/g, '$1 '); // Adiciona espaço após cada 4 dígitos
    e.target.value = value;
});

// 2. Formatar Data de Validade (MM/AA)
const expiryDate = document.getElementById('expiryDate');
expiryDate.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo o que não é número
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    e.target.value = value;
});

// 3. Impedir letras no CVV
const cvv = document.getElementById('cvv');
cvv.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
});

// 4. Lógica de Envio do Formulário
const form = document.getElementById('paymentForm');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Não deixa a página recarregar
    
    // Aqui capturarias os dados para enviar a uma API de pagamento
    const dados = {
        cartao: cardNumber.value,
        titular: document.getElementById('cardName').value,
        validade: expiryDate.value
    };

    console.log("Dados capturados para envio:", dados);
    alert("Dados enviados com sucesso! (Modo de Teste)");
});
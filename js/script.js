
const listaCaes = [
    {
        nome: "Tofú (macho)",
        raca: "Pelo de arame",
        idade: "2 anos",
        foto: "../img/tofu.jpg",
        comportamento: "Dócil e curioso"
    },
     {
        nome: "Tininha (fêmea)",
        raca: "Vira-lata",
        idade: "6 meses",
        foto: "../img/gatinha.jpg",
        comportamento: "Calma e carinhosa"
    },
    {
        nome: "Melissa (fêmea)",
        raca: "Vira-lata",
        idade: "1 ano",
        foto: "../img/mel.jpg",
        comportamento: "Calmo e carinhoso"
    },
    
];

function renderizarCaes() {
    const container = document.getElementById('container-pets');
    
    listaCaes.forEach(cao => {
    const cardHtml = `
    <div class="col-md-4">
    <div class="card cartao-pet shadow-sm">
    <img src="${cao.foto}" class="cartao-pet__imagem mx-auto d-block" alt="Foto do ${cao.nome}">
                    
    <div class="cartao-pet__corpo text-center">
    <h5 class="cartao-pet__nome">${cao.nome}</h5>
    <p class="small text-muted mb-1"><strong>Raça:</strong> ${cao.raca}</p>
    <p class="small text-muted mb-3"><strong>Idade:</strong> ${cao.idade}</p>
    <a href="/html/adote.html" class="btn cartao-pet__botao w-100">Quero Adotar ou Apadrinhar!</a>
    </div>
    </div>
    </div>
        `;
     
        container.innerHTML += cardHtml;
    });
}

window.onload = renderizarCaes;
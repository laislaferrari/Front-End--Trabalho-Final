let contador = 0;
let total = 0;

// Adiciona um produto ao carrinho e atualiza o contador e total
function adicionarCarrinho(nome, preco) {

    contador++;
    total += preco;

    // contador
    document.getElementById("contador").textContent = contador;

    // lista
    const lista = document.getElementById("lista-carrinho");

    let item = document.createElement("li");
    item.textContent = `${nome} - R$ ${preco}`;

    lista.appendChild(item);

    // atualiza total na tela
    document.getElementById("total").textContent = total;
}

// Mostra ou esconde o dropdown do carrinho
function toggleCarrinho() {
    const box = document.getElementById("box-carrinho");
    box.classList.toggle("escondido");
}
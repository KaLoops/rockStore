const items = [
    {
        id: 0,
        nome: 'camiseta Megadeth',
        img: 'camiseta-megadeth.png',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'camiseta Ozzy Osbourne',
        img: 'camiseta-ozzy-osbourne.png',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'camiseta Rammstein',
        img: 'camiseta-rammstein.png',
        quantidade: 0
    },
    {
        id: 3,
        nome: 'camiseta Slayer',
        img: 'camiseta-slayer.png',
        quantidade: 0
    },
    {
        id: 4,
        nome: 'camiseta Metallica',
        img: 'camiseta-metallica.png',
        quantidade: 0
    }
];

const inicializarLoja = () => {
    const containerProdutos = document.getElementById('produtos');
    items.map((val) => {
        containerProdutos.innerHTML += `
        
            <div class="produtosingle">
                <img src="${val.img}" />
                <p>${val.nome}</p>
                <button dataid="${val.id}">Adicionar ao carrinho</button>
                
            </div>
        `;

        // Seleciona o botão individualmente dentro do loop
        const botaoAdicionar = containerProdutos.querySelector(`button[dataid="${val.id}"]`);
        botaoAdicionar.addEventListener('click', () => {
            adicionarAoCarrinho(val.id);
        });
    });
};
const atualizarCarrinho = () => {
    const containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = ""; // Limpa o conteúdo do carrinho

    // Itera sobre os itens do carrinho e adiciona cada item ao HTML
    items.forEach((val) => {
        if (val.quantidade > 0) {
            containerCarrinho.innerHTML += `
                <p>${val.nome} | quantidade: ${val.quantidade}</p>
                <hr>
            `;
        }
    });
};

const adicionarAoCarrinho = (id) => {
    items[id].quantidade++;
    atualizarCarrinho();
};

inicializarLoja();

const botoesAdicionar = document.querySelectorAll('button');
botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', () => {
        const id = botao.dataset.id;
        adicionarAoCarrinho(id);
    });
});
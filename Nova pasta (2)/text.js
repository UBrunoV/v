// Código JavaScript para o site
// Você pode adicionar mais funcionalidades aqui

// Selecionar os elementos do carrossel
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

// Definir o índice da imagem atual
let index = 0;

// Definir uma função para mudar a imagem
function changeImage() {
    // Remover a classe active da imagem atual
    images[index].classList.remove("active");
    // Incrementar ou decrementar o índice
    index = (index + 1) % images.length;
    // Adicionar a classe active à nova imagem
    images[index].classList.add("active");
}

// Definir um intervalo para mudar a imagem a cada 3 segundos
let interval = setInterval(changeImage, 3000);

// Definir uma função para mudar a imagem ao clicar nos botões
function handleClick(event) {
    // Parar o intervalo
    clearInterval(interval);
    // Verificar qual botão foi clicado
    if (event.target.id === "prev") {
        // Remover a classe active da imagem atual
        images[index].classList.remove("active");
        // Decrementar o índice
        index = (index - 1 + images.length) % images.length;
        // Adicionar a classe active à nova imagem
        images[index].classList.add("active");
    } else if (event.target.id === "next") {
        // Chamar a função changeImage
        changeImage();
    }
    // Reiniciar o intervalo
    interval = setInterval(changeImage, 3000);
}

// Adicionar um evento de clique aos botões
prev.addEventListener("click", handleClick);
next.addEventListener("click", handleClick);

// Definir o prefixo, a extensão e o contador das imagens
const prefix = "img";
const extensao = ".jpg";
var cont = 0;

// Definir uma função para gerar o caminho das imagens
function generatePath() {
    // Incrementar o contador
    cont++;
    // Retornar o caminho concatenando o prefixo, o contador e a extensão
    return "./imagem/" + prefix + cont + extensao;
}

// Definir uma função para adicionar uma nova imagem ao carrossel
function addImage() {
    // Criar um novo elemento de imagem
    let newImage = document.createElement("img");
    // Atribuir o atributo src com o caminho gerado pela função generatePath
    newImage.setAttribute("src", generatePath());
    // Atribuir o atributo alt com o texto "Imagem " seguido do contador
    newImage.setAttribute("alt", "Imagem " + cont);
    // Adicionar o novo elemento de imagem ao carrossel
    carousel.appendChild(newImage);
}

// Chamar a função addImage três vezes para adicionar três imagens ao carrossel
addImage();
addImage();
addImage();





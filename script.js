let botao = document.getElementById('botao');
let container = document.querySelector('.alinharbotao')
let container2 = document.querySelector('.tentar')
let container3 = document.querySelector('.p1')
let result = document.querySelector('p');
let escolhas1 = document.querySelector('.esc1')
let escolhas2 = document.querySelector('.esc2')

function capturar() {
    escolha1 = document.getElementById('esc1').value;
    escolha2 = document.getElementById('esc2').value;
}

function expressar() {
    var escolhas = [escolha1, escolha2];
    result.innerText = escolhas[Math.floor(Math.random() * escolhas.length)]
};

function sumirbotao() {
    container.style.display = "none";
    container2.style.display = "block";
    container3.style.display = "block";
    document.form.nome.disabled = true;
    document.form.nome2.disabled = true;
    escolhas1.style.cursor = 'not-allowed';
    escolhas2.style.cursor = 'not-allowed';
    container3.style.cursor = 'not-allowed'
    escolhas1.style.background = 'white';
    escolhas2.style.background = 'white';
}

function tentar() {
    container3.style.display = "none";
    container.style.display = "block";
    container2.style.display = "none";
    document.form.nome.disabled = false;
    document.form.nome2.disabled = false;
    escolhas1.style.cursor = '';
    escolhas2.style.cursor = '';
    container3.style.cursor = '';
}
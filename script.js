function toggleDivs() {
    const roleSelect = document.getElementById('roleSelect');
    const divPorteiro = document.getElementById('divPorteiro');
    const divMorador = document.getElementById('divMorador');

    if (roleSelect.value === 'porteiro') {
        divPorteiro.style.display = 'block';
        divMorador.style.display = 'none';
    } else if (roleSelect.value === 'morador') {
        divPorteiro.style.display = 'none';
        divMorador.style.display = 'block';
    }
}

function updateText(element) {
    // Remove 'x' de todos os spans dentro da ul pai
    const buttons = element.parentElement.parentElement.querySelectorAll('button span');
    buttons.forEach(span => {
        span.textContent = '   ';
    });

    // Adiciona 'x' ao botão clicado
    element.querySelector('span').textContent = ' x ';
}
let currentNumber = localStorage.getItem('pdfNumber') || 0;
function PDF() {
    var line = document.querySelector('.line').style.display = 'none';

    window.print();

    localStorage.setItem('pdfNumber', ++currentNumber)
}
    document.title = `questionario_${currentNumber}`;

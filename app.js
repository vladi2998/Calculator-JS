const displayValores = document.getElementById('valores');
const displayResultado = document.getElementById('resultado');
const botonesNumeros = document.querySelectorAll('.num');
const botonesOperadores = document.querySelectorAll('.op');

const display = new Display(displayValores, displayResultado);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});


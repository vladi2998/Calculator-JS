class Display {
    constructor(displayValores, displayResultado) {
        this.displayResultado = displayResultado;
        this.displayValores = displayValores;
        this.calcu = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            dividir: '%',
            multiplicar: 'x',
            restar: '-',
            sumar: '+', 
        }
    }

    agregarNumero(numero) {
        if(numero === '0' && this.valorActual === '0') return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimir();
    }
    
    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimir();
    }

    borrarTodo() {
        this.valorActual = '';
        this.tipoOperacion = undefined
        this.imprimir();
    }

    operacion(operador){
        this.valorActual = operador;
        this.tipoOperacion = operador;
        this.imprimir();
    }

    imprimir() {
        this.displayValores.textContent = this.valorActual;
    }

}
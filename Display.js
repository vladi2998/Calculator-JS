class Display {
    constructor(displayValores, displayResultado) {
        this.displayResultado = displayResultado;
        this.displayValores = displayValores;
        this.calcu = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            dividir: '/',
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
        if(this.tipoOperacion===operador || this.valorActual.includes('+') || this.valorActual.includes('-') || this.valorActual.includes('x' || this.valorActual.includes('/'))) return
        this.valorActual = this.valorActual.toString() +  this.signos[operador].toString();
        this.tipoOperacion = operador;
        this.calcular();
        this.imprimir();
    }

    imprimir() {
        this.displayValores.textContent = this.valorActual;
    }

    calcular() {
        let index = this.valorActual.lastIndexOf(this.tipoOperacion);
        let x = this.valorActual.slice(0, index);
        let y = this.valorActual.slice(index);
        console.log(x.toString())
        console.log(y.toString())
    }
}
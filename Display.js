class Display {
    constructor(displayValores, displayResultado) {
        this.displayResultado = displayResultado;
        this.displayValores = displayValores;
        this.calcu = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorResultado = '';
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
        this.valorResultado = '';
        this.tipoOperacion = undefined
        this.imprimir();
    }

    operacion(operador){
        if(this.valorActual.length == 0) return; 
        console.log(this.valorActual[this.valorActual.length - 1])
        if(this.tipoOperacion !== undefined && (
            this.valorActual[this.valorActual.length - 1] === '+' ||
            this.valorActual[this.valorActual.length - 1] === '-' ||
            this.valorActual[this.valorActual.length - 1] === 'x' || 
            this.valorActual[this.valorActual.length - 1] === '/'
            )){
                this.tipoOperacion = operador;
                let auxiliar = this.valorActual.slice(0 , -1)
                this.valorActual = auxiliar + this.signos[operador].toString();
                this.imprimir();
                return;
        }
        if(this.tipoOperacion !== undefined){
            let cantidadElementos = this.valorActual.split(this.signos[this.tipoOperacion].toString()).length;
            console.log(cantidadElementos)
            if(cantidadElementos >= 1){
                let seCalculo = this.calcular();
                this.imprimir(seCalculo);
                this.tipoOperacion = undefined;
                return;
            }
        }
        if(this.tipoOperacion === undefined){
            if(operador === 'igual') return    
            this.valorActual = this.valorActual.toString() + this.signos[operador].toString();
            this.tipoOperacion = operador;
        }
        //this.calcular();
        this.imprimir();
    }

    imprimir(seCalculo = false) {
        this.displayValores.textContent = this.valorActual;
        if(seCalculo){
            this.displayResultado.textContent = this.valorResultado;
        }
    }

    calcular() {
        if(this.tipoOperacion === 'igual') return
        let [x, y] = this.valorActual.split(this.signos[this.tipoOperacion].toString());
        x = parseInt(x);
        y = parseInt(y);
        this.valorActual = this.calcu[this.tipoOperacion](x,y).toString();
        return true;
        //console.log(x, y);
    }
}
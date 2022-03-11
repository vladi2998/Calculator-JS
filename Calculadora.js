class Calculadora{
    sumar(x = 0, y = 0){
        return (x + y).toFixed(2);
    }

    restar(x, y){
        return (x - y).toFixed(2);
    }

    multiplicar(x, y){
        return (x*y).toFixed(2);
    }

    dividir(x, y){
        if(y === 0){
            return("Error: division por 0")
        }
        else {
            return (x/y).toFixed(2);
        }
    }
}
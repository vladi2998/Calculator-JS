class Calculadora{
    sumar(x = 0, y = 0){
        return x + y;
    }

    restar(x, y){
        return x - y;
    }

    multiplicar(x, y){
        return x*y;
    }

    dividir(x, y){
        if(y === 0){
            return("Error: division por 0")
        }
        else {
            return x/y;
        }
    }
}
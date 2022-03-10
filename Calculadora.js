class Calculadora{
    suma(x, y){
        return x + y;
    }

    resta(x, y){
        return x - y;
    }

    mult(x, y){
        return x*y;
    }

    div(x, y){
        if(x==0){
            return("Error: division por 0")
        }
        else {
            return x/y;
        }
    }
}
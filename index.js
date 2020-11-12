const calculator = {
    plus : function(a,b){
        return a+b;
    },
    minus : function(a,b){
        return a-b;
    },
    multiply : function(a,b){
        return a*b;
    },
    divide : function(a,b){
        return a/b;
    }
}



const plus = calculator.plus(3,5)
console.log(plus)

const minus = calculator.minus(3.5)
console.log(minus)
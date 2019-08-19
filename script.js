let matrix = [
    [1, 4, 5],
    [2, 5, 6],
    [3, 6, 7],
    [4],
    [5, 8, 9],
    [6, 9, 10],
    [7, 10],
    [8, 11],
    [9, 11, 12],
    [10, 12, 13],
    [11],
    [12],
    [13]]


// Dado un número dado, encontrar sus ancestros
const ancestro = (number)=>{
    let array= [];

    matrix.forEach(element => {
        element.forEach(e=>{
            if (element[0] != number){ //para evitar que elija el mismo número si es primero elemento (podría haber usado un 'for común' desde 1)
                if (e == number){  
                    array.push(element[0]);
                }
            }
        })
    })
    return array;
}

// Dado un número dado, encontrar sus hijos 
const hijos = (number)=>{   
    let array = matrix[number-1];
    return array.slice(1,array.length)
}

// Dado un número dado, lista su descendencia.
function desc(n){
    let array=hijos(n) 
    array.forEach(e=>{
        console.log(e);
        return desc(e);
    })    
}

console.log("-- Punto 1 --");
console.log(3,ancestro(3))
console.log(5,ancestro(5))
console.log(8,ancestro(8))
console.log(12,ancestro(12))
console.log("-- Punto 2 --");
console.log(1,hijos(1))
console.log(6,hijos(6))
console.log(9,hijos(9))
console.log(11,hijos(11))
console.log("-- Punto 3 --");
console.log("arriba desc para 2:",desc(2)); 
console.log("arriba desc para 6:",desc(6)); 
console.log("arriba desc para 10:",desc(10));  
console.log("arriba desc para 13:",desc(13));  




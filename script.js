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



const descendientes = (number)=>{
    let dsc=hijos(number)
    if (dsc == []) return;
    dsc.forEach(e=>{
        console.log(e);
        return descendientes(e);
    })
}





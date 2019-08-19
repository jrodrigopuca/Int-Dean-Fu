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
    matrix.forEach(element => {
        element.forEach(e=>{
            if (element[0] != number){ //para evitar que elija el mismo número si es primero elemento (podría haber usado un 'for común' desde 1)
                if (e == number){  
                    console.log(element[0]);
                }
            }
        })
    })
}

// Dado un número dado, encontrar sus hijos 
const hijos = (number)=>{   
    console.log(matrix[number-1])

    /*
    matrix.forEach(element => {
        if (element[0] == number){
            console.log(element);
        }
    })
    */
}

const desc= (number)=>{
    // tengo que usar recursión
    let children = hijos(number);
    if (children != undefined){
        console.log("a", children)
        children.forEach(e=>{
            return desc(children);
        })
    }
}





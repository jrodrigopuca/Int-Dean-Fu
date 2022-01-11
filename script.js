var matrix = [
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
    [13],
];

const getAncestors = (number) => {
    let ancestors = [];
    matrix.forEach((branch) => {
        branch.forEach((node) => {
            if (branch[0] !== number) {
                if (node === number) {
                    ancestors.push(branch[0]);
                }
            }
        });
    });
    return {
        text: `Ancestros del elemento ${number}: ${ancestors.join(", ")}`,
        data: ancestors,
    };
};

const getSons = (number) => {
    const sons = matrix[number - 1].slice(1);
    return {
        text: `Los hijos del elemento ${number}: ${sons.length ? sons.join(", ") : "-"
            }`,
        data: sons,
    };
};

const getDescendant = (number) => {
    console.log(`inicia en --> ${number}`);
    if (matrix[number - 1].length !== 1) {
        const { text, data } = getSons(number);
        console.log({ text, data });
        data.forEach((node) => getDescendant(node, false));
    } else {
        console.log(`fin --> ${number}`);
    }
};

console.log("-- Punto 1 --");
console.log(3, getAncestors(3));
console.log(5, getAncestors(5));
console.log(8, getAncestors(8));
console.log(12, getAncestors(12));

console.log("-- Punto 2 --");
console.log(1, getSons(1));
console.log(6, getSons(6));
console.log(9, getSons(9));
console.log(11, getSons(11));

console.log("-- Punto 3 --");
console.log("descendientes de elemento 2: ----");
getDescendant(2);
console.log("descendientes de elemento 6: ----");
getDescendant(6);
console.log("descendientes de elemento 10: ----");
getDescendant(10);
console.log("descendientes de elemento 13: ----");
getDescendant(13);

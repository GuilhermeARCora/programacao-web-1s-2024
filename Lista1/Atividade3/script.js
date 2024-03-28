function transporMatriz(A) {
    // Imprime a matriz original
    console.log("Matriz Original:");
    imprimirMatriz(A);

    // Transpõe a matriz
    const transposta = [];

    for (let i = 0; i < A[0].length; i++) {
        transposta[i] = [];
        for (let j = 0; j < A.length; j++) {
            transposta[i][j] = A[j][i];
        }
    }

    // Imprime a matriz transposta
    console.log("\nMatriz Transposta:");
    imprimirMatriz(transposta);
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let row = '';
        for (let j = 0; j < matriz[i].length; j++) {
            row += matriz[i][j] + ' ';
        }
        console.log(row);
    }
}

// Exemplo de uso
const matrizOriginal = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

transporMatriz(matrizOriginal);

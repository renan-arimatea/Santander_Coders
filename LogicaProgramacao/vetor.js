let vetor = [10, 20, 30, 40, 50]

vetor[2] = 60
console.log(vetor[2])



let vetor1 = []

for (let i = 0; i < 10; i ++){
    vetor1.push(i)
}
console.log(vetor1)



let vetor2 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

for (let x = 0; x < vetor2.length; x ++){
    console.log(vetor2[x])
}



let vetor3 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

for (let numero of vetor3){
    console.log(numero)
}



let vetor4 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

for (let indice in vetor4){
    console.log(vetor4[indice])
}



let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

for (let linha of matriz){
    for (let elemento of linha){
        console.log(elemento)
    }
}

// Auto-O-Matic - Máquina de embaralhar - javascript 

const makeCar = () => {
    // Uniciamos com 4 listas declaradas de marcas, modelos, anos e cores. 
    const fabricantes = ["Renault", "GM", "Fiat", "Volkswagen", "Citroen"]; 
    const modelos = ["Palio", "Sandero", "Gol", "Corsa", "Uno"];
    const anos = [ 1999, 2020, 2022, 2012, 2014];
    const cores = ["vermelho", "prata", "azul", "cinza", "branco"];
    const conversivel = [true, false];

    // Combinamos os números dos arrays usando 4 números aleatórios de lenght 
    let rand1 = Math.floor(Math.random() * fabricantes.length)
    let rand2 = Math.floor(Math.random() * modelos.length)
    let rand3 = Math.floor(Math.random() * anos.length)
    let rand4 = Math.floor(Math.random() * cores.length)
    let rand5 = Math.floor(Math.random() * 5) + 1 // acicionamos 1 para ter pelo menos 1 ocupante no carro
    let rand6 = Math.floor(Math.random() * 2)

    const carro = {  // Este é um objeto car criado 
        fabricantes: fabricantes[rand1],
        modelos: modelos[rand2],
        anos: anos[rand3],
        cores: cores[rand4],
        passageiros: rand5,
        conversivel: conversivel[rand6],
        kilometragem: 0
    };
    return carro; // Return um novo objeto carro
}

function displayCar(carro) {
    console.log("Seu novo carro é um " + carro.anos + " " + carro.fabricantes + " " + carro.modelos)
}

let carroVenda = makeCar(); // Retornando a variável é referencia ao objeto carro, ou seja...
displayCar(carroVenda); // pega a função makeCar e referencia do objeto carro. 
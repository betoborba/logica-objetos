const taxi = {
    fabricante: "General Motors", 
    modelo: "Spin",
    ano: 2023,
    ocupantes: 5,
    combustivel: "flex", 
    carroceria: "monovolume",
    conversivel: false,
    kilometragem: 1341
};

function preQualificação(carro) {

    if (carro.kilometragem > 10000) {
        return false;
    } else if (carro.ano < 2022) {

        return false;
    }
    return true
}


const valeConsiderar = preQualificação(taxi) 

if (valeConsiderar) {
    console.log(`Vale considerar este ${taxi.fabricante } ${taxi.modelo}`);

} else {
    console.log(`Você deve deixar passar esse ${taxi.fabricante } ${taxi.modelo}`);
}
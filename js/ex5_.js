// Objetos utilização do this

const taxi = {
    fabricante: "General Motors", 
    modelo: "Spin",
    ano: 2023,
    ocupantes: 5,
    combustivel: "flex", 
    carroceria: "monovolume",
    conversivel: false,
    kilometragem: 1341,
    started: false,

    start: function() {
        this.started = true;
    },

    stop: function() {
        this.started = false
    },

    drive: function() {
            if (this.started) { // true
            console.log("zoom zoom!");
        } else {
            console.log("Você precisa ligar o motor primeiro")
        }
    } 
};



taxi.drive();
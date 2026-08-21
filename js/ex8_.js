const sandero = {
    fabricante: "Renault",
    modelo: "zen",
    ano: 2020,
    cor: "prata",
    passageiros: 5,
    conversivel: false,
    kilometragem: 35900,
    started: false,

    start: function() {
        this.started = true
    },

    stop: function() {
        this.started = false;
    },

    drive: function() {
        if(this.started) {
            console.log(this.fabricante + " " + this.modelo + " veículo em funcionamento!");
        } else {
            console.log("Você precisa ligar o motor primeiro.")
        }
    }


}

const spin = {
    fabricante: "Chevrolet",
    modelo: "action",
    ano: 2024,
    cor: "azul",
    passageiros: 5,
    conversivel: false,
    kilometragem: 19870,
    started: false,

    start: function() {
        this.started = true
    },

    stop: function() {
        this.started = false;
    },

    drive: function() {
        if(this.started) {
            console.log(this.fabricante + " " + this.modelo + " veículo em funcionamento!");
        } else {
            console.log("Você precisa ligar o motor primeiro.")
        }
    }

}

const gol = {
    fabricante: "Volkswagen",
    modelo: "trend",
    ano: 2021,
    cor: "vermelho",
    passageiros: 5,
    conversivel: false,
    kilometragem: 178900,
    started: false,

     itens: function() {
        for (const prop in this) { // this representa o proprio gol

            if (typeof this[prop] !== "function")
            console.log("informações do veículo: " + prop + ": " + this[prop])
        }
    },

    start: function() {
        this.started = true
    },

    stop: function() {
        this.started = false;
    },

    drive: function() {
        if(this.started) {
            console.log(this.fabricante + " " + this.modelo + " " + this.cor + " veículo em funcionamento!" );
        } else {
            console.log("Você precisa ligar o motor primeiro.")
        }
    }

   

}

sandero.start();
sandero.drive();
sandero.stop();
spin.start();
spin.drive();
spin.stop();
gol.start();
gol.drive();
gol.stop();
gol.itens();
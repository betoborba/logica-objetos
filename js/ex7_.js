const eightBall = {

    index: 0,
    conselho: ["sim", "não", "talvez", "sem chance"],
    shake: function() {
        
       // this.index = this.conselho.index + 1;//
        if (this.index >= this.conselho.length) {
            this.index = 0
        } 
    },
    look: function() {
            return this.conselho[this.index];
    },
}

eightBall.shake();
console.log(eightBall.look())
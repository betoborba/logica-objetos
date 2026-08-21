const song = {
    nome: "Walk This Whay",
    artista: "Run-D.M.C.",
    minutos: 4,
    segundos: 3,
    genero: "80s",
    playing: false,

    play: function(){
        if (!this.playing)
            this.playing = true;
            console.log("Tocando " + this.nome + "por " + this.artista)
            
    },

    pause: function() {
        if (this.playing) {
            this.playing = false
        }   


    }
    
}; 

song.pause();
song.play();



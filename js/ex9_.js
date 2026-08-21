const magoRpg = {
  classe: "Mago",
  atributoPrincipal: "Inteligência",
  
  caracteristicasMecanicas: {
    vida: "Baixa",
    armadura: "Nenhuma (ou tecido leve)",
    itensObrigatorios: ["Grimório", "Foco arcano (Cajado/Varinha)"],
    fonteDoPoder: "Estudo acadêmico, disciplina e memorização"
  },

  perfilPsicologico: [
    "Curiosidade insaciável por segredos arcanos",
    "Arrogância intelectual ou pedantismo",
    "Cautela extrema e mentalidade estratégica",
    "Excentricidade e manias místicas"
  ],

  escolasDeEspecializacao: {
    evocacao: "Dano elemental bruto e explosões",
    abjuracao: "Escudos protetores e contra-magia",
    necromancia: "Manipulação de energia vital e mortos-vivos",
    adivinhacao: "Previsão do futuro e revelação de segredos"
  },

  conjurarFeitico: function(magia) {
    if (this.caracteristicasMecanicas.itensObrigatorios.includes("Grimório")) {
      return `Consultando o grimório... Conjurando ${magia} com sucesso!`;
    }
    return "Erro: Você precisa do seu grimório para preparar magias.";
  },

  infos: function() {
    for (const prop in this) {

        if (typeof this[prop] !== "function")
            console.log(prop + ": " + this[prop])
    }
  }



};

magoRpg.infos();
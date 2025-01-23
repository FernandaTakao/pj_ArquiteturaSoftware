const Turma = require("./Turma");

class TurmaPresencial extends Turma {
  constructor(codigo, nota, aprovado, frequencia) {
    super(codigo, nota, aprovado);
    this.frequencia = frequencia;
  }

  aprovadoPresencial() {
    return this.nota >= 6 && this.frequencia >= 75;
  }
}

module.exports = TurmaPresencial;

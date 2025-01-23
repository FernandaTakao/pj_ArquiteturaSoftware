export default class Aluno {
  #turmas = [];

  constructor({ nome, login, ra }) {
    this.nome = nome;
    this.login = login;
    this.ra = ra;
  }

  add_turma(turma) {
    this.#turmas.push(turma);
  }
}

modulos.export = Aluno;

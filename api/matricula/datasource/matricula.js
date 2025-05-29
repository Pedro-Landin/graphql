const { SQLDataSource } = require("datasource-sql");

class MatriculaAPI extends SQLDataSource {
  constructor(dbConfig) {
    super(dbConfig);
    this.Resposta = {
      mensagem: "",
    };
  }

  async matricularEstudante(ids) {
    const novaMatricula = {
      estudante_id: ids.estudante,
      turma_id: ids.turma,
      status: "confirmado",
    };

    await this.db.insert(novaMatricula).into("matriculas");

    this.Resposta.mensagem = "matrícula confirmada";
    return this.Resposta;
  }

  async getMatriculasPorTurma(idTurma) {
    const matriculas = await this.db
      .select("*")
      .from("matriculas")
      .where("turma_id", idTurma);

    console.log(matriculas);
    return matriculas;
  }

  async getMatriculasPorEstudante(idEstudante) {
    const matriculas = await this.db
      .select("*")
      .from("matriculas")
      .where({ estudante_id: idEstudante });

    console.log(matriculas);
    return matriculas;
  }

  async deletarMatricula(idMatricula) {
    await this.db("matriculas")
      .where({ id: Number(idMatricula) })
      .del();

    this.Resposta.mensagem = "registro deletado";
    return this.Resposta;
  }
}

module.exports = MatriculaAPI;

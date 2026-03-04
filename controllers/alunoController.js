const alunoService = require("../services/alunoService")

class AlunoController {

  avaliarAluno(bimestres) {
    const mediaFinal = alunoService.calcularMediaFinal(bimestres)
    const status = alunoService.verificarAprovacao(mediaFinal)

    return {
      mediaFinal,
      status
    }
  }
}

module.exports = new AlunoController()
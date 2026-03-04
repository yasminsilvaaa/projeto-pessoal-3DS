class AlunoService {

  calcularMedia(notas) {
    if (!Array.isArray(notas) || notas.length === 0) return 0
    const soma = notas.reduce((acc, n) => acc + n, 0)
    return soma / notas.length
  }

  calcularMediaFinal(bimestres) {
    const medias = bimestres.map(b => this.calcularMedia(b))
    return this.calcularMedia(medias)
  }

  verificarAprovacao(mediaFinal) {
    if (mediaFinal >= 6) return "Aprovado"
    if (mediaFinal >= 4) return "Recuperação"
    return "Reprovado"
  }

  validarNota(nota) {
    return typeof nota === "number" && nota >= 0 && nota <= 10
  }

  precisaRecuperacao(mediaFinal) {
    return mediaFinal >= 4 && mediaFinal < 6
  }
}

module.exports = new AlunoService()
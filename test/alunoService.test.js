const alunoService = require("../services/alunoService")

test("Calcula média corretamente", () => {
  expect(alunoService.calcularMedia([10, 8, 6])).toBe(8)
})

test("Média de lista vazia retorna 0", () => {
  expect(alunoService.calcularMedia([])).toBe(0)
})

test("Calcula média final corretamente", () => {
  const bimestres = [[8,8],[6,6],[10,10],[4,4]]
  expect(alunoService.calcularMediaFinal(bimestres)).toBe(7)
})

test("Aluno aprovado com média >= 6", () => {
  expect(alunoService.verificarAprovacao(7)).toBe("Aprovado")
})

test("Aluno em recuperação com média entre 4 e 6", () => {
  expect(alunoService.verificarAprovacao(5)).toBe("Recuperação")
})

test("Aluno reprovado com média < 4", () => {
  expect(alunoService.verificarAprovacao(3)).toBe("Reprovado")
})

test("Nota válida entre 0 e 10", () => {
  expect(alunoService.validarNota(9)).toBe(true)
})

test("Nota inválida menor que 0", () => {
  expect(alunoService.validarNota(-1)).toBe(false)
})

test("Nota inválida maior que 10", () => {
  expect(alunoService.validarNota(11)).toBe(false)
})

test("Identifica necessidade de recuperação", () => {
  expect(alunoService.precisaRecuperacao(5)).toBe(true)
})
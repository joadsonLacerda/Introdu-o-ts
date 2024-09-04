
let quantidadeCriancas: number = 20
let quantidadePreAdolescentes: number = 10
let quantidadeTotal: number = 100
let quantidadeAdultos: number = quantidadeTotal - (quantidadeCriancas + quantidadePreAdolescentes)
let quantidadeCarne: number = (quantidadeCriancas * 100) + (quantidadePreAdolescentes * 200) + (quantidadeAdultos * 300)

console.log(quantidadeCarne)

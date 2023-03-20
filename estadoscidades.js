'use strict'

export const getDadosEstado = async (sigla) => {
    const url = `http://localhost:8080/v1/senai/estado/sigla/${sigla}`
    const response = await fetch(url)
    const estado = await response.json()

    return {
        uf: estado.sigla,
        descricao: estado.nome,
        capital: estado.capital,
        regiao: estado.regiao
    }
}
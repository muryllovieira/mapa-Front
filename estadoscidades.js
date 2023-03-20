'use strict'

export const getDadosEstado = async (sigla) => {
    const url = `http://localhost:8080/v1/senai/estado/sigla/${sigla}`
    const response = await fetch(url)
    const estado = await response.json()

    return {
        uf: estado.uf,
        descricao: estado.descricao,
        capital: estado.capital,
        regiao: estado.regiao
    }
}
export const getCidades = async (sigla) => {
    const url = `http://localhost:8080/v1/senai/cidades/estado/sigla/${sigla}`
    const response = await fetch(url)
    const data = await response.json()

    return {
        cidades: data.cidades
    }
}
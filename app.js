'use strict'

import { getDadosEstado } from "./estadoscidades.js"
import { getCidades } from "./estadoscidades.js"

const mapa = document.querySelector('svg')

const dadosDoEstado = document.getElementById('info')

const getEstados = async(event) => {
    const estadoClicado = event.target.id.replace('BR-','')
    const estado = await getDadosEstado(estadoClicado)
    const cidades = await getCidades(estadoClicado)


    document.getElementById('uf').textContent = estado.uf
    document.getElementById('estado').textContent = estado.descricao
    document.getElementById('capital').textContent = estado.capital
    document.getElementById('regiao').textContent =  estado.regiao
    
    const ul = document.getElementById('lista-cidades')

    cidades.cidades.forEach(function(cidade){
        const lista = document.createElement('li')
        lista.textContent = cidade
        ul.append(lista)
    })

    dadosDoEstado.classList.remove('none')
}


mapa.addEventListener('click', getEstados)

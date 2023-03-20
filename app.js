'use strict'

import { getDadosEstado } from "./estadoscidades.js"
const mapa = document.querySelector('svg')

const getEstados = async(event) => {
    const estadoClicado = event.target.id.replace('BR-','')
    const estado = await getDadosEstado(estadoClicado)

    console.log(estado);

    document.getElementById('uf').textContent = estado.capital
    document.getElementById('estado').value = estado.estado
    document.getElementById('capital').value = estado.capital
    document.getElementById('regiao').value = estado.regiao


}


mapa.addEventListener('click', getEstados)

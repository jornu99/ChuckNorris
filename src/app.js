import { Categoria, Frase } from './js/clases.js'

const apiURL = 'https://api.chucknorris.io/'
const categoriasURL = 'https://api.chucknorris.io/jokes/categories'
const frasesURL = 'https://api.chucknorris.io/jokes/random'

let generarFrase = document.getElementById('generarFrase')
let fraseGenerada = document.getElementById('fraseGenerada')

let categoria

async function obtenerCategorias() {
    try {
        const response = await fetch(categoriasURL)
        if (!response.ok) {
            throw new Error('No se pudo obtener las categorias')
        }

        const data = await response.json()
        cargarCategorias(data)

        return data
    } catch (e) {
        console.log(e)
    }
}

function cargarCategorias(data) {
    categoria = new Categoria(data)

    tablaCategorias(categoria)
}

function tablaCategorias(categoria) {
    let tablaCategorias = document.getElementById('categorias')
    let tr = ''
    let td = ''
    let a = ''

    for (let i = 0; i < categoria.length; i++) {
        tr = '<tr>'
        a = '<a href="./html/clases.html"></a>'
        td = '<td>' + categoria[i].nombre + '</td>'
        tr += a + td + '</tr>'
    }
    console.log(tr)
    tablaCategorias.innerHTML = tr
}

generarFrase.addEventListener('click', function () {
    localStorage.clear();
    window.location.href = './html/frases.html'
});

obtenerCategorias()

async function obtenerFrases() {
    try {
        const response = await fetch(frasesURL)
        if (!response.ok) {
            throw new Error('No se pudo obtener las frases')
        }

        const data = await response.json()
        cargarFrases(data)

        return data

    } catch (e) {
        console.log(e)
    }
}

function cargarFrases(data) {
    let frase = new Frase(data.value)

    fraseGenerada.textContent = frase.value
}

obtenerFrases()

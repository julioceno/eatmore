const slider = document.querySelector('.slider-categories')

let isDown = false
let startX;
let scrollLeft;


slider.addEventListener('mousedown', element => {
    isDown = true 
    slider.classList.add('active')
    startX = element.pageX - slider.offsetLeft
    scrollLeft = slider.scrollLeft
})

slider.addEventListener('mouseleave', () => {
    isDown = false
    slider.classList.remove('active')

})

slider.addEventListener('mouseup', () => {
    isDown = false
    slider.classList.remove('active')
})

slider.addEventListener('mousemove', element => {
    if (!isDown) return 
    element.preventDefault()
    const x = element.pageX - slider.offsetLeft
    const walk = (x - startX) * 3
    slider.scrollLeft = scrollLeft - walk
})

// alternando imagem no seu momento focus 
const categories = document.querySelectorAll('.slider-categories .categories')

const categorieHamburguer = document.querySelector('.slider-categories .categories') 
const categoriePizza = document.querySelector('.slider-categories .categories:nth-child(2)') 

console.log()

function deselectingCategories() {
    categories.forEach( categorie => {
        categorie.classList.remove('categorie-selected')
    })
    

    categorieHamburguer.children[0].children[0].src = "./public/images/categories/hamburguer.svg"
    categoriePizza.children[0].children[0].src = "./public/images/categories/pizza.svg"

}

categorieHamburguer.addEventListener("click", e => {
    deselectingCategories()

    categorieHamburguer.classList.add('categorie-selected')

    const img = categorieHamburguer.children[0].children[0]
    img.src = "./public/images/categories/hamburguer-focus.svg"

    e.preventDefault()
})

categoriePizza.addEventListener("click", e => {
    deselectingCategories()

    categoriePizza.classList.add('categorie-selected')


    const img = categoriePizza.children[0].children[0]
    img.src = "./public/images/categories/pizza-focus.svg"

    e.preventDefault()
})


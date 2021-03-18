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
const categorieChicken = document.querySelector('.slider-categories .categories:nth-child(3)') 
const categorieFriedPastry = document.querySelector('.slider-categories .categories:nth-child(4)') 
const categorieDrinks = document.querySelector('.slider-categories .categories:nth-child(5)') 
const categorieFruits = document.querySelector('.slider-categories .categories:nth-child(6)') 

function deselectingCategories() {
    categories.forEach( categorie => {
        categorie.classList.remove('categorie-selected')
    })
    

    categorieHamburguer.children[0].children[0].src = "./public/images/categories/hamburguer.svg"
    categoriePizza.children[0].children[0].src = "./public/images/categories/pizza.svg"
    categorieChicken.children[0].children[0].src = "./public/images/categories/chicken.svg"
    categorieFriedPastry.children[0].children[0].src = "./public/images/categories/fried-pastry.svg"
    categorieDrinks.children[0].children[0].src = "./public/images/categories/drinks.svg"
    categorieFruits.children[0].children[0].src = "./public/images/categories/fruits.svg"

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


categorieChicken.addEventListener("click", e => {
    deselectingCategories()

    categorieChicken.classList.add('categorie-selected')


    const img = categorieChicken.children[0].children[0]
    img.src = "./public/images/categories/chicken-focus.svg"

    e.preventDefault()
})


categorieFriedPastry.addEventListener("click", e => {
    deselectingCategories()

    categorieFriedPastry.classList.add('categorie-selected')


    const img = categorieFriedPastry.children[0].children[0]
    img.src = "./public/images/categories/fried-pastry-focus.svg"

    e.preventDefault()
})

categorieDrinks.addEventListener("click", e => {
    deselectingCategories()

    categorieDrinks.classList.add('categorie-selected')


    const img = categorieDrinks.children[0].children[0]
    img.src = "./public/images/categories/drinks-focus.svg"

    e.preventDefault()
})


categorieFruits.addEventListener("click", e => {
    deselectingCategories()

    categorieFruits.classList.add('categorie-selected')

    const img = categorieFruits.children[0].children[0]
    img.src = "./public/images/categories/fruits-focus.svg"

    e.preventDefault()
})

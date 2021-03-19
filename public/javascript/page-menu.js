const sliderCategorie = document.querySelector('.slider-categories')

let isDownCategorie = false
let startXCategorie;
let scrollLeftCategorie;


sliderCategorie.addEventListener('mousedown', element => {
    isDownCategorie = true 
    sliderCategorie.classList.add('active')
    startXCategorie = element.pageX - sliderCategorie.offsetLeft
    scrollLeftCategorie = sliderCategorie.scrollLeft
})

sliderCategorie.addEventListener('mouseleave', () => {
    isDownCategorie = false
    sliderCategorie.classList.remove('active')

})

sliderCategorie.addEventListener('mouseup', () => {
    isDownCategorie = false
    sliderCategorie.classList.remove('active')
})

sliderCategorie.addEventListener('mousemove', element => {
    if (!isDownCategorie) return 
    element.preventDefault()
    const x = element.pageX - sliderCategorie.offsetLeft
    const walk = (x - startXCategorie) * 3
    sliderCategorie.scrollLeft = scrollLeftCategorie - walk
})

// Seleao de categoria
const categories = document.querySelectorAll('.slider-categories .categorie')

const categorieHamburguer = document.querySelector('.slider-categories .categorie') 
const categoriePizza = document.querySelector('.slider-categories .categorie:nth-child(2)') 
const categorieChicken = document.querySelector('.slider-categories .categorie:nth-child(3)') 
const categorieFriedPastry = document.querySelector('.slider-categories .categorie:nth-child(4)') 
const categorieDrinks = document.querySelector('.slider-categories .categorie:nth-child(5)') 
const categorieFruits = document.querySelector('.slider-categories .categorie:nth-child(6)') 

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

// slider food

const sliderFood = document.querySelector('.slider-foods')
let isScroll = true

let isDownFood = false
let startXFood;
let scrollLeftFood;


sliderFood.addEventListener('mousedown', element => {
    isDownFood = true 
    startXFood = element.pageX - sliderFood.offsetLeft
    scrollLeftFood = sliderFood.scrollLeft


})

sliderFood.addEventListener('mouseleave', () => {
    isDownFood = false

})

sliderFood.addEventListener('mouseup', () => {
    isDownFood = false
})

sliderFood.addEventListener('mousemove', element => {
    if (!isDownFood) return 
    element.preventDefault()
    const x = element.pageX - sliderFood.offsetLeft
    const walk = (x - startXFood) * 3
    sliderFood.scrollLeft = scrollLeftFood - walk

    isScroll = true
})

sliderFood.addEventListener('touchmove', element => {
   isScroll = true

})




// render food 



const foodContainer = document.querySelector('.food-category-container .slider-foods')


// ratings

// total stars

document.addEventListener('DOMcontentLoaded', getRatings())

function getRatings() {
    // for(let rating in ratings) {
        
    //     // Get porcentage
    //     const starPercentage = (ratings[rating] / 5) * 100
  
    //     // Round to nearest 10
    //     const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`

    //     // Set width of stars-inner to percentage
    //    console.log( document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded)

    //     console.log(starPercentageRounded)
    // }

 

    // foods.forEach( food => {
    //     const rating = food.
    //     console.log(food)
    // })

}

// location food 

const foods = document.querySelectorAll(".slider-foods .food")

const foodLocationContainer = document.querySelector('.foods-location')
console.log(foodLocationContainer)

foods.forEach( (food, indice) => {
    // gerando bolinha no html
    const createLocation = document.createElement('a')


    foodLocationContainer.appendChild(createLocation)
})

const locationFoodContainer = document.querySelector('.foods-location')
const locationFood = document.querySelectorAll('.foods-location a')


locationFood.forEach( (location, indice) => {
    location.addEventListener('click', foodMarked)
})




function foodMarked(e) {
    e.preventDefault()


    foods.forEach( food => {
        food.classList.remove('food-selected')

    })

    locationFood.forEach( location => {
        location.classList.remove('location-selected')
    })

 

    e.target.classList.add('location-selected')

    let indiceFoodSelected 
    locationFood.forEach( (location, indice) => {
        if(location.classList.contains('location-selected'))  {
            foods[indice].classList.add('food-selected')
            indiceFoodSelected = indice
        }
    })

    const to = foods[indiceFoodSelected].offsetLeft

    sliderFood.scroll({
        left: to,
        behavior: "smooth"
    })
    isScroll = false
}


sliderFood.addEventListener('scroll', markedFoodScroll)


function markedFoodScroll() {
    let windowLeft = sliderFood.scrollLeft + ((window.innerWidth * 2 ) / 8)
   
    if (window.innerWidth >= 800) {
        windowLeft = sliderFood.scrollLeft + ((window.innerWidth * 2 ) / 17)
    }

    if (!isScroll) {
        return 
    }

    // Eu me baseio na comida que está próximo a viewport pra marcar a localização nas bolinhas
    foods.forEach( (food, indice) => {

        if (windowLeft > food.offsetLeft) {

            locationFood.forEach( location => {
                location.classList.remove('location-selected')
            } )
           
            locationFood[indice].classList.add('location-selected')
        } 
    })
}


locationFood[0].click()
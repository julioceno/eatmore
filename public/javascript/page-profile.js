// Seleção de opção de filtragem
const options = document.querySelectorAll('.options-container .option')

const requestHistory = document.querySelector('.line-up-caegories .option') 
const optionFavoriteFoods = document.querySelector('.line-up-caegories .option:nth-child(2)') 

function deselectingCategories() {
    options.forEach( option => {
        option.classList.remove('option-selected')
    })
    
    requestHistory.children[0].children[0].src = "./public/images/plate-and-cutlery.svg"
    optionFavoriteFoods.children[0].children[0].src = "./public/images/star-favorite.svg"
}


requestHistory.addEventListener("click", e => {
    deselectingCategories()

    requestHistory.classList.add('option-selected')

    const img = requestHistory.children[0].children[0]
    img.src = "./public/images/plate-and-cutlery-focus.svg"

    allFoods = [
        {
            categorie: "pizza",

            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Pizza',
            rating: 2,
            value: 15.55
        },

        {
            categorie: "pizza",

            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Pizza catupiri',
            rating: 2,
            value: 15.55
        },


        {
            categorie: "pizza",

            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Pizza catupiri',
            rating: 3,
            value: 15.55
        },

        {
            categorie: "pizza",

            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Pizza',
            rating: 5,
            value: 15.55
        },

        {
            categorie: "pizza",

            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Pizza catupiri',
            rating: 2,
            value: 15.55
        },


        {
            categorie: "pizza",

            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Pizza catupiri',
            rating: 2,
            value: 15.55
        },
       
       
    ]

    updatingFoodsClickingCategory()
    
    e.preventDefault()
})

optionFavoriteFoods.addEventListener("click", e => {
    deselectingCategories()

    optionFavoriteFoods.classList.add('option-selected')

    const img = optionFavoriteFoods.children[0].children[0]
    img.src = "./public/images/star-favorite-focus.svg"

    allFoods = [
        {
            categorie: "pizza",

            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Pizza',
            rating: 2,
            value: 15.55
        },

        
    ]

    updatingFoodsClickingCategory()

    e.preventDefault()
})



// slider food
let sliderFood = document.querySelector('.slider-foods')
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

sliderFood.addEventListener('touchmove', () => {
   isScroll = true

})


function updatingFoodsClickingCategory() {

    // Removendo os alimentos da categoria selecionada anteriormente
    document.querySelectorAll(".slider-foods .food").forEach( (food) => {
        food.remove()
    })

    document.querySelectorAll(".foods-location a").forEach( (location) => {
        location.remove()
    })
        
    // render food 
    const foodContainer = document.querySelector('.filtering-option-container .slider-foods')

    allFoods.forEach( ({ id, categorie, img, name,rating, value}) => {

        // Criando o container 
        const tagA = document.createElement('a')
        // tagA.setAttribute('href', `/menu/food/${categorie}/${id}`)
        tagA.setAttribute('href', `food.html`)
        tagA.classList.add('food')

        // Criando div centering
        const tagDivCentering = document.createElement('div')
        tagDivCentering.classList.add('centering')

        // Criando imagem na div cetering
        const tagImg = document.createElement('img')
        tagImg.src = img

        // Criando footer
        const tagFooter = document.createElement('footer')
        tagFooter.classList.add('footer-food')

        // criando tag h6
        const tagH6 = document.createElement('h6')

        const foodName = document.createTextNode(name)
        tagH6.appendChild(foodName)

        // Criando container das estrlas pra controlar o tamanho
        const tagDivContainerStars = document.createElement('div')



        // Criando div stars-outer 
        const tagDivStarsOuter = document.createElement('div')
        tagDivStarsOuter.classList.add('stars-outer')

        // Criando div stars-inner 
        const tagDivStarsInner = document.createElement('div')
        tagDivStarsInner.classList.add('stars-inner')

        // Criando div span value
        const tagSpanValue = document.createElement('span')
        tagSpanValue.classList.add('value')

        
        const foodValue = document.createTextNode(`R$ ${value.toFixed(2).toString().replace('.', ',')}`)
        tagSpanValue.appendChild(foodValue)


        /* Adicionando os valores das estrelas */

        // Get porcentage
        const starPercentage = (rating / 5) * 100

        // Round to nearest 10
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`

        // Set width of stars-inner to percentage
        tagDivStarsInner.style.width = starPercentageRounded
        
        
        


        /* Adicionando conteudo no food container */

        // Adicionando div centering na tag a
        tagA.appendChild(tagDivCentering)

        // Adicionando img na tag centering 
        tagDivCentering.appendChild(tagImg)

        // Adicionando tag footer 
        tagDivCentering.appendChild(tagFooter) 

        // Adicionando h6 no footer
        tagFooter.appendChild(tagH6)

        // adicionando div de controle das estrelas
        tagFooter.appendChild(tagDivContainerStars)

        
        // Adicionando div stars-outer 
        tagDivContainerStars.appendChild(tagDivStarsOuter)
        
        // Adicionando div stars-inner 
        tagDivStarsOuter.appendChild(tagDivStarsInner)

        // Adicionando span Value
        tagFooter.appendChild(tagSpanValue)



        // Adicionando o elemento  diretamente no html
        foodContainer.appendChild(tagA)
    })


    // location food 
    const foods = document.querySelectorAll(".slider-foods .food")
    const foodLocationContainer = document.querySelector('.foods-location')

    foods.forEach( () => {
        // gerando bolinha no html
        const createLocation = document.createElement('a')


        foodLocationContainer.appendChild(createLocation)
    })

    const locationFood = document.querySelectorAll('.foods-location a')

    locationFood.forEach( location => location.addEventListener('click', foodMarked))
    
    document.querySelectorAll('.foods-location a')[0].click()
}

function foodMarked(e) {
    e.preventDefault()
    const foods = document.querySelectorAll(".slider-foods .food")
    const locationFood = document.querySelectorAll('.foods-location a')

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

    let sliderFood = document.querySelector('.slider-foods')

    sliderFood.scroll({
        left: to,
        behavior: "smooth"
    })

    isScroll = false
}

sliderFood.addEventListener('scroll', markedLocationScroll)


function markedLocationScroll() {

    const foods = document.querySelectorAll(".slider-foods .food")
    const locationFood = document.querySelectorAll('.foods-location a')

    let windowLeft = sliderFood.scrollLeft + ((window.innerWidth * 2 ) / 8)
   
    if (window.innerWidth >= 800) {
        windowLeft = sliderFood.scrollLeft + ((window.innerWidth * 2 ) / 17)
    }

    if (!isScroll) return 

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
requestHistory.click()
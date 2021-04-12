// Colocando a url anterior na arrow come back
const comeBack = document.querySelector('.come-back')
if (document.referrer) {
    comeBack.href = document.referrer
} else {
    comeBack.href = "http://127.0.0.1:5500/menu.html"
}

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



let allFoods
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
  
    updatingFoodsClickingCategoryFiltering("Você ainda não fez nenhum pedido, peça alguma comida que você gosta e seu histórico comecará ficar cheio")
    
    let titleFiltering = document.getElementById('title-filtering')
    titleFiltering.innerHTML = 'O que você já pediu'

    e.preventDefault()
})

optionFavoriteFoods.addEventListener("click", e => {
    deselectingCategories()

    optionFavoriteFoods.classList.add('option-selected')

    const img = optionFavoriteFoods.children[0].children[0]
    img.src = "./public/images/star-favorite-focus.svg"

    allFoods = [

        
    ]

    updatingFoodsClickingCategoryFiltering("Você ainda não tem nenhuma comida favorita, para comidas aparecerem aqui você deve dar uma classifiação de estrelas entre 4 e 5 ")

    // Tem que ser aqui em baixo pois quando eu rodo a função updatingFoodsClickingCategoryFiltering ele vai remover o conteudo do h5
    let titleFiltering = document.getElementById('title-filtering')
    titleFiltering.innerHTML = 'Seus favoritos'

    e.preventDefault()
})

// slider food filtering
let sliderFoodFiltering = document.querySelector('.slider-filtering-foods')
let isScrollFiltering = true

let isDownFoodFiltering = false
let startXFoodFiltering;
let scrollLeftFoodFiltering;

sliderFoodFiltering.addEventListener('mousedown', element => {
    isDownFoodFiltering = true 
    startXFoodFiltering = element.pageX - sliderFoodFiltering.offsetLeft
    scrollLeftFoodFiltering = sliderFoodFiltering.scrollLeft
})

sliderFoodFiltering.addEventListener('mouseleave', () => {
    isDownFoodFiltering = false

})

sliderFoodFiltering.addEventListener('mouseup', () => {
    isDownFoodFiltering = false
})

sliderFoodFiltering.addEventListener('mousemove', element => {
    if (!isDownFoodFiltering) return 
    element.preventDefault()
    const x = element.pageX - sliderFoodFiltering.offsetLeft
    const walk = (x - startXFoodFiltering) * 3
    sliderFoodFiltering.scrollLeft = scrollLeftFoodFiltering - walk

    isScrollInteractions = true
})

sliderFoodFiltering.addEventListener('touchmove', () => {
   isScrollInteractions = true

})
  // if(!allFoods.length) {
    //     sectionResultFoods.innerHTML = `
    //         <div class="without-occurrence">
    //         <h5 id="title-filtering"></h5>

    //         <img src="./public/images/without-occurrence.svg" alt="Carrinho vazio">
    //         <p>${message}</p>
    //         </div>
    //     `
    //     return
    // } else {

    //     sectionResultFoods.innerHTML = `
    //     <div class="filtering-option-container">

    //     <h5 id="title-filtering"></h5>

    //     <div class="slider-filtering-foods"></div>

    //     <div class="foods-filtering-location"></div>

    // </div>
    //     `
    // }

function updatingFoodsClickingCategoryFiltering(message) {

    const sectionResultFoods = document.getElementById('section-result-foods-filtering')
  

    if(!allFoods.length) {

        sectionResultFoods.innerHTML = `
        <div class="without-occurrence">
        <h5 id="title-filtering"></h5>

        <img src="./public/images/without-occurrence.svg" alt="Carrinho vazio">
        <p>${message}</p>
        </div>
        `
        document.querySelector('.filtering-option-container').style.display = "none"
       return
   } else {
    if (document.querySelector('.without-occurrence')) document.querySelector('.without-occurrence').remove()
    document.querySelector('.filtering-option-container').style.display = "flex"
   }

    // Removendo os alimentos da categoria selecionada anteriormente
    document.querySelectorAll(".slider-filtering-foods .food").forEach( (food) => {
        food.remove()
    })

    document.querySelectorAll(".foods-filtering-location a").forEach( (location) => {
        location.remove()
    })
        
    // render food 
    const foodContainer = document.querySelector('.filtering-option-container .slider-filtering-foods')

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
    const foods = document.querySelectorAll(".slider-filtering-foods .food")
    const foodLocationContainer = document.querySelector('.foods-filtering-location')

    foods.forEach( () => {
        // gerando bolinha no html
        const createLocation = document.createElement('a')


        foodLocationContainer.appendChild(createLocation)
    })

    const locationFood = document.querySelectorAll('.foods-filtering-location a')

    locationFood.forEach( location => location.addEventListener('click', foodMarkedFiltering))
    
    document.querySelectorAll('.foods-filtering-location a')[0].click()
}

function foodMarkedFiltering(e) {
    e.preventDefault()
    const foods = document.querySelectorAll(".slider-filtering-foods .food")
    const locationFood = document.querySelectorAll('.foods-filtering-location a')

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

    let sliderFoodFiltering = document.querySelector('.slider-filtering-foods')

    sliderFoodFiltering.scroll({
        left: to,
        behavior: "smooth"
    })

    isScrollInteractions = false
}

sliderFoodFiltering.addEventListener('scroll', markedLocationScrollFoodsFiltering)


function markedLocationScrollFoodsFiltering() {
    const foods = document.querySelectorAll(".slider-filtering-foods .food")
    const locationFood = document.querySelectorAll('.foods-filtering-location a')

    let windowLeft = sliderFoodFiltering.scrollLeft + ((window.innerWidth * 2 ) / 8)
   
    if (window.innerWidth >= 800) {
        windowLeft = sliderFoodFiltering.scrollLeft + ((window.innerWidth * 2 ) / 17)
    }

    if (!isScrollInteractions) return 

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

/*
##################################################################
##################################################################
##################################################################
Tudo daqui pra baixo faz parte do slide de comidas onde o usuário
já interagiu, ele foi apenas copiado e colado e fui ajustando 
algumas coisas, então pode ser que algumas coisas estejam com 
pontas soltas 
##################################################################
##################################################################
##################################################################
*/ 


(function() {

// Slider food interactions
const allFoodsInteractions = [
    // {
    //     categorie: "pizza",

    //     id: 1,
    //     img: './public/images/hamburguer-example.svg' ,
    //     name: 'Pizza',
    //     rating: 2,
    //     text: "sakhd siahdiosa doihsadddddddddddddddddddddddddddddddddddddd",
    //     value: 15.55
    // },

    // {
    //     categorie: "pizza",

    //     id: 1,
    //     img: './public/images/hamburguer-example.svg' ,
    //     name: 'Pizza',
    //     rating: 2,
    //     text: "sahd si,ahdiosa doihsadddddddddddddddddddddddddddddddddddddddoihsadddddddddddddddddddddddddddddddddddddddoihsadddddddddddddddddddddddddddddddddddddddoihsadddddddddddddddddddddddddddddddddddddddoihsadddddddddddddddddddddddddddddddddddddddoihsadddddddddddddddddddddddddddddddddddddddoihsadddddddddddddddddddddddddddddddddddddddoihsadddddddddddddddddddddddddddddddddddddddoihsadddddddddddddddddddddddddddddddddddddddoihsadddddddddddddddddddddddddddddddddddddddoihsadddddddddddddddddddddddddddddddddddddddoihsadddddddddddddddddddddddddddddddddddddddoihsadddddddddddddddddddddddddddddddddddddddoihsadddddddddddddddddddddddddddddddddddddddoihsadddddddddddddddddddddddddddddddddddddddoihsadddddddddddddddddddddddddddddddddddddd",

    //     value: 15.55
    // },

    // {
    //     categorie: "pizza",

    //     id: 1,
    //     img: './public/images/hamburguer-example.svg' ,
    //     name: 'Pizza',
    //     rating: 2,
    //     text: "sakhd siahdiosa doihsa",

    //     value: 15.55
    // },

    // {
    //     categorie: "pizza",

    //     id: 1,
    //     img: './public/images/hamburguer-example.svg' ,
    //     name: 'Pizza',
    //     rating: 2,
    //     text: "sakhd siahdiosa doihsa",

    //     value: 15.55
    // },

    // {
    //     categorie: "pizza",

    //     id: 1,
    //     img: './public/images/hamburguer-example.svg' ,
    //     name: 'Pizza',
    //     rating: 2,
    //     text: "sakhd siahdiosa doihsa",

    //     value: 15.55
    // },

    // {
    //     categorie: "pizza",

    //     id: 1,
    //     img: './public/images/hamburguer-example.svg' ,
    //     name: 'Pizza',
    //     rating: 5,
    //     text: "sakhd siahdiosa doihsa",

    //     value: 15.55
    // },

    // {
    //     categorie: "pizza",

    //     id: 1,
    //     img: './public/images/hamburguer-example.svg' ,
    //     name: 'Pizza',
    //     rating: 2,
    //     text: "sakhd siahdiosa doihsa",

    //     value: 15.55
    // },

    // {
    //     categorie: "pizza",

    //     id: 1,
    //     img: './public/images/hamburguer-example.svg' ,
    //     name: 'Pizza',
    //     rating: 2,
    //     text: "sakhd siahdiosa doihsa",

    //     value: 15.55
    // },

    {
        categorie: "pizza",

        id: 1,
        img: './public/images/hamburguer-example.svg' ,
        name: 'Pizza',
        rating: 2,
        text: "sakhd siahdiosa doihsa",

        value: 15.55
    },

    {
        categorie: "pizza",

        id: 1,
        img: './public/images/hamburguer-example.svg' ,
        name: 'Pizza',
        rating: 2,
        text: "sakhd siahdiosa doihsadddddddddddddddddddddddddddddddddddddd",

        value: 15.55
    },
]


if(!allFoodsInteractions.length) {
     document.querySelector('.without-occurrence').style.display = "flex"
        document.querySelector('.interactions-container').style.display = "none"
    return
} else {
    document.querySelector('.without-occurrence').style.display = "none"
    document.querySelector('.interactions-container').style.display = "flex"
}

let sliderFoodInteractions = document.querySelector('.slider-foods-intetactions')
let isScrollInteractions = true

let isDownFoodInteractions = false
let startXFoodInteractions;
let scrollLeftFoodInteractions;

sliderFoodInteractions.addEventListener('mousedown', element => {
isDownFoodInteractions = true 
startXFoodInteractions = element.pageX - sliderFoodInteractions.offsetLeft
scrollLeftFoodInteractions = sliderFoodInteractions.scrollLeft
})

sliderFoodInteractions.addEventListener('mouseleave', () => {
isDownFoodInteractions = false

})

sliderFoodInteractions.addEventListener('mouseup', () => {
isDownFoodInteractions = false
})

sliderFoodInteractions.addEventListener('mousemove', element => {
if (!isDownFoodInteractions) return 
element.preventDefault()
const x = element.pageX - sliderFoodInteractions.offsetLeft
const walk = (x - startXFoodInteractions) * 3
sliderFoodInteractions.scrollLeft = scrollLeftFoodInteractions - walk

isScrollInteractions = true
})

sliderFoodInteractions.addEventListener('touchmove', () => {
isScrollInteractions = true

})

// Removendo os alimentos da categoria selecionada anteriormente
document.querySelectorAll(".slider-filtering-foods .food").forEach( (food) => {
    food.remove()
})

document.querySelectorAll(".foods-filtering-location a").forEach( (location) => {
    location.remove()
})
    
// render food 
const foodContainer = document.querySelector('.interactions-container .slider-foods-intetactions')

allFoodsInteractions.forEach( ({ id, categorie, img, name, rating, text}) => {


    // Criando o container 
    const tagA = document.createElement('a')
    // tagA.setAttribute('href', `/menu/food/${categorie}/${id}`)
    tagA.setAttribute('href', `food.html`)
    tagA.classList.add('food')

    // Criando div centering
    const tagDivCentering = document.createElement('div')
    tagDivCentering.classList.add('centering')

    // criando div de alinhamento
    const tagDivLineUpDataFoodInteraction = document.createElement('div')
    tagDivLineUpDataFoodInteraction.classList.add('line-up-data-food-interaction')

    // criando div de alinhamento que estão a esquerda
    const tagDivAlingLeft = document.createElement('div')
    tagDivAlingLeft.classList.add('aling-left')


    // criando tag img 
    const tagImg = document.createElement('img')
    tagImg.src = img 
    tagImg.alt = `Imagem da comida` 


    // Criando tag h6
    const tagH6 = document.createElement('h6')

    const foodName = document.createTextNode(name)
    tagH6.appendChild(foodName)

    // Criando div container star
    const tagDivContainerStar = document.createElement('div')

    // Criando div stars-outer
    const tagDivStarsOuter = document.createElement('div')
    tagDivStarsOuter.classList.add('stars-outer')

    // Criando div stars-inner
    const tagDivStarsInner = document.createElement('div')
    tagDivStarsInner.classList.add('stars-inner')

    // Ajustando o container das estrelas
   

    // Criando div user-comment 
    const tagPUserComment = document.createElement('p')
    tagPUserComment.classList.add('user-comment')
  

    let formatedText = text

   
    if (text.split('').length > 23 && window.innerWidth < 1000) {
        formatedText = text.split('')
        formatedText.splice(23, formatedText.length - 23)
        
        formatedText = `${formatedText.join('')}...`
    } else if (text.split('').length > 28) {
        formatedText = text.split('')
        formatedText.splice(28, formatedText.length - 28)

        formatedText = `${formatedText.join('')}...`
    }

    const tagPUserCommentText = document.createTextNode(formatedText)
    tagPUserComment.appendChild(tagPUserCommentText)


    /* Adicionando os valores das estrelas */

    // Get porcentage
    const starPercentage = (rating / 5) * 100

    // Round to nearest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`

    // Set width of stars-inner to percentage
    tagDivStarsInner.style.width = starPercentageRounded

   

    // Adicionando imagem do lanche no tagDivLineUpDataFoodInteraction
    tagDivLineUpDataFoodInteraction.appendChild(tagImg)

    // Adicionando div aling left no tagDivLineUpDataFoodInteraction
    tagDivLineUpDataFoodInteraction.appendChild(tagDivAlingLeft)

    // Adicionando nome do lanche no tagDivAlingLeft 
    tagDivAlingLeft.appendChild(tagH6)

    // Adicionando estrelas no tagDivAlingLeft 
    tagDivStarsOuter.appendChild(tagDivStarsInner)
    tagDivContainerStar.appendChild(tagDivStarsOuter)
    tagDivAlingLeft.appendChild(tagDivContainerStar)

    // Adicionando tagDivLineUpDataFoodInteraction no tagDivCentering
    tagDivCentering.appendChild(tagDivLineUpDataFoodInteraction)

    // Adicionando tagPUserComment no tagDivCentering
    tagDivCentering.appendChild(tagPUserComment)

    // Adicionando tagDivCentering na tagA
    tagA.appendChild(tagDivCentering)

    // Adicionando o elemento  diretamente no html
    foodContainer.appendChild(tagA)


//     <a href="food.html" class="food">
//     <div class="centering">
       
//        <div class="line-up-data-food-interaction">
//             <img src="./public/images/hamburguer-example.svg">
//             <div class="aling-left">
                
//                 <h6>Pizza catupirisssssssss s</h6>
//                 <div>
//                     <div class="stars-outer">
//                         <div class="stars-inner"></div>
//                     </div>
//                 </div>

//             </div>
//        </div>

//        <p class="user-comment">Bla bla BLA BLA bla bla bla bla bla </p>
        
//     </div>
// </a>


    
})


// location food 
const foods = document.querySelectorAll(".slider-foods-intetactions .food")
const foodLocationContainer = document.querySelector('.foods-intetactions-location')

foods.forEach( () => {
    // gerando bolinha no html
    const createLocation = document.createElement('a')
    foodLocationContainer.appendChild(createLocation)
})

const locationFood = document.querySelectorAll('.foods-intetactions-location a')

locationFood.forEach( location => location.addEventListener('click', foodMarkedInteractions))

document.querySelectorAll('.foods-intetactions-location a')[0].click()

function foodMarkedInteractions(e) {
e.preventDefault()
const foods = document.querySelectorAll(".slider-foods-intetactions .food")
const locationFood = document.querySelectorAll('.foods-intetactions-location a')

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

let sliderFoodInteractions = document.querySelector('.slider-foods-intetactions')

sliderFoodInteractions.scroll({
    left: to,
    behavior: "smooth"
})

isScrollInteractions = false

}

sliderFoodInteractions.addEventListener('scroll', markedLocationScrollFoodsInteractions)

function markedLocationScrollFoodsInteractions() {
const foods = document.querySelectorAll(".slider-foods-intetactions .food")
const locationFood = document.querySelectorAll('.foods-intetactions-location a')

let windowLeft = sliderFoodInteractions.scrollLeft + ((window.innerWidth * 2 ) / 8)

if (window.innerWidth >= 800) {
    windowLeft = sliderFoodInteractions.scrollLeft + ((window.innerWidth * 2 ) / 17)
}

if (!isScrollInteractions) return 

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

// Clicando na categoria request history pra dados serem apresentados na tela
})()

requestHistory.click()

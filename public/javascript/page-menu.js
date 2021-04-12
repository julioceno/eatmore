const searchWrapper = document.querySelector(".search-container")
const inputBox = document.querySelector('.search-bar')
const suggBox = document.querySelector('.autocom-box')

inputBox.addEventListener("keyup", letter => {

    const suggestions = [
        {
            categorie: "hamburguer",
            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Pastel',
            rating: 2,
            value: 15.55
        },

        {
            categorie: "hamburguer",

            id: 2,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Zinger burguer',
            rating: 2,
            value: 15.55
        },

        {
            categorie: "hamburguer",

            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'frutas',
            rating: 2,
            value: 15.55
        },

        {
            categorie: "hamburguer",

            id: 2,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Zinger burguerrr',
            rating: 0,
            value: 15.55
        },

        {
            categorie: "hamburguer",

            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'carré',
            rating: 1,
            value: 15.55
        },

        {
            categorie: "hamburguer",

            id: 2,
            img: './public/images/hamburguer-example.svg' ,
            name: 'chocolate',
            rating: 2,
            value: 15.55
        },

        {
            categorie: "hamburguer",

            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Zinger burguer',
            rating: 5,
            value: 15.55
        },

        {
            categorie: "hamburguer",

            id: 2,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Zinger burguer',
            rating: 2,
            value: 15.55
        },

        {
            categorie: "hamburguer",

            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'bananaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            rating: 3,
            value: 15.55
        },

        {
            categorie: "hamburguer",

            id: 2,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Zinger burguer',
            rating: 3,
            value: 15.55
        },

        {
            categorie: "hamburguer",

            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Zinger burguer',
            rating: 5,
            value: 15.55
        },

        {
            categorie: "hamburguer",

            id: 4,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Zinger burguer',
            rating: 2,
            value: 15.55
        },
    ]

    let userData = letter.target.value
    let emptyArray = []

    if (userData) {
        emptyArray = suggestions.filter( data => {
            return data.name.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase())
        })

        emptyArray = emptyArray.map( data => {
            return data = `<li onclick="selectSugg(this)">   <input type="hidden" value= "${data.id}-${data.categorie}"> <img src="${data.img}" alt="Imagem ${data.name}"> <p> ${data.name} </p> </li>`
        })

        searchWrapper.classList.add('active')
    } else {
        searchWrapper.classList.remove('active')

    }
    // console.log(emptyArray)
    showSuggestions(emptyArray)
})

function selectSugg(element) {
    const id = (element.children[0].value).split('-')[0]
    const categorie = (element.children[0].value).split('-')[1]

    window.location.href = `/menu/food/${categorie}/${id}`
}

function showSuggestions(list) {
    let listData;

    if (!list.length) {

        let userValue = inputBox.value;

        // listData = `<li>> <img src="${userValue.img}" alt="Imagem ${userValue.name}"> <p> ${userValue.name} </p> </li>`
        listData = `<li> ${userValue} </li>`
    } else {
        listData = list.join('')
    }

    suggBox.innerHTML = listData
}



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
const categoriecandy = document.querySelector('.slider-categories .categorie:nth-child(7)') 

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
    categoriecandy.children[0].children[0].src = "./public/images/categories/candy.svg"

}

let allFoods 

categorieHamburguer.addEventListener("click", e => {
    deselectingCategories()

    categorieHamburguer.classList.add('categorie-selected')

    const img = categorieHamburguer.children[0].children[0]
    img.src = "./public/images/categories/hamburguer-focus.svg"


    allFoods = [
        {
            categorie: "hamburguer",

            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Zinger burguer',
            rating: 2,
            value: 15.55
        },

        {
            categorie: "hamburguer",

            id: 2,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Zinger burguer',
            rating: 2,
            value: 15.55
        },

        {
            categorie: "hamburguer",

            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Zinger burguer',
            rating: 2,
            value: 15.55
        },

        {
            categorie: "hamburguer",

            id: 2,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Zinger burguerrr',
            rating: 0,
            value: 15.55
        },

        {
            categorie: "hamburguer",

            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Zinger burguer',
            rating: 1,
            value: 15.55
        },

        {
            categorie: "hamburguer",

            id: 2,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Zinger burguer',
            rating: 2,
            value: 15.55
        },

        {
            categorie: "hamburguer",

            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Zinger burguer',
            rating: 5,
            value: 15.55
        },

        {
            categorie: "hamburguer",

            id: 2,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Zinger burguer',
            rating: 2,
            value: 15.55
        },

        {
            categorie: "hamburguer",

            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Zinger burguer',
            rating: 3,
            value: 15.55
        },

        {
            categorie: "hamburguer",

            id: 2,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Zinger burguer',
            rating: 3,
            value: 15.55
        },

        {
            categorie: "hamburguer",

            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Zinger burguer',
            rating: 5,
            value: 15.55
        },

        {
            categorie: "hamburguer",

            id: 4,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Zinger burguer',
            rating: 2,
            value: 15.55
        },
    ]

    updatingFoodsClickingCategory()
    let titleCatergoryFood = document.getElementById('title-category-food')
    if(titleCatergoryFood) titleCatergoryFood.innerHTML = 'Hambúrguers'

    e.preventDefault()
})


categoriePizza.addEventListener("click", e => {
    deselectingCategories()

    categoriePizza.classList.add('categorie-selected')


    const img = categoriePizza.children[0].children[0]
    img.src = "./public/images/categories/pizza-focus.svg"

    allFoods = [
    
       
    ]

    updatingFoodsClickingCategory()
    let titleCatergoryFood = document.getElementById('title-category-food')
    if(titleCatergoryFood) titleCatergoryFood.innerHTML = 'Pizzas'
    

    e.preventDefault()
})


categorieChicken.addEventListener("click", e => {
    deselectingCategories()

    categorieChicken.classList.add('categorie-selected')


    const img = categorieChicken.children[0].children[0]
    img.src = "./public/images/categories/chicken-focus.svg"


    allFoods = [
        {
            categorie: "chicken",

            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Franguin',
            rating: 4,
            value: 20.55
        },
       
    ]

    updatingFoodsClickingCategory()
    let titleCatergoryFood = document.getElementById('title-category-food')
    if(titleCatergoryFood)  titleCatergoryFood.innerHTML = 'Frangos'

    e.preventDefault()
})


categorieFriedPastry.addEventListener("click", e => {
    deselectingCategories()

    categorieFriedPastry.classList.add('categorie-selected')


    const img = categorieFriedPastry.children[0].children[0]
    img.src = "./public/images/categories/fried-pastry-focus.svg"

    allFoods = [
        {
            categorie: "friedpastry",

            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Pastel do china',
            rating: 5,
            value: 10.00
        },
       
    ]

    updatingFoodsClickingCategory()
    let titleCatergoryFood = document.getElementById('title-category-food')
    if(titleCatergoryFood)  titleCatergoryFood.innerHTML = 'Pastéis'
    e.preventDefault()
})

categorieDrinks.addEventListener("click", e => {
    deselectingCategories()

    categorieDrinks.classList.add('categorie-selected')


    const img = categorieDrinks.children[0].children[0]
    img.src = "./public/images/categories/drinks-focus.svg"

    allFoods = [
        {
            categorie: "drink",
            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Cocain',
            rating: 5,
            value: 5.00
        },

        {
            categorie: "drink",
            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'refri',
            rating: 4.5,
            value: 5.00
        },
       
    ]

    updatingFoodsClickingCategory()
    let titleCatergoryFood = document.getElementById('title-category-food')
    if(titleCatergoryFood) titleCatergoryFood.innerHTML = 'Bebidas'

    e.preventDefault()
})


categorieFruits.addEventListener("click", e => {
    deselectingCategories()

    categorieFruits.classList.add('categorie-selected')

    const img = categorieFruits.children[0].children[0]
    img.src = "./public/images/categories/fruits-focus.svg"

    allFoods = [
        {
            categorie: "fruit",
            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Salada de frutas',
            rating: 3,
            value: 8.50
        },

        
       
    ]

    updatingFoodsClickingCategory()
    let titleCatergoryFood = document.getElementById('title-category-food')
    if(titleCatergoryFood)  titleCatergoryFood.innerHTML = 'Frutas'

    e.preventDefault()
})

categoriecandy.addEventListener("click", e => {
    deselectingCategories()

    categoriecandy.classList.add('categorie-selected')

    const img = categoriecandy.children[0].children[0]
    img.src = "./public/images/categories/candy-focus.svg"

    allFoods = [
       
    ]

    updatingFoodsClickingCategory()
    let titleCatergoryFood = document.getElementById('title-category-food')
    if(titleCatergoryFood) titleCatergoryFood.innerHTML = 'Doces'

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


    const sectionResultFoods = document.getElementById('section-result-foods')
    if(!allFoods.length) {
        sectionResultFoods.innerHTML = `
            <div class="without-occurrence">
            <img src="./public/images/empty-cart.svg" alt="Carrinho vazio">
            <p>Até o momento não temos nada desta categoria, deixe suas sugestões nas nossas redes sociais ou se preferir vá até a área de feedback e deixe sua sugestão</p>
            </div>
        `
        return
    } else {
        sectionResultFoods.innerHTML = `
        <div class="food-category-container">

        <h5 id="title-category-food"></h5>

        <div class="slider-foods"></div>

        <div class="foods-location"></div>

    </div>
        `
    }

    // Removendo os alimentos da categoria selecionada anteriormente
    document.querySelectorAll(".slider-foods .food").forEach( (food) => {
        food.remove()
    })

    document.querySelectorAll(".foods-location a").forEach( (location) => {
        location.remove()
    })
        
    // render food 
    const foodContainer = document.querySelector('.food-category-container .slider-foods')

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


// click automatico na categoria pra ser apresentado os alimentos
categorieHamburguer.click()

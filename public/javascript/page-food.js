const idFood = 1

const imageMain = document.querySelector('.food main img')
const foodName = document.querySelector('.food main div h4')
const starRating = document.querySelector('.food main div .stars-outer .stars-inner')
const foodsButtonsContainer = document.querySelector('.images')
const foodsButtonsImgs = document.querySelectorAll('.images button img')
const foodValue = document.querySelector('.food footer span')

const allFoods = [
    {
        caregorie: 'hamburguer',
        id: 1,
        imgs: [
            './public/images/hamburguer-example.svg',
            './public/images/food-plate.svg',
            './public/images/hamburguer-example.svg',
            './public/images/food-plate.svg',
        ] ,
        name: 'hamburguer',
        rating: 2,
        value: 8.50,

    },

    {
        caregorie: 'hamburguer',
        id: 2,
        img: './public/images/hamburguer-example.svg' ,
        name: 'Pastel2',
        rating: 3,
        value: 10.00
    },

    {
        caregorie: 'hamburguer',
        id: 3,
        img: './public/images/hamburguer-example.svg' ,
        name: 'Salada de frutas3',
        rating: 3,
        value: 5.50
    },

    {
        caregorie: 'hamburguer',
        id: 4,
        img: './public/images/hamburguer-example.svg' ,
        name: 'Salada de frutas4',
        rating: 3,
        value: 5.50
    },

    {
        caregorie: 'hamburguer',
        id: 5,
        img: './public/images/hamburguer-example.svg' ,
        name: 'Salada de frutas5',
        rating: 3,
        value: 5.50
    },
]

allFoods.forEach( food => {
    if ( food.id === idFood ) {
        const imgs = food.imgs
        imageMain.src = imgs[0]
        foodName.innerHTML = food.name

        /* Adicionando os valores das estrelas */

        // Get porcentage
        const starPercentage = (food.rating / 5) * 100

        // Round to nearest 10
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`

        // Set width of stars-inner to percentage
        starRating.style.width = starPercentageRounded


        imgs.forEach( (img, indice) => {
            const elementButton = document.createElement('button')

            const elementImg = document.createElement('img')
            elementImg.src = img
            elementImg.alt = `Imagem ${indice + 1}`


            elementButton.appendChild(elementImg)
            foodsButtonsContainer.appendChild(elementButton)
        })

        foodValue.innerHTML = `R$ ${food.value.toFixed(2).toString().replace('.', ',')}`

    }
})

const foodsButtons = document.querySelectorAll('.images button')



foodsButtons.forEach( button => {
    
    button.addEventListener('click', event => {
        const currentImage = event.currentTarget
        const src = event.target.src

        foodsButtons.forEach( button => {
            button.classList.remove('active')
        })

        currentImage.classList.add('active')

        imageMain.src = src
    })
})

function addFoodList() {
    const id = 1



    let idNewFood
    allFoods.forEach( (food, indice) => {
        if (food.id === id) idNewFood = food
    })


    // Se o id que vier da url não for encontrado na lista de alimentos eu não vou 
    // prosseguir com a execução da função
    if (!idNewFood) return


    // Se o localstorage chosenFoods ainda não existir vamos criar ele
    if (!localStorage.chosenFoods) {
        localStorage.chosenFoods = JSON.stringify([ { id, amount: 1} ])
        calculatingValueTotal()
        generateNewFoods()
        return
    }
    const chosenFoods = JSON.parse(localStorage.chosenFoods)


    // Aqui eu verifico se a comida que ele está escolhendo está no carrinho de compras
    let foodAlreadyExsts
    chosenFoods.forEach( food => {
        if (food.id === id)  foodAlreadyExsts = true
    })



    let amountOfChosenFoodsUpdated 
    if (foodAlreadyExsts) {
        amountOfChosenFoodsUpdated = chosenFoods.map( (food, indice) => {
            if (food.id === id) {
                const newAmount = food.amount + 1
                food.amount = newAmount
            }

            return food
        })
    } else {
        amountOfChosenFoodsUpdated = chosenFoods.map( (food, indice) => {
            if (food.id === id) {
                const newAmount = food.amount + 1
                food.amount = newAmount
            }

            return food
        })

        amountOfChosenFoodsUpdated.push({
            id, 
            amount: 1
        })

    }


    localStorage.chosenFoods = JSON.stringify(amountOfChosenFoodsUpdated)


    // criando animação de adicionar ao carrinho
    const popUpFoodAdded = document.querySelector('.pop-up-food-added')

    popUpFoodAdded.classList.remove('animate-food-added-appear')
    popUpFoodAdded.classList.add('animate-food-added-appear')

    
    setTimeout( () => popUpFoodAdded.classList.remove('animate-food-added-appear'), 780) 
    
    calculatingValueTotal()
    generateNewFoods()
}

// avaliação

const userData = {

    avaliation: {
        rating: 4,
        // text: 'Eu acho muito dahora e pa tlgd? e assim vai o role'
        }
    }
 
const avaliationContainer = document.querySelector('.your-evaluation-container')

if (userData.avaliation.rating && userData.avaliation.text) {

    const html= `<h3>Veja a avaliação que você deixou</h3>
          
    <form action="" method="POST" onsubmit="validate(event)" enctype="multipart/form-data"> <!-- Ficar ligado -->
       <div>
            <div class="stars-outer">
                <div class="stars-inner"></div>
            </div>
        </div>


        <p class="comment">
            ${userData.avaliation.text}
        </p>

        <input type="submit" value="Deletar avaliação">

    </form>`

    avaliationContainer.innerHTML = html

    /* Adicionando os valores das estrelas */

    // Get porcentage
    const starPercentage = (userData.avaliation.rating / 5) * 100

    // Round to nearest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`

    // Set width of stars-inner to percentage
    document.querySelector('.stars-inner').style.width = starPercentageRounded
} else {
    const html= `<h3>O que acha de <strong> avaliar </strong> este prato?</h3>
          
    <form action="" method="POST" onsubmit="validate(event)" enctype="multipart/form-data"> <!-- Ficar ligado -->
        <div class="stars-container">
            <div>

                <input type="radio" name="rate" id="star-5">
                <label for="star-5" class="fas fa-star"></label>

                <input type="radio" name="rate" id="star-4">
                <label for="star-4" class="fas fa-star"></label>

                <input type="radio" name="rate" id="star-3">
                <label for="star-3" class="fas fa-star"></label>

                <input type="radio" name="rate" id="star-2">
                <label for="star-2" class="fas fa-star"></label>

                <input type="radio" name="rate" id="star-1" checked>
                <label for="star-1" class="fas fa-star"></label>
            </div>
        </div>

        <textarea name="" id="textarea" rows="1" required></textarea>
        <input type="submit" value="Postar avaliação">

    </form>`

    avaliationContainer.innerHTML = html

    const textarea = document.getElementById('textarea')

    textarea.addEventListener('input', (event) => {
        const currentElement = event.currentTarget

        currentElement.style.height = 'inherit'
        const height = currentElement.scrollHeight
        currentElement.style.height = height + "px"
    })
}

// Gerando comentários 
const evalueationContainer = document.querySelector('.other-reviews .line-up-grid-reviews')

const evaluations = [
    {
        profile: "./public/images/profile.jpg",
        name: "Maria Lúcia",
        rating: 5,
        date: "02/02/2021",
        text: "Ótimo lanche, vou pedir de novo!",
    },

    {
        profile: "./public/images/profile.jpg",
        name: "Sidoka",
        rating: 1.5,
        date: "01/02/2021",
        text: "saopkdop dipsamoip dopsamndo osamndosa doipsanodp",
    },

    {
        profile: "./public/images/profile.jpg",
        name: "Gulio",
        rating: 3,
        date: "05/01/2021",
        text: "saopkdop dipsamoip dopsamndo osamndosa doipsanodp",
    },

]

evaluations.forEach( ({profile, name, rating, date, text}) => {

//     <div class="evaluation-container">

//     <header>
//         <img src="./public/images/doka.png" alt="">
//         <h6>Sidoka</h6>
//     </header>

//     <main>
        
//         <div class="line-up-star-rating-and-date">
//             <div>
//                 <div class="stars-outer">
//                     <div class="stars-inner"></div>
//                 </div>
//             </div>

//             <span>12/02/2021</span>
//         </div>

//        <p class="user-comment">
//         saopkdop dipsamoip dopsamndo osamndosa doipsanodp
       
//        </p> 
        
//     </main>
// </div>


    const elementDivContainer = document.createElement('div')
    elementDivContainer.classList.add('evaluation-container')

    const elementHeader = document.createElement('header')
    const elementImg = document.createElement('img')
    elementImg.src = profile
    elementImg.alt = `foto de perfil do ${name}`


    const elementh6 = document.createElement('h6')    
    const elementh6Text = document.createTextNode(name)    
    elementh6.appendChild(elementh6Text)

    const elementMain = document.createElement('main')
    const elementDivLineUpStarRatingAndDate = document.createElement('div')
    elementDivLineUpStarRatingAndDate.classList.add('line-up-star-rating-and-date')

    const elementDivStarContainer = document.createElement('div')

    const elementDivStarOuther = document.createElement('div')
    elementDivStarOuther.classList.add('stars-outer')


    const elementDivStarInner = document.createElement('div')
    elementDivStarInner.classList.add('stars-inner')

     /* Adicionando os valores das estrelas */

        // Get porcentage
        const starPercentage = (rating / 5) * 100

        // Round to nearest 10
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`

        // Set width of stars-inner to percentage
        elementDivStarInner.style.width = starPercentageRounded


    const elementDivSpan = document.createElement('span')
    const elementDivSpanText = document.createTextNode(date)
    elementDivSpan.appendChild(elementDivSpanText)

    const elementPComment = document.createElement('p')
    elementPComment.classList.add('user-comment')

    const elementPCommentText = document.createTextNode(text)
    elementPComment.appendChild(elementPCommentText)


    elementHeader.appendChild(elementImg)
    elementHeader.appendChild(elementh6)
    elementDivContainer.appendChild(elementHeader)

    elementDivStarOuther.appendChild(elementDivStarInner)
    elementDivStarContainer.appendChild(elementDivStarOuther)
    elementDivLineUpStarRatingAndDate.appendChild(elementDivStarContainer)
    elementDivLineUpStarRatingAndDate.appendChild(elementDivSpan)

    elementMain.appendChild(elementDivLineUpStarRatingAndDate)
    elementMain.appendChild(elementPComment)

    elementDivContainer.appendChild(elementMain)


    evalueationContainer.appendChild(elementDivContainer)
})
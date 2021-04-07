const foodsButtons = document.querySelectorAll('.images button')
const imageMain = document.querySelector('.food main img')

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
    const id = 2


    const allFoods = [
        {
            caregorie: 'hamburguer',
            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'hamburguer',
            rating: 3,
            value: 8.50
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
 
const avaliationContainer = document.querySelector('.avaliation-container')

if (userData.avaliation.rating && userData.avaliation.text) {

    const html= `<h3>Veja a avaliação que você deixou</h3>
          
    <form action="" method="POST" onsubmit="validate(event)" enctype="multipart/form-data"> <!-- Ficar ligado -->
       <div>
            <div class="stars-outer">
                <div class="stars-inner"></div>
            </div>
        </div>


        <div class="comment">
            ${userData.avaliation.text}
        </div>

        <input type="submit" value="Deletar avaliação">

    </form>`

    avaliationContainer.innerHTML = html
} else {
    const html= `<h3>O que acha de <strong>avaliar</strong> este prato?</h3>
          
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
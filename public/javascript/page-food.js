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
    const id = 5


    const allFoods = [
        {
            caregorie: 'hamburguer',
            id: 1,
            img: './public/images/hamburguer-example.svg' ,
            name: 'Hamburgyu1',
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

    console.log(chosenFoods)

    localStorage.chosenFoods = JSON.stringify(amountOfChosenFoodsUpdated)


    // criando animação de adicionar ao carrinho
    const popUpFoodAdded = document.querySelector('.pop-up-food-added')


    popUpFoodAdded.classList.add('animate-food-added-appear')

    
    setTimeout( () => popUpFoodAdded.classList.remove('animate-food-added-appear'), 500) 
}


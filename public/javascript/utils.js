const sideMenu = document.querySelector('.menu-options')
const checkbox = document.getElementById('check')

function appearMenu() {
    if (!checkbox.checked) {
        sideMenu.classList.add('appear-menu-options')
        
    } else {

       sideMenu.animate([
           {transform: 'translateX(-300px)'}
       ], {
            duration: 300,
       }
    
       )
       setTimeout(() =>{
        sideMenu.classList.remove('appear-menu-options')
        
    }, 300)
    }
}


const purchasingCar = document.querySelector('.purchasing-car')




/*
#####################################################################
================ ESSA PARTE DEVERÁ SER REMOVIDA =====================
#####################################################################
*/
const foodsSelectedsTest = [
    {
        id: 1,
        amount: 3
    },

    {
        id: 2,
        amount: 4
    },

    {
        id: 3,
        amount: 1
    }    
]

localStorage.chosenFoods = JSON.stringify(foodsSelectedsTest)

/*
#####################################################################
================ ATÉ AQUI ==========================================
#####################################################################
*/

// Gerando alimentos no carrinho através do JS

const containerChosenFoods = document.querySelector('.chosenFoods')
const chosenFoods = JSON.parse(localStorage.chosenFoods)

chosenFoods.forEach( ({ id, amount }) => {
    const allFoods = [
            {
                caregorie: 'hamburguer',
                id: 1,
                img: './public/images/hamburguer-example.svg' ,
                name: 'Hamburgyu',
                rating: 3,
                value: 8.50
            },

            {
                caregorie: 'hamburguer',
                id: 2,
                img: './public/images/hamburguer-example.svg' ,
                name: 'Salada de frutas',
                rating: 3,
                value: 8.50
            },

            {
                caregorie: 'hamburguer',
                id: 3,
                img: './public/images/hamburguer-example.svg' ,
                name: 'Salada de frutas',
                rating: 3,
                value: 8.50
            },
            
    ]


    allFoods.forEach( food => {

        if (food.id === id) {
           
            const tagDivFood = document.createElement('div')
            tagDivFood.classList.add('food')

            const inputHidden = document.createElement('input')
            inputHidden.setAttribute('type', 'hidden')
            inputHidden.setAttribute('name', 'id')
            inputHidden.setAttribute('value', id)
        
            const tagMain = document.createElement('main')
        
            const tagImg = document.createElement('img')
            tagImg.src = food.img
    
    
            const tagH6 = document.createElement('h6')
            const textNameFood = document.createTextNode(food.name)
            tagH6.appendChild(textNameFood)
    
            const tagDivAmountThisFood = document.createElement('div')
            tagDivAmountThisFood.classList.add('amount-this-food')
    
            const tagButtonLeft = document.createElement('button')
    
            const tagImgArrowLeft = document.createElement('img')
            tagImgArrowLeft.src= "./public/images/amount-arrow-left.svg"
    
            const tagDivAmount = document.createElement('div')
            const textAmountFood = document.createTextNode(amount)
            tagDivAmount.appendChild(textAmountFood)
    
            const tagButtonRight = document.createElement('button')
    
            const tagImgArrowRight = document.createElement('img')
            tagImgArrowRight.src= "./public/images/amount-arrow-right.svg"
    
            tagDivFood.appendChild(inputHidden)

            tagDivFood.appendChild(tagMain)
            tagMain.appendChild(tagImg)
            tagMain.appendChild(tagH6)
    
    
            tagButtonLeft.appendChild(tagImgArrowLeft)
            tagDivAmountThisFood.appendChild(tagButtonLeft)
    
            tagDivAmountThisFood.appendChild(tagDivAmount)
    
            tagButtonRight.appendChild(tagImgArrowRight)
            tagDivAmountThisFood.appendChild(tagButtonRight)
    
            tagDivFood.appendChild(tagDivAmountThisFood)

            containerChosenFoods.appendChild(tagDivFood)
        }

        
    })



})

// Botões de aumentar e diminuir a  quantidade de alimentos do carrinho

// Diminuir

const buttonsDecreaseAmount = document.querySelectorAll('.chosenFoods .amount-this-food button:nth-child(1)')

buttonsDecreaseAmount.forEach( button => {
    button.addEventListener('click', button => {
        const containerParent = button.currentTarget.parentNode.parentNode 
        const div = button.currentTarget.parentNode.children[1]
        const id = Number(button.currentTarget.parentNode.parentNode.children[0].value)

        const chosenFoods = JSON.parse(localStorage.chosenFoods)

        localStorage.removeItem(chosenFoods)

       const amountOfChosenFoodsUpdated = chosenFoods.map( (food, indice) => {
            if (food.id === id) {
                const newAmount = food.amount - 1

                // Removendo elemento se a quantidade da comida chegar em 0
                if (newAmount === 0) {
                    containerParent.remove()
                    chosenFoods.splice(indice, 1)
                }


                food.amount = newAmount
                div.innerHTML = newAmount
            }

            console.log(food)


            if (food.amount !== 0) return food

            
        })



        localStorage.chosenFoods = JSON.stringify(amountOfChosenFoodsUpdated)


    })
})

const buttonsIncreaseAmount = document.querySelectorAll('.chosenFoods .amount-this-food button:nth-child(3)')

buttonsIncreaseAmount.forEach( button => {
    button.addEventListener('click', button => {
        const div = button.currentTarget.parentNode.children[1]
        const id = Number(button.currentTarget.parentNode.parentNode.children[0].value)

        const chosenFoods = JSON.parse(localStorage.chosenFoods)

       const amountOfChosenFoodsUpdated = chosenFoods.map( (food, indice) => {
            if (food.id === id) {
                const newAmount = food.amount + 1

                food.amount = newAmount

                div.innerHTML = newAmount
            }

            return food
        })


        localStorage.chosenFoods = JSON.stringify(amountOfChosenFoodsUpdated)
    })
})



function appearPurchasingCar() {

    
    
    purchasingCar.classList.add('appear-purchasing-car')
}


function disappearPurchasingCar() {


    purchasingCar.animate([
        {transform: 'translateY(600px)'}
    ], {
         duration: 350,
    }
 
    )
    setTimeout(() =>{
    purchasingCar.classList.remove('appear-purchasing-car')
     
 }, 350)
}

 


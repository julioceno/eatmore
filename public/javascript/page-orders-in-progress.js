const buttonsShowMore = document.querySelectorAll('.button-show-more')

buttonsShowMore.forEach( button => {
    button.addEventListener('click', showMore)    
})

const chosenFoods = [
    {
        id: 2,
        amount: 5
    },
    {
        id: 2,
        amount: 5
    },
    {
        id: 2,
        amount: 5
    },
    {
        id: 2,
        amount: 5
    },
    {
        id: 2,
        amount: 5
    }
]

const checkboxShowMore = document.getElementById('checkbox-show-more')
function showMore(event) {
    const requestContainer = event.currentTarget.parentNode
    const containerChosenFoods = event.currentTarget.parentNode.children[1].children[0]


    if (!checkboxShowMore.checked) {
        requestContainer.classList.add('selected')
        event.currentTarget.innerHTML = "Mostrar menos"
        requestContainer.classList.add('animate-request-show-more')
        requestContainer.classList.remove('animate-request-show-less')
        
        
        const allChosenFoods = document.querySelectorAll('.chosen-foods-the-order .order-food')
        allChosenFoods.forEach( food => food.remove() )


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
                        name: 'Pastel',
                        rating: 3,
                        value: 10.00
                    },
        
                    {
                        caregorie: 'hamburguer',
                        id: 3,
                        img: './public/images/hamburguer-example.svg' ,
                        name: 'Salada de frutas',
                        rating: 3,
                        value: 5.50
                    },

                    {
                        caregorie: 'hamburguer',
                        id: 4,
                        img: './public/images/hamburguer-example.svg' ,
                        name: '444',
                        rating: 3,
                        value: 5.50
                    },

                    {
                        caregorie: 'hamburguer',
                        id: 5,
                        img: './public/images/hamburguer-example.svg' ,
                        name: '555',
                        rating: 3,
                        value: 5.50
                    },
                    
            ]
        
            allFoods.forEach( food => {
                if (food.id === id) {
                
                    const tagDivFood = document.createElement('div')
                    tagDivFood.classList.add('order-food')
        
                    
                
                    const tagMain = document.createElement('main')
                
                    const tagImg = document.createElement('img')
                    tagImg.src = food.img
            
            
                    const tagH6 = document.createElement('h6')
                    const textNameFood = document.createTextNode(food.name)
                    tagH6.appendChild(textNameFood)
            
                
            
                
                    const tagDivAmount = document.createElement('div')
                    tagDivAmount.classList.add('amount')
                    const textAmountFood = document.createTextNode(amount)
                    tagDivAmount.appendChild(textAmountFood)
        
            
                    tagDivFood.appendChild(tagMain)
                    tagMain.appendChild(tagImg)
                    tagMain.appendChild(tagH6)
            
            
                    tagDivFood.appendChild(tagDivAmount)
        
                    containerChosenFoods.appendChild(tagDivFood)
                }
                
            })

        })
    
    } else {
        requestContainer.classList.remove('selected')
    
        requestContainer.classList.remove('animate-request-show-more')
        requestContainer.classList.add('animate-request-show-less')

        

        event.currentTarget.innerHTML = "Mostrar mais"
    }
}

const startingMinutes = 10 
let time = startingMinutes * 60

const countDown = document.getElementById('countDown')
setInterval(updateCountDown, 1000) 

function updateCountDown() {
    const minutes = Math.floor( time / 60)
    let seconds = time % 60

    seconds = seconds < 10 ? '0' + seconds : seconds

    countDown.innerHTML = `${minutes}:${seconds}`
    time--
}
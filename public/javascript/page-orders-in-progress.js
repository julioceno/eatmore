const buttonsShowMore = document.querySelectorAll('.button-show-more')

buttonsShowMore.forEach( button => {
    button.addEventListener('click', showMore)    
})


const checkboxShowMore = document.getElementById('checkbox-show-more')
function showMore(event) {
    const requestContainer = event.currentTarget.parentNode
    const containerChosenFoods = event.currentTarget.parentNode.children[1].children[0]

        requestContainer.classList.add('selected')
        event.currentTarget.value = "Mostrar menos"
        event.currentTarget.removeAttribute("onclick")
        event.currentTarget.setAttribute("onclick", "showLess(event)")
       
        requestContainer.classList.add('animate-request-show-more')
        requestContainer.classList.remove('animate-request-show-less')
}

function showLess(event) {
    const requestContainer = event.currentTarget.parentNode
    const containerChosenFoods = event.currentTarget.parentNode.children[1].children[0]

    requestContainer.classList.remove('selected')
    event.currentTarget.value = "Mostrar mais"

    event.currentTarget.removeAttribute("onclick")
    event.currentTarget.setAttribute("onclick", "showMore(event)")
    
    requestContainer.classList.remove('animate-request-show-more')
    requestContainer.classList.add('animate-request-show-less')
    
    event.currentTarget.innerHTML = "Mostrar mais"
} 



// 2021-04-15 13:34:07 UTC
// const forms = document.querySelectorAll('.form')
// forms.forEach( form => {
//     const containerDate = form.children[1].children[1].children[1]
//     const date = form.children[1].children[1].children[0].value

//     const realDate = convertDate(date)
//     containerDate.innerHTML = realDate
// })


// renderizando data atual 
function convertDate(date) {
    let realDate = new Date(date)

    let day = realDate.getDate()
    if (day < 10) day = `0${day}`

    let month = realDate.getMonth()
    if (month < 10) month = `0${month}`
  
    let year = realDate.getFullYear()

    let hours = realDate.getHours()
    if (hours < 10) hours = `0${hours}` 

    let minutes = realDate.getMinutes()
    if (minutes < 10) minutes = `0${minutes}`
  
    return `Perdido feito as ${hours}:${minutes} dia ${day}/${month}/${year}`
}


const requests = [
    {
        id: 1,
        recipient: "Sidoka",
        telephone: "(33)94827838",
        payment: "Não concluido",
        value: 20.35,
        withdrawal: "Entrega",
        address: "Rua das oliveiras em tal lugar da alfandega",
        orderTime: "2021-04-15 14:31:22 UTC",
        chosenFoods: [
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
    },

    {
        id: 2,
        recipient: "Sidoka",
        telephone: "(33)94827838",
        payment: "Concluido",
        value: 90.15,
        withdrawal: "Entrega",
        address: "Rua das oliveiras em tal lugar da alfandega",
        orderTime: "2021-04-15 14:31:22 UTC",
        chosenFoods: [
            {
                id: 2,
                amount: 10
            },
            {
                id: 2,
                amount: 5
            },
            {
                id: 3,
                amount: 3
            },
            {
                id: 2,
                amount: 9
            },
            {
                id: 1,
                amount: 5
            }
        ]
    }
]
      
const containerRequests = document.querySelector('.orders-in-progress')
requests.forEach( ({recipient, telephone, payment, value, withdrawal, address, orderTime, chosenFoods}) => {
    
    const divRequest = document.createElement('div')
    divRequest.classList.add('request')

    const divOrderData = document.createElement('div')
    divOrderData.classList.add('order-data')

    const pOrderDataRecipient = document.createElement('p')
    const pOrderDataRecipientValue = document.createTextNode(`Destinatário: ${recipient}`)
    pOrderDataRecipient.appendChild(pOrderDataRecipientValue)

    const pOrderDataTelephone = document.createElement('p')
    const pOrderDataTelephoneValue = document.createTextNode(`Contato: ${telephone}`)
    pOrderDataTelephone.appendChild(pOrderDataTelephoneValue)


    const pOrderDataPayment = document.createElement('p')
    const pOrderDataPaymentValue = document.createTextNode(`Pagamento: ${payment}`)
    pOrderDataPayment.appendChild(pOrderDataPaymentValue)

    const pOrderDataTotalPayable = document.createElement('p')
    const pOrderDataTotalPayableValue = document.createTextNode(`Valor: R$ ${value.toFixed(2).toString().replace('.', ',')}`)
    pOrderDataTotalPayable.appendChild(pOrderDataTotalPayableValue)


    const pOrderDataWithdrawal = document.createElement('p')
    const pOrderDataWithdrawalValue = document.createTextNode(`Retirada: ${withdrawal}`)
    pOrderDataWithdrawal.appendChild(pOrderDataWithdrawalValue)


    const pOrderDataAddress = document.createElement('p')
    const pOrderDataAddressValue = document.createTextNode(`Endereço: ${address}`)
    pOrderDataAddress.appendChild(pOrderDataAddressValue)


    const pOrderDataOrderTime = document.createElement('p')
    const pOrderDataOrderTimeValue = document.createTextNode(convertDate(orderTime))
    pOrderDataOrderTime.appendChild(pOrderDataOrderTimeValue)
    
    const divMoreOrderData = document.createElement('div')
    divMoreOrderData.classList.add('more-order-data')
    
    const divChosenFoodsTheOrder = document.createElement('div')
    divChosenFoodsTheOrder.classList.add('chosen-foods-the-order')

    const buttonCancelRequest = document.createElement('button')
    buttonCancelRequest.setAttribute("type", "submit")
    buttonCancelRequest.classList.add('button-cancel')
    
    const divTimeContainer = document.createElement('div')
    divTimeContainer.classList.add('time-container')

    const imgClock = document.createElement('img')
    imgClock.setAttribute('src', "./public/images/time.svg")
    imgClock.setAttribute('alt', "Relógio")

    const PCountDown = document.createElement('p')
    PCountDown.classList.add('countDown')

    const hrLine = document.createElement('hr')

    const PButtonCancel = document.createElement('p')
    const PButtonCancelValue = document.createTextNode('cancelar')
    PButtonCancel.appendChild(PButtonCancelValue)

    const inputCheckbox = document.createElement('input')
    inputCheckbox.setAttribute('type', "button")
    inputCheckbox.setAttribute('value', "Mostrar mais")
    inputCheckbox.setAttribute('onclick', "showMore(event)")

    // Criando encadeamento de tags html

    divOrderData.appendChild(pOrderDataRecipient)
    divOrderData.appendChild(pOrderDataTelephone)
    divOrderData.appendChild(pOrderDataPayment)
    divOrderData.appendChild(pOrderDataTotalPayable)
    divOrderData.appendChild(pOrderDataWithdrawal)
    divOrderData.appendChild(pOrderDataAddress)
    divOrderData.appendChild(pOrderDataOrderTime)

    divRequest.appendChild(divOrderData)  
    
    
    divMoreOrderData.appendChild(divChosenFoodsTheOrder)
    
    // Gerando alimentos escolhidos
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
    
                divChosenFoodsTheOrder.appendChild(tagDivFood)
            }
            
        })

    })
    
    divTimeContainer.appendChild(imgClock) 
    divTimeContainer.appendChild(PCountDown) 
    divTimeContainer.appendChild(hrLine) 

    buttonCancelRequest.appendChild(divTimeContainer) 
    buttonCancelRequest.appendChild(PButtonCancel) 
    
    divMoreOrderData.appendChild(buttonCancelRequest)    
    
    divRequest.appendChild(divMoreOrderData)    
    
    divRequest.appendChild(inputCheckbox)

    console.log(divRequest)

    containerRequests.appendChild(divRequest)
})


const startingMinutes = 10 
let time = startingMinutes * 60

const countDowns = document.querySelectorAll('.countDown')
console.log(countDowns)

countDowns.forEach( containerCountDown => {

    setInterval(updateCountDown, 1000) 

    function updateCountDown() {
        const minutes = Math.floor( time / 60)
        let seconds = time % 60

        seconds = seconds < 10 ? '0' + seconds : seconds

        containerCountDown.innerHTML = `${minutes}:${seconds}`
        time--
    }

}) 

// setInterval(updateCountDown, 1000) 

// function updateCountDown() {
//     const minutes = Math.floor( time / 60)
//     let seconds = time % 60

//     seconds = seconds < 10 ? '0' + seconds : seconds

//     countDown.innerHTML = `${minutes}:${seconds}`
//     time--
// }

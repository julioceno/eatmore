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

function appearPurchasingCar() {
    purchasingCar.classList.add('appear-purchasing-car')
}


function disappearPurchasingCar() {
    purchasingCar.classList.remove('appear-purchasing-car')
}
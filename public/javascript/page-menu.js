const sideMenu = document.querySelector('.menu-options')
const checkbox = document.getElementById('check')

function appearMenu() {
    

    if (!checkbox.checked) {
        sideMenu.classList.add('appear-menu-options')
        
    } else {

       sideMenu.animate([
           {transform: 'translateX(-200px)'}
       ], {
            duration: 250,
       }
    
       )
       setTimeout(() =>{
        sideMenu.classList.remove('appear-menu-options')
        
    }, 250)
    }
}

setTimeout(() =>{
    console.log('ola')
    
}, 100)

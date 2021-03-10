const sideMenu = document.querySelector('.menu-options')
const checkbox = document.getElementById('check')

function appearMenu() {
    

    if (!checkbox.checked) {
        sideMenu.classList.add('appear-menu-options')
        
    } else {
        sideMenu.classList.remove('appear-menu-options')
    }
}
const slider = document.querySelector('.slider-categories')

let isDown = false
let startX;
let scrollLeft;


slider.addEventListener('mousedown', element => {
    isDown = true 
    slider.classList.add('active')
    startX = element.pageX - slider.offsetLeft
    scrollLeft = slider.scrollLeft

    console.log(startX)
})

slider.addEventListener('mouseleave', () => {
    isDown = false
    slider.classList.remove('active')

})

slider.addEventListener('mouseup', () => {
    isDown = false
    slider.classList.remove('active')
})

slider.addEventListener('mousemove', element => {
    if (!isDown) return 
    element.preventDefault()
    const x = element.pageX - slider.offsetLeft
    const walk = (x - startX) * 3
    slider.scrollLeft = scrollLeft - walk
})
const checkbox = document.getElementById('check')
const section = document.getElementById('section')

checkbox.addEventListener('click', () => verifyOption() )

function verifyOption() {
  
    if (!checkbox.checked) {

        fetch("./options/login.html")
            .then(resp => resp.text())
            .then(html => section.innerHTML = html)

    } else {
        fetch("./options/register-se.html")
        .then(resp => resp.text())
        .then(html => section.innerHTML = html)
    }
}

verifyOption()

function showPassword(event) {
    const input = event.currentTarget.parentNode.children[0]
    const button = event.currentTarget
    console.log()
    
    
    if (input.type === "password") {
        input.type = "text"
        button.style.backgroundImage = " url(./public/images/eye-hidden-password.svg)"
       
    } else {
        input.type = "password"
        button.style.backgroundImage = " url(./public/images/eye-show-password.svg)"

    }
}


function validateRegister (event) {
    const messageValidadePassword = document.getElementById('message-validade-password')
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirm-password').value

    if (password !== confirmPassword) {
        event.preventDefault()
        messageValidadePassword.style.display = "block"
    } else {
        messageValidadePassword.style.display = "none"
    }

}
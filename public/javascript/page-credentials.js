const checkbox = document.getElementById('check')
const section = document.getElementById('section')

checkbox.addEventListener('click', () => verify() )

function verify() {
  
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

verify()
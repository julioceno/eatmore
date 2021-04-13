// Colocando a url anterior na arrow come back
const comeBack = document.querySelector('.come-back');
if (document.referrer) {
    comeBack.href = document.referrer;
} else {
    comeBack.href = "http://127.0.0.1:5500/menu.html";
};



// Editando foto de perfil

let sendForm = false 
const userData = {
    userName: "sidoka",
    img: "./public/images/doka.png",
    telephoneNumber: "(22) 938379463",
    address: "Rua dos dokas, próximo ao ddddddddddddddddddddddddddddbairro do dj Onga número 21 LT 72 QD 92"
}

function editProfileImg(event) {
    const containerParent = event.currentTarget.parentNode.parentNode
    const inputContainer = event.currentTarget.parentNode
    containerParent.classList.add('active')

    inputContainer.innerHTML = `
    <input type="file" name="" id="input-image">
    <label for="input-image">Escolher imagem</label>

    <div class="buttons"> 
        <input  type="button" class="button-edit" id="finish-edit-image" value="Concluir">
        <input  type="button" class="button-detele" id="finish-delete-image" value="Excluir">
    </div>
    `

    const finishEditImage = document.getElementById('finish-edit-image')

    finishEditImage.addEventListener('click', (event) => {
    
        const inputImage = document.getElementById('input-image');

        if (inputImage.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(inputImage.files[0]);
          
            reader.onload = function () {
            inputContainer.innerHTML = `
            <img src="${reader.result}" alt="">
    
            <input onclick="editProfileImg(event)" id="edit-profile-img" type="button" value="Editar" class="button-edit">
            `

            };

            sendForm = true
        } else {
            inputContainer.innerHTML = `
            <img src="${userData.img}" alt="">
    
            <input onclick="editProfileImg(event)" id="edit-profile-img" type="button" value="Editar" class="button-edit">
            `
            
            sendForm = false
            
        }

        containerParent.classList.remove('active')

        validateSendFormUserData()
    })

    const finishDeleteImage = document.getElementById('finish-delete-image')

    finishDeleteImage.addEventListener('click', () => {
        inputContainer.innerHTML = `
        <img src="./public/images/user-profile.png" alt="">

        <input onclick="editProfileImg(event)" id="edit-profile-img" type="button" value="Editar" class="button-edit">
        ` 

        containerParent.classList.remove('active')

    })


}

// Editando nome de usuário
function editName(event) {
    const containerParent = event.currentTarget.parentNode.parentNode
    const inputContainer = event.currentTarget.parentNode
    containerParent.classList.add('active')

    inputContainer.innerHTML = `
    <input type="text" id="input-nick-name" >

    <input  type="button" class="button-edit" id="finish-edit-name" value="Concluir">
    `

    const finishEditName = document.getElementById('finish-edit-name')

    finishEditName.addEventListener('click', () => {
        const inputNickNameValue = document.getElementById('input-nick-name').value

        if (inputNickNameValue) {
            inputContainer.innerHTML = `
            <p>${inputNickNameValue}</p>

            <input onclick="editName(event)" type="button" value="Editar" class="button-edit">
            `

        } else {
            inputContainer.innerHTML = `
            <p>${userData.userName}</p>

            <input onclick="editName(event)" type="button" value="Editar" class="button-edit">
            `
        }

        containerParent.classList.remove('active')
    })
}

// Editando telefone de usuário
function editTelephoneNumber(event) {
    const containerParent = event.currentTarget.parentNode.parentNode
    const inputContainer = event.currentTarget.parentNode
    containerParent.classList.add('active')

    
    inputContainer.innerHTML = `
    <input type="text" id="input-telephone-number" >

    <div class="buttons"> 
        <input  type="button" class="button-edit" id="finish-edit-telephone-number" value="Concluir">
        <input  type="button" class="button-detele" id="finish-delete-telephone-number" value="Excluir">
    </div>
    `

    const inputTelephoneNumber = document.getElementById('input-telephone-number')
    const regExp = /\(?\d{2}\)?\s?9\s?\d{4}-?\s?\d{4}$/

    inputTelephoneNumber.addEventListener('input', () => {
        const inputTelephoneNumberValue = document.getElementById('input-telephone-number').value

        const result = regExp.test(inputTelephoneNumberValue)

    })


    const finishEditTelephoneNumber = document.getElementById('finish-edit-telephone-number')



    finishEditTelephoneNumber.addEventListener('click', () => {
        const inputTelephoneNumberValue = document.getElementById('input-telephone-number').value

        if (inputTelephoneNumberValue) {
            inputContainer.innerHTML = `
            <p>${inputTelephoneNumberValue}</p>

            <input onclick="editTelephoneNumber(event)" type="button" value="Editar" class="button-edit">
            
            `

        } else {
            inputContainer.innerHTML = `
            <p>${userData.telephoneNumber}</p>

            <input onclick="editTelephoneNumber(event)" type="button" value="Editar" class="button-edit">
            `
        }

        containerParent.classList.remove('active')
    })


    const finishDeleteTelephoneNumber = document.getElementById('finish-delete-telephone-number')

    finishDeleteTelephoneNumber.addEventListener('click', () => {
        inputContainer.innerHTML = `
        <p></p>

        <input onclick="editTelephoneNumber(event)" type="button" value="Editar" class="button-edit">
        
        `

        containerParent.classList.remove('active')
    })
}

// Editando endereço do usuário
function editUserAddress(event) {
    const containerParent = event.currentTarget.parentNode.parentNode
    const inputContainer = event.currentTarget.parentNode
    containerParent.classList.add('active')

    inputContainer.innerHTML = `
    <input type="text" id="input-user-address" >

    <div class="buttons"> 
        <input  type="button" class="button-edit" id="finish-edit-user-address" value="Concluir">
        <input  type="button" class="button-detele" id="finish-delete-user-address" value="Excluir">
    </div>
    `
    const finishEditUserAddress = document.getElementById('finish-edit-user-address')

    finishEditUserAddress.addEventListener('click', () => {
        const inputUserAddress = document.getElementById('input-user-address').value

        if (inputUserAddress) {
            inputContainer.innerHTML = `
            <p>${inputUserAddress}</p>

            <input onclick="editUserAddress(event)" type="button" value="Editar" class="button-edit">
            `

        } else {
            inputContainer.innerHTML = `
            <p>${userData.address}</p>

            <input onclick="editUserAddress(event)" type="button" value="Editar" class="button-edit">
            `
        }

        containerParent.classList.remove('active')
    })


    const finishDeleteUserAddress = document.getElementById('finish-delete-user-address')

    finishDeleteUserAddress.addEventListener('click', () => {
        inputContainer.innerHTML = `
        <p></p>

        <input onclick="editUserAddress(event)" type="button" value="Editar" class="button-edit">
        `
    
        containerParent.classList.remove('active')
    })
}


function validateSendFormUserData() {

    if (sendForm) {
        console.log( document.getElementById('submit-send-form-user-data'))
        document.getElementById('submit-send-form-user-data').classList.add('ready')
    } else {
        document.getElementById('submit-send-form-user-data').classList.remove('ready')
    }
}
// Colocando a url anterior na arrow come back
const comeBack = document.querySelector('.come-back');
if (document.referrer) {
    comeBack.href = document.referrer;
} else {
    comeBack.href = "http://127.0.0.1:5500/menu.html";
};



// Editando foto de perfil

const userData = {
    img: "./public/images/doka.png",
    userName: "sidoka",
    telephoneNumber: "(22) 938379463",
    address: "Rua dos dokas, próximo ao ddddddddddddddddddddddddddddbairro do dj Onga número 21 LT 72 QD 92"
};

const userCredentials = {
    email: "sidoka@sidoka.com.br",
    password: "sidoka123"
};

// Renderizando os dados atuais do usuário nos campos
(function() {
    document.getElementById('img-profile').src = userData.img
    document.getElementById('img-profile').alt = `Foto de ${userData.userName}`
    document.getElementById('user-name').innerHTML =  userData.userName
    document.getElementById('user-telephone').innerHTML = userData.telephoneNumber
    document.getElementById('user-address').innerHTML = userData.address
})()

const newUserData = {
    img: false,
    name: false,
    img: false,
    telephoneNumber: false,
    address: false
};

function editProfileImg(event) {
    const containerParent = event.currentTarget.parentNode.parentNode;
    const inputContainer = event.currentTarget.parentNode;
    containerParent.classList.add('active');

    inputContainer.innerHTML = `
    <input type="file" name="" id="input-image">
    <label for="input-image">Escolher imagem</label>

    <div class="buttons"> 
        <input  type="button" class="button-edit" id="finish-edit-image" value="Concluir">
        <input  type="button" class="button-detele" id="finish-delete-image" value="Excluir">
    </div>
    `;

    const finishEditImage = document.getElementById('finish-edit-image');

    finishEditImage.addEventListener('click', (event) => {
    
        const inputImage = document.getElementById('input-image');

        if (inputImage.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(inputImage.files[0]);
          
            reader.onload = function () {
                inputContainer.innerHTML = `
                <img src="${reader.result}" alt="">
        
                <input onclick="editProfileImg(event)" id="edit-profile-img" type="button" value="Editar" class="button-edit">
                `;
                validateSendFormUserData(reader.result);
            };

        } else {
            inputContainer.innerHTML = `
            <img src="${userData.img}" alt="">
    
            <input onclick="editProfileImg(event)" id="edit-profile-img" type="button" value="Editar" class="button-edit">
            `
            newUserData.img = false
            validateSendFormUserData()
        };

        containerParent.classList.remove('active');

    });

    const finishDeleteImage = document.getElementById('finish-delete-image');

    finishDeleteImage.addEventListener('click', () => {
        inputContainer.innerHTML = `
        <img src="./public/images/user-profile.png" alt="">

        <input onclick="editProfileImg(event)" id="edit-profile-img" type="button" value="Editar" class="button-edit">
        ` ;

        containerParent.classList.remove('active');
        newUserData.img = userData.img ;
        validateSendFormUserData();
    });


};

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
            newUserData.name = inputNickNameValue
        } else {
            inputContainer.innerHTML = `
            <p>${userData.userName}</p>

            <input onclick="editName(event)" type="button" value="Editar" class="button-edit">
            `

            newUserData.name = false
        }

        containerParent.classList.remove('active')
        validateSendFormUserData()
    })
};

// Editando telefone de usuário
function editTelephoneNumber(event) {
    const containerParent = event.currentTarget.parentNode.parentNode;
    const inputContainer = event.currentTarget.parentNode;
    containerParent.classList.add('active');

    
    inputContainer.innerHTML = `
    <input type="text" maxlength="14" id="input-telephone-number" >

    <div class="buttons"> 
        <input  type="button" class="button-edit" id="finish-edit-telephone-number" value="Concluir">
        <input  type="button" class="button-detele" id="finish-delete-telephone-number" value="Excluir">
    </div>
    `;


    const finishEditTelephoneNumber = document.getElementById('finish-edit-telephone-number')



    finishEditTelephoneNumber.addEventListener('click', () => {
        const inputTelephoneNumberValue = document.getElementById('input-telephone-number').value

        if (inputTelephoneNumberValue) {
            inputContainer.innerHTML = `
            <p>${inputTelephoneNumberValue}</p>

            <input onclick="editTelephoneNumber(event)" type="button" value="Editar" class="button-edit">
            
            `

            newUserData.telephoneNumber = inputTelephoneNumberValue

            validateSendFormUserData()
        } else {
            inputContainer.innerHTML = `
            <p>${userData.telephoneNumber}</p>

            <input onclick="editTelephoneNumber(event)" type="button" value="Editar" class="button-edit">
            `

            newUserData.telephoneNumber = false
            validateSendFormUserData()
        };

        containerParent.classList.remove('active')
    });


    const finishDeleteTelephoneNumber = document.getElementById('finish-delete-telephone-number')

    finishDeleteTelephoneNumber.addEventListener('click', () => {
        inputContainer.innerHTML = `
        <p></p>

        <input onclick="editTelephoneNumber(event)" type="button" value="Editar" class="button-edit">
        
        `

        containerParent.classList.remove('active')
        
        newUserData.telephoneNumber = "empty"
        validateSendFormUserData()
    });
};

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
        const inputUserAddressValue = document.getElementById('input-user-address').value

        if (inputUserAddressValue) {
            inputContainer.innerHTML = `
            <p>${inputUserAddressValue}</p>

            <input onclick="editUserAddress(event)" type="button" value="Editar" class="button-edit">
            `
            newUserData.address = inputUserAddressValue
            validateSendFormUserData()

        } else {
            inputContainer.innerHTML = `
            <p>${userData.address}</p>

            <input onclick="editUserAddress(event)" type="button" value="Editar" class="button-edit">
            `

            newUserData.address = false
            validateSendFormUserData()
        }

        containerParent.classList.remove('active')
    })


    const finishDeleteUserAddress = document.getElementById('finish-delete-user-address')

    finishDeleteUserAddress.addEventListener('click', () => {
        inputContainer.innerHTML = `
        <p></p>

        <input onclick="editUserAddress(event)" type="button" value="Editar" class="button-edit">
        `

        newUserData.address = "empty"
        validateSendFormUserData()
    
        containerParent.classList.remove('active')
    })
};

// validando envio de formulario de dados do usuario
function validateSendFormUserData(srcImage) {
    if (srcImage) newUserData.img = srcImage

    let canSend;
    for(let i in newUserData) {
        if (newUserData[i]) canSend = true
    };

    if (canSend) {
        document.getElementById('submit-send-form-user-data').classList.add('ready')
    } else {
        document.getElementById('submit-send-form-user-data').classList.remove('ready')
    };
};

// enviando formulario de dados de usuário para o backend 
function sendFormUserDataBackend(event) {
    const url = "";

    console.log(JSON.stringify(newUserData));

    const options = {
        method: "POST",
        body: JSON.stringify(newUserData)
    };

    fetch(url, options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err));
};


// =================================
// Daqui pra baixo é validações do formulario dos dados de segurança

const newUserCredentials = {
    email:false,
    password: false
};

// Editando email do usuário
function editEmail(event) {
    const containerParent = event.currentTarget.parentNode.parentNode
    const inputContainer = event.currentTarget.parentNode
    containerParent.classList.add('active')

    inputContainer.innerHTML = `
    <input type="text" id="input-email" >

    <input  type="button" class="button-edit" id="finish-edit-email" value="Concluir">
    `

    const finishEmail = document.getElementById('finish-edit-email')

    finishEmail.addEventListener('click', () => {
        const inputEmailValue = document.getElementById('input-email').value

        if (inputEmailValue) {
            inputContainer.innerHTML = `
            <p>${inputEmailValue}</p>

            <input onclick="editEmail(event)" type="button" value="Editar" class="button-edit">
            `
            if( inputEmailValue== "" || inputEmailValue.indexOf('@')==-1 || inputEmailValue.indexOf('.')==-1 ) {
                newUserCredentials.email = false
          } else {
            newUserCredentials.email = inputEmailValue
          }

        } else {
            inputContainer.innerHTML = `
            <p>${userCredentials.email}</p>

            <input onclick="editEmail(event)" type="button" value="Editar" class="button-edit">
            `

            newUserCredentials.email = false
        }

        containerParent.classList.remove('active')
        validateSendFormSafetyData()
    })
};


function updatePassword(event) {
    const containerParent = event.currentTarget.parentNode.parentNode
    const inputConfirmPassword = document.querySelector('.password-confirm-field')


    if (event.currentTarget.value.length !== 0) {
        inputConfirmPassword.classList.add('show-password-confirm-field')
    } else {

        document.querySelector('.password-confirm-field .line-up-user-data input').value = ""
        inputConfirmPassword.classList.remove('show-password-confirm-field')

        newUserCredentials.password = false
     }
}


const inputNewPassword = document.getElementById('input-new-password')

inputNewPassword.addEventListener('focus', () => {
    const containerParent =document.getElementById('container-input-new-password')
    containerParent.classList.add('active')
})

inputNewPassword.addEventListener('focusout', () => {
    const containerParent =document.getElementById('container-input-new-password')
    containerParent.classList.remove('active')
})

const inputConfirmNewPassword = document.getElementById('input-confirm-new-password')

inputConfirmNewPassword.addEventListener('focus', () => {
    const containerParent =document.getElementById('container-input-confirm-new-password')
    containerParent.classList.add('active')
})

inputConfirmNewPassword.addEventListener('focusout', () => {
    const containerParent =document.getElementById('container-input-confirm-new-password')
    containerParent.classList.remove('active')
})

inputConfirmNewPassword.addEventListener('input', () => {

    if(inputNewPassword.value === inputConfirmNewPassword.value) {
        newUserCredentials.password = inputNewPassword.value
    } else {
        newUserCredentials.password = false
    }

    validateSendFormSafetyData()
})


const inputCurrentPassword = document.getElementById('input-current-password')

inputCurrentPassword.addEventListener('focus', () => {
    const containerParent =document.getElementById('container-input-corfirm-password')
    containerParent.classList.add('active')
})

inputCurrentPassword.addEventListener('focusout', () => {
    const containerParent =document.getElementById('container-input-corfirm-password')
    containerParent.classList.remove('active')
})

let currentPasswordIsTrue;
inputCurrentPassword.addEventListener('input', () => {

    if(userCredentials.password === inputCurrentPassword.value) {
        currentPasswordIsTrue = true
    } else {
        currentPasswordIsTrue = false
    }

    validateSendFormSafetyData()
})

function validateSendFormSafetyData() {
    let canSend;

    for(let i in newUserCredentials) {
        if (newUserCredentials[i] && currentPasswordIsTrue) canSend = true
    };

    if (canSend) {
        document.getElementById('submit-send-form-safety-data').classList.add('ready')
    } else {
        document.getElementById('submit-send-form-safety-data').classList.remove('ready')
    };
};

// enviando formulario de dados de usuário para o backend 
function sendFormSafetyDataBackend(event) {
    const url = "/rota";
    alert('ola')

    const options = {
        method: "POST",
        body: JSON.stringify(newUserCredentials)
    };

    fetch(url, options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err));
};

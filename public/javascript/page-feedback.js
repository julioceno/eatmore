
// avaliação

const userData = {

    avaliation: {
        rating: 2.4,
        text: 'Eu acho muito dahora e pa tlgd? e assim vai o role'
        }
}
 
const avaliationContainer = document.querySelector('.your-evaluation-container')

if (userData.avaliation.rating && userData.avaliation.text) {

    const html= `<h3>Veja a avaliação que você deixou</h3>
          
    <form action="" method="POST" onsubmit="validate(event)" enctype="multipart/form-data"> <!-- Ficar ligado -->
       <div>
            <div class="stars-outer">
                <div class="stars-inner"></div>
            </div>
        </div>


        <p class="comment">
            ${userData.avaliation.text}
        </p>

        <input type="submit" value="Deletar avaliação">

    </form>`



    avaliationContainer.innerHTML = html

    
    /* Adicionando os valores das estrelas */

    // Get porcentage
    const starPercentage = (userData.avaliation.rating / 5) * 100

    // Round to nearest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`

    // Set width of stars-inner to percentage
    document.querySelector('.stars-inner').style.width = starPercentageRounded
} else {
    const html= `<h3>Chegou na hora de você avaliar o nosso atendimento</h3>
          
    <form action="" method="POST" onsubmit="validate(event)" enctype="multipart/form-data"> <!-- Ficar ligado -->
        <div class="stars-container">
            <div>

                <input type="radio" name="rate" id="star-5">
                <label for="star-5" class="fas fa-star"></label>

                <input type="radio" name="rate" id="star-4">
                <label for="star-4" class="fas fa-star"></label>

                <input type="radio" name="rate" id="star-3">
                <label for="star-3" class="fas fa-star"></label>

                <input type="radio" name="rate" id="star-2">
                <label for="star-2" class="fas fa-star"></label>

                <input type="radio" name="rate" id="star-1" checked>
                <label for="star-1" class="fas fa-star"></label>
            </div>
        </div>

        <textarea name="" id="textarea" rows="1" required></textarea>
        <input type="submit" value="Postar avaliação">

    </form>`

    avaliationContainer.innerHTML = html

    const textarea = document.getElementById('textarea')

    textarea.addEventListener('input', (event) => {
        const currentElement = event.currentTarget

        currentElement.style.height = 'inherit'
        const height = currentElement.scrollHeight
        currentElement.style.height = height + "px"
    })
}

// Gerando comentários 
const evalueationContainer = document.querySelector('.other-reviews .line-up-grid-reviews')

const evaluations = [
    {
        profile: "./public/images/doka.png",
        name: "Julin",
        rating: 5,
        date: "19/09/2021",
        text: "Testando",
    },

    {
        profile: "./public/images/doka.png",
        name: "Sidoka",
        rating: 1.5,
        date: "209/05/2021",
        text: "saopkdop dipsamoip dopsamndo osamndosa doipsanodp",
    },

    {
        profile: "./public/images/doka.png",
        name: "Gulio",
        rating: 3,
        date: "12/02/2021",
        text: "saopkdop dipsamoip dopsamndo osamndosa doipsanodp",
    },

]

evaluations.forEach( ({profile, name, rating, date, text}) => {

//     <div class="evaluation-container">

//     <header>
//         <img src="./public/images/doka.png" alt="">
//         <h6>Sidoka</h6>
//     </header>

//     <main>
        
//         <div class="line-up-star-rating-and-date">
//             <div>
//                 <div class="stars-outer">
//                     <div class="stars-inner"></div>
//                 </div>
//             </div>

//             <span>12/02/2021</span>
//         </div>

//        <p class="user-comment">
//         saopkdop dipsamoip dopsamndo osamndosa doipsanodp
       
//        </p> 
        
//     </main>
// </div>


    const elementDivContainer = document.createElement('div')
    elementDivContainer.classList.add('evaluation-container')

    const elementHeader = document.createElement('header')
    const elementImg = document.createElement('img')
    elementImg.src = profile
    elementImg.alt = `foto de perfil do ${name}`


    const elementh6 = document.createElement('h6')    
    const elementh6Text = document.createTextNode(name)    
    elementh6.appendChild(elementh6Text)

    const elementMain = document.createElement('main')
    const elementDivLineUpStarRatingAndDate = document.createElement('div')
    elementDivLineUpStarRatingAndDate.classList.add('line-up-star-rating-and-date')

    const elementDivStarContainer = document.createElement('div')

    const elementDivStarOuther = document.createElement('div')
    elementDivStarOuther.classList.add('stars-outer')


    const elementDivStarInner = document.createElement('div')
    elementDivStarInner.classList.add('stars-inner')

     /* Adicionando os valores das estrelas */

        // Get porcentage
        const starPercentage = (rating / 5) * 100

        // Round to nearest 10
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`

        // Set width of stars-inner to percentage
        elementDivStarInner.style.width = starPercentageRounded


    const elementDivSpan = document.createElement('span')
    const elementDivSpanText = document.createTextNode(date)
    elementDivSpan.appendChild(elementDivSpanText)

    const elementPComment = document.createElement('p')
    elementPComment.classList.add('user-comment')

    const elementPCommentText = document.createTextNode(text)
    elementPComment.appendChild(elementPCommentText)


    elementHeader.appendChild(elementImg)
    elementHeader.appendChild(elementh6)
    elementDivContainer.appendChild(elementHeader)

    elementDivStarOuther.appendChild(elementDivStarInner)
    elementDivStarContainer.appendChild(elementDivStarOuther)
    elementDivLineUpStarRatingAndDate.appendChild(elementDivStarContainer)
    elementDivLineUpStarRatingAndDate.appendChild(elementDivSpan)

    elementMain.appendChild(elementDivLineUpStarRatingAndDate)
    elementMain.appendChild(elementPComment)

    elementDivContainer.appendChild(elementMain)


    evalueationContainer.appendChild(elementDivContainer)
})
        // Form Submit

const detailsForm = document.querySelector('#destination-form')
detailsForm.addEventListener("submit", handleFormSubmit)

function handleFormSubmit(evt){
    evt.preventDefault()

    const destName = evt.target.elements["destination-form__name"].value
    const destLocation = evt.target.elements["destination-form__location"].value
    const destPhoto = evt.target.elements["destination-form__photo"].value
    const destDescr = evt.target.elements["destination-form__description"].value

            // Reset form

    for (let i = 0; i < detailsForm.length; i++) {
        detailsForm.elements[i].value = "";
        
    }

            // Creating card

    let destCard = createDestCard(destName, destLocation, destPhoto, destDescr)

            // Add card to the page

    document.querySelector('#destination-container').appendChild(destCard) 

}

        // Create Card (function) 

function createDestCard(destFormName, destFormLocation, destFormPhoto, destFormDescr){
    const card = document.createElement('div')
    card.className = "destination-container__card"

    const cardImg = document.createElement('img')
    cardImg.setAttribute('alt', destFormName)

    const constantPhoto = "assets/pic/01.jpg"
    if (destFormPhoto.length === 0) {
        cardImg.setAttribute('src', constantPhoto)
    }else{
        cardImg.setAttribute('src', destFormPhoto)
    }
    card.appendChild(cardImg)

        const cardBody = document.createElement('div')
        cardBody.className = "destination-container__card-body"

            const cardText = document.createElement('div')
            cardText.className = "destination-container__card-text"
                
                const cardTitle = document.createElement('h3')
                cardTitle.innerText = destFormName
                cardText.appendChild(cardTitle)

                const cardLocation = document.createElement('h4')
                cardLocation.innerText = destFormLocation
                cardText.appendChild(cardLocation)

                if (destFormDescr.length > 0) {        
                    const cardDescr = document.createElement('p')
                    cardDescr.innerText = destFormDescr        
                    cardText.appendChild(cardDescr)
                } 

            cardBody.appendChild(cardText)

                const removeBtn = document.createElement('button')
                removeBtn.innerText = "Remove"
    
                removeBtn.addEventListener('click', RemoveCard)
            cardBody.appendChild(removeBtn)

    card.appendChild(cardBody)
    return card

}

        // Remove the Card (function)

function RemoveCard(evt){
    const card = evt.target.parentElement.parentElement
    card.remove()
}
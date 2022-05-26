//See all ramen images in the div with the id of ramen-menu. 
//When the page loads, request the data from the server to get all the ramen objects. 
//Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

const ramen = () => {
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(data => {
        //console.log(data)
        data.forEach(displayRamenImage)
    })
}
ramen()

const displayRamenImage = (oneRamen) => {
    const oneRamenImage = document.querySelector('#ramen-menu')
    const pic = document.createElement('img')
    pic.src = oneRamen.image
    oneRamenImage.append(pic)
    //console.log(pic)

    //add 'click' event listener to pic
    //when clicked, infro will be displayed in #ramen-detail div
    pic.addEventListener('click', () => {
        //console.log('clicked')
        const insertImage = document.querySelector('img.detail-image')
        insertImage.src = oneRamen.image

        const insertName = document.querySelector('h2.name')
        insertName.textContent = oneRamen.name

        const insertRestaurant = document.querySelector('h3.restaurant')
        insertRestaurant.textContent = oneRamen.restaurant

        const insertRating = document.querySelector('#rating-display')
        insertRating.textContent = oneRamen.rating

        const insertComment = document.querySelector('#comment-display')
        insertComment.textContent = oneRamen.comment
    })
}

//Create a new ramen after submitting the new-ramen form. 
//create submit event listener
//add preventDefault
//create a new object with values from input 

const form = document.querySelector('#new-ramen')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    //console.log('submitted')

    const newRamen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value,
    }
    //console.log(newRamen)
    
    //The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.
    displayRamenImage(newRamen)
    
    //then resets the form so you can input it again
    form.reset()
})




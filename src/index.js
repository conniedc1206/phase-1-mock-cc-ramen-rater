//fetch the data from the server
//display images for each ramen using an img tag inside #ramen-men div
const ramen = () => {
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(data => {
        //console.log(data)
        data.forEach(OneImage)
    })
}
ramen()

const OneImage = (oneRamen) => {
    const ramenMenu = document.querySelector('#ramen-menu');
    const pic = document.createElement('img');
    pic.src = oneRamen.image;
    ramenMenu.append(pic);
    
    //listen for click on image in #ramen-menu
    //the ramen that was clicked on should appear on the ramen details and the comments and rating
    pic.addEventListener('click', () => {
        //console.log('clicked')
        //const imageToUpdate = document.getElementsByClassName('detail-image')[0]
        const imageToUpdate = document.querySelector('#ramen-detail img.detail-image')
        imageToUpdate.src = oneRamen.image

        const nameToUpdate = document.querySelector('#ramen-detail h2.name')
        nameToUpdate.textContent = oneRamen.name

        const restaurantToUpdate = document.querySelector('#ramen-detail h3.restaurant')
        restaurantToUpdate.textContent = oneRamen.restaurant

        const ratingToUpdate = document.querySelector('#rating-display')
        ratingToUpdate.textContent = oneRamen.rating

        const commentToUpdate = document.querySelector('#comment-display')
        commentToUpdate.textContent = oneRamen.comment
    })
}

//Create a new ramen after submitting the new-ramen form. 
//The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.
document.querySelector('#new-ramen').addEventListener('submit',(e)=>{
    e.preventDefault()
    //console.log("submitted")
    //grab target by name using dot notation (without hyphen)
    //console.log(e.target.name.value)
    //grab target by id using bracket notation(with hyphen)
    //console.log(e.target['new-name'].value)
    
    const newRamen = {
        name: e.target.name.value,
        restaurant:e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment:e.target['new-comment'].value,
    }
    console.log(newRamen)
    OneImage(newRamen)
})
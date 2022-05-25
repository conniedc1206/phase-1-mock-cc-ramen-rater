//fetch the data from the server
const ramen = fetch('http://localhost:3000/ramens').then(res => res.json()).then(data => console.log(data));

const ramen1 = fetch('http://localhost:3000/ramens/1').then(res => res.json()).then(data => console.log(data));

//console.log(ramen1)

//display images for each ramen using an img tag inside #ramen-men div
    //create img tags
    //add images to new tags

const ramenMenu = document.querySelector('#ramen-menu');
const image = document.createElement('img');
image.src = './assets/ramen/shoyu.jpg';
ramenMenu.appendChild(image);

const image1 = document.createElement('img');
image1.src = './assets/ramen/naruto.jpg';
ramenMenu.appendChild(image1);

const image2 = document.createElement('img');
image2.src = './assets/ramen/nirvana.jpg';
ramenMenu.appendChild(image2);

const image3 = document.createElement('img');
image3.src = './assets/ramen/gyukotsu.jpg';
ramenMenu.appendChild(image3);

const image4 = document.createElement('img');
image4.src = './assets/ramen/kojiro.jpg';
ramenMenu.appendChild(image4);

//forEach loop(ramen)
// Array.from(ramen).forEach(function() {
//     const image = document.createElement('img');
//     image.src = ramen.image;
//     document.querySelector('#ramen-menu').appendChild(image);
// });
const moon_ = document.querySelector(".moon")
const mars_ = document.querySelector(".mars")
const europa_ = document.querySelector(".europa")
const titan_ = document.querySelector(".titan")
const dest_img = document.querySelector(".destination-pic img")
const des_count = document.querySelector(".dest-count")
const dest_name = document.querySelector(".dest-name")
const dest_descprition = document.querySelector(".dest-descprition")
const distance = document.querySelector(".distance h1")
const time = document.querySelector(".time h1")


let destination_Data={
    "destinations": [
        {
          "name": "Moon",
          "images": {
            "png": "../assets/destination/image-moon.png",
            "webp": "../assets/destination/image-moon.webp"
          },
          "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          "distance": "384,400 km",
          "travel": "3 days"
        },
        {
          "name": "Mars",
          "images": {
            "png": "../assets/destination/image-mars.png",
            "webp": "../assets/destination/image-mars.webp"
          },
          "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
          "distance": "225 mil. km",
          "travel": "9 months"
        },
        {
          "name": "Europa",
          "images": {
            "png": "../assets/destination/image-europa.png",
            "webp": "../assets/destination/image-europa.webp"
          },
          "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
          "distance": "628 mil. km",
          "travel": "3 years"
        },
        {
          "name": "Titan",
          "images": {
            "png": "../assets/destination/image-titan.png",
            "webp": "../assets/destination/image-titan.webp"
          },
          "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
          "distance": "1.6 bil. km",
          "travel": "7 years"
        }
      ]
}

console.log(destination_Data.destinations[3].travel)

function moon(){
    dest_img.src = destination_Data.destinations[0].images.webp
    dest_name.innerHTML=destination_Data.destinations[0].name
    dest_descprition.innerHTML=destination_Data.destinations[0].description
    distance.innerHTML=destination_Data.destinations[0].distance
    time.innerHTML=destination_Data.destinations[0].travel
    moon_.classList.add("dest-active")
    mars_.classList.remove("dest-active")
    europa_.classList.remove("dest-active")
    titan_.classList.remove("dest-active")
}
function mars(){
    dest_img.src = destination_Data.destinations[1].images.webp
    dest_name.innerHTML=destination_Data.destinations[1].name
    dest_descprition.innerHTML=destination_Data.destinations[1].description
    distance.innerHTML=destination_Data.destinations[1].distance
    time.innerHTML=destination_Data.destinations[1].travel
    moon_.classList.remove("dest-active")
    mars_.classList.add("dest-active")
    europa_.classList.remove("dest-active")
    titan_.classList.remove("dest-active")
}
function europa(){
    dest_img.src = destination_Data.destinations[2].images.webp
    dest_name.innerHTML=destination_Data.destinations[2].name
    dest_descprition.innerHTML=destination_Data.destinations[2].description
    distance.innerHTML=destination_Data.destinations[2].distance
    time.innerHTML=destination_Data.destinations[2].travel
    moon_.classList.remove("dest-active")
    mars_.classList.remove("dest-active")
    europa_.classList.add("dest-active")
    titan_.classList.remove("dest-active")
}
function titan(){
    dest_img.src = destination_Data.destinations[3].images.webp
    dest_name.innerHTML=destination_Data.destinations[3].name
    dest_descprition.innerHTML=destination_Data.destinations[3].description
    distance.innerHTML=destination_Data.destinations[3].distance
    time.innerHTML=destination_Data.destinations[3].travel
    moon_.classList.remove("dest-active")
    mars_.classList.remove("dest-active")
    europa_.classList.remove("dest-active")
    titan_.classList.add("dest-active")
}

let crew_Data={
      "crew": [
        {
          "name": "Douglas Hurley",
          "images": {
            "png": "../assets/crew/image-douglas-hurley.png",
            "webp": "../assets/crew/image-douglas-hurley.webp"
          },
          "role": "Commander",
          "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        {
          "name": "Mark Shuttleworth",
          "images": {
            "png": "../assets/crew/image-mark-shuttleworth.png",
            "webp": "../assets/crew/image-mark-shuttleworth.webp"
          },
          "role": "Mission Specialist",
          "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        {
          "name": "Victor Glover",
          "images": {
            "png": "../assets/crew/image-victor-glover.png",
            "webp": "../assets/crew/image-victor-glover.webp"
          },
          "role": "Pilot",
          "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        },
        {
          "name": "Anousheh Ansari",
          "images": {
            "png": "../assets/crew/image-anousheh-ansari.png",
            "webp": "../assets/crew/image-anousheh-ansari.webp"
          },
          "role": "Flight Engineer",
          "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        }
      ]
}

const crew_img = document.querySelector('.crew-img img')
const role = document.querySelector('.rank')
const crew_name = document.querySelector('.name')
const bio = document.querySelector('.about')
const c1 = document.querySelector('.c1')
const c2 = document.querySelector('.c2')
const c3 = document.querySelector('.c3')
const c4 = document.querySelector('.c4')
function crew1(){
    crew_img.src=crew_Data.crew[0].images.png
    role.innerHTML=crew_Data.crew[0].role
    crew_name.innerHTML=crew_Data.crew[0].name
    bio.innerHTML=crew_Data.crew[0].bio
    c1.classList.add('selected')
    c2.classList.remove('selected')
    c3.classList.remove('selected')
    c4.classList.remove('selected')
}
function crew2(){
    crew_img.src=crew_Data.crew[1].images.png
    role.innerHTML=crew_Data.crew[1].role
    crew_name.innerHTML=crew_Data.crew[1].name
    bio.innerHTML=crew_Data.crew[1].bio
    c1.classList.remove('selected')
    c2.classList.add('selected')
    c3.classList.remove('selected')
    c4.classList.remove('selected')
}
function crew3(){
    crew_img.src=crew_Data.crew[2].images.png
    role.innerHTML=crew_Data.crew[2].role
    crew_name.innerHTML=crew_Data.crew[2].name
    bio.innerHTML=crew_Data.crew[2].bio
    c1.classList.remove('selected')
    c2.classList.remove('selected')
    c3.classList.add('selected')
    c4.classList.remove('selected')
}
function crew4(){
    crew_img.src=crew_Data.crew[3].images.png
    role.innerHTML=crew_Data.crew[3].role
    crew_name.innerHTML=crew_Data.crew[3].name
    bio.innerHTML=crew_Data.crew[3].bio
    c1.classList.remove('selected')
    c2.classList.remove('selected')
    c3.classList.remove('selected')
    c4.classList.add('selected')
}
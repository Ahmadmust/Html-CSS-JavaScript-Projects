let technology_Data={
      "technology": [
        {
          "name": "Launch vehicle",
          "images": {
            "portrait": "../assets/technology/image-launch-vehicle-portrait.jpg",
            "landscape": "../assets/technology/image-launch-vehicle-landscape.jpg"
          },
          "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        {
          "name": "Spaceport",
          "images": {
            "portrait": "../assets/technology/image-spaceport-portrait.jpg",
            "landscape": "../assets/technology/image-spaceport-landscape.jpg"
          },
          "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        {
          "name": "Space capsule",
          "images": {
            "portrait": "../assets/technology/image-space-capsule-portrait.jpg",
            "landscape": "../assets/technology/image-space-capsule-landscape.jpg"
          },
          "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
      ]
}

const image_desktop = document.querySelector('.desktop-img')
const image_tab = document.querySelector('.tab-mob')
const tech_name = document.querySelector('.name')
const descprition = document.querySelector('.descprition')

const tech1 = document.querySelector('.c1')
const tech2 = document.querySelector('.c2')
const tech3 = document.querySelector('.c3')

console.log(technology_Data.technology[2].name)

function technology1(){
    image_desktop.src=technology_Data.technology[0].images.portrait
    image_tab.src=technology_Data.technology[0].images.landscape
    tech_name.innerHTML=technology_Data.technology[0].name
    descprition.innerHTML=technology_Data.technology[0].description
    tech1.classList.add("selected")
    tech2.classList.remove("selected")
    tech3.classList.remove("selected")
}
console.log(image_desktop.innerHTML)
function technology2(){
    console.log(technology_Data.technology[1].images.portrait)
    image_desktop.src=technology_Data.technology[1].images.portrait
    image_tab.src=technology_Data.technology[1].images.landscape
    tech_name.innerHTML=technology_Data.technology[1].name
    descprition.innerHTML=technology_Data.technology[1].description
    tech1.classList.remove("selected")
    tech2.classList.add("selected")
    tech3.classList.remove("selected")
}

function technology3(){
    image_desktop.src=technology_Data.technology[2].images.portrait
    image_tab.src=technology_Data.technology[2].images.landscape
    tech_name.innerHTML=technology_Data.technology[2].name
    descprition.innerHTML=technology_Data.technology[2].description
    tech1.classList.remove("selected")
    tech2.classList.remove("selected")
    tech3.classList.add("selected")
}

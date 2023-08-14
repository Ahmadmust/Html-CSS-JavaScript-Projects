
const ipadr = document.querySelector('.ip')
const loc = document.querySelector('.location')
const timezone = document.querySelector('.timezone')
const isp = document.querySelector('.isp')
const Searchbtn = document.querySelector('.btn')
const inputField = document.querySelector('.input-container input')
var city
var country
var postalcode
var inputIp
var lat
var lan

let map = L.map('map').setView([51.505, -0.09], 13)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

const API_KEY = '9c095da267384cf0a9fccc8c7cb83ec5&ip'

let url = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}=`

fetch(url)
.then((res)=>res.json())
.then((res)=>{
    console.log(res)
    ipadr.innerHTML=res.ip
    city=res.city
    country=res.country_name
    postalcode=res.zipcode
    loc.innerHTML=`${city},${country}<br>${postalcode}`
    timezone.innerHTML=`UTC-${res.time_zone.offset}`
    isp.innerHTML=res.isp
    lat = res.latitude
    lng = res.longitude
    mapLocation(lat,lng)
})

const mapLocation=(lat,lan)=>{
    var markerIcon=L.icon({
        iconUrl:'images/icon-location.svg',
        isconSize:[46,56],
        iconAnchor:[23,55],
    })
    map.setView([lat,lan],17)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: false,
      }).addTo(map)
      L.marker([lat, lng], { icon: markerIcon }).addTo(map)

}
      Searchbtn.addEventListener('click',()=>{
        if (
            inputField.value.match(
              /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
            )
          ) {
            inputIp = inputField.value
            inputField.value=''
            url = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}=` + inputIp
            fetch(url)
              .then((res) => res.json())
              .then((res) => {
                console.log(res)
                ipadr.innerHTML=res.ip
                city=res.city
                country=res.country_name
                postalcode=res.zipcode
                loc.innerHTML=`${city},${country}<br>${postalcode}`
                timezone.innerHTML=`UTC${res.time_zone.offset}`
                isp.innerHTML=res.isp
                lat = res.latitude
                lng = res.longitude
                mapLocation(lat, lng)
                
              }).catch(error => console.log(error))
          } else {
            alert('You have entered an invalid IP address!')
            return false
          }
      })

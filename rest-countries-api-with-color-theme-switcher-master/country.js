const countryName = new URLSearchParams(location.search).get('name')
const flagimg = document.querySelector('.country-details img');
const country_name = document.querySelector('.details-container h1')
const nativeName = document.querySelector('.native-name')
const population = document.querySelector('.population')
const region = document.querySelector('.region')
const subregion = document.querySelector('.sub-region')
const languages = document.querySelector('.languages')
const currencies = document.querySelector('.currencies')
const capital = document.querySelector('.capital')
const topDomain = document.querySelector('.top-level-domain')
const borders = document.querySelector('.borders')


fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res)=> res.json())
.then(([country]) =>{
    console.group(country)
    flagimg.src=country.flags.svg;
    country_name.innerHTML=country.name.official;
    population.innerHTML=country.population.toLocaleString('en');
    region.innerHTML=country.region;
    subregion.innerHTML=country.subregion;
    capital.innerHTML=country.capital;


    if(country.name.nativeName){
        nativeName.innerHTML=Object.values(country.name.nativeName)[0].common
    }
    else{
        nativeName.innerHTML=country.name.common
    }
    if(country.currencies){
        currencies.innerText = Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(', ')
      }
      if (country.languages) {
        languages.innerText = Object.values(country.languages).join(', ')
      }

      topDomain.innerText = country.tld.join(', ')
      if (country.borders) {
      
        country.borders.forEach((border) => {
          fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => res.json())
            .then(([borderCountry]) => {
              // console.log(borderCountry)
              const borderCountryTag = document.createElement('a')
              borderCountryTag.innerText = borderCountry.name.common
              borderCountryTag.href = `country.html?name=${borderCountry.name.common}`
              borders.append(borderCountryTag)
            })
        })
    }
})


const themeChanger = document.querySelector('.theme-changer')
themeChanger.addEventListener('click',()=>{
  console.log('clicked')
  document.body.classList.toggle("dark")
})
const countries = document.querySelector(".countries-container")
const search = document.querySelector(".search-input");
const filterByRegion = document.querySelector('.filter-by-region')
const themeChnage = document.querySelector('.theme-changer')

var allcountries

//fetching data and call the function to show all countries
fetch('https://restcountries.com/v3.1/all')
.then((res)=>res.json())
.then((data)=>{
showCountries(data)
allcountries=data
});

filterByRegion.addEventListener('change',(e)=>{
    if(filterByRegion.value==='All'){
        showCountries(allcountries)
    }
    fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
    .then((res)=>res.json())
    .then(showCountries)
});

function showCountries(country){
    countries.innerHTML=''
    country.forEach(data => {
        const country = document.createElement('a');
        country.classList.add("country");
        country.href=`/country.html?name=${data.name.official}`;
        country.innerHTML=`
        <img src="${data.flags.png}" alt="Flag">
        <div class="country-info">
            <h3>${data.name.common}</h3>
            <p><strong>Popullation:</strong>${data.population.toLocaleString('en')}</p>
            <p class="regionName"><strong>Region:</strong>${data.region}</p>
            <p><strong>Capital:</strong>${data.capital?.[0]}</p>
        </div>
        `
        countries.append(country);
    });
}

search.addEventListener('input',(e)=>{
    console.log(e.target.value)
    const filteredCountries = allcountries.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
    showCountries(filteredCountries)
   
});


themeChnage.addEventListener('click',()=>{
    document.body.classList.toggle("dark")
})
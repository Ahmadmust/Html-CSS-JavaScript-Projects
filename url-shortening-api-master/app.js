const shortenBtn = document.querySelector(".shorten-btn button")
const urlInput = document.querySelector(".input input");
const inputCon = document.querySelector(".input");
const error = document.querySelector(".error");
const urlContainer = document.querySelector(".url-container");


var shortURL
var savedUrls = [];

shortenBtn.addEventListener('click',()=>{
    if(urlInput.value === ''){
        error.classList.remove("active");
        inputCon.classList.add("error");
    }
    else{
        error.classList.add("active");
        inputCon.classList.remove("error");
        var url = urlInput.value;
        console.log(url)
        fetch(`https://api.shrtco.de/v2/shorten?url=${url}`,{
            Method: 'GET',
            Headers: {
              Accept: 'application.json',
              'Content-Type': 'application/json'
            }
          })
        .then((res) => res.json())
        .then((data)=>{
            shortURL=data.result.full_short_link
            console.log(data.result.full_short_link)
            const urlWrapper = document.createElement("div")
            urlWrapper.classList.add("url-wrapper");
            urlWrapper.innerHTML=` <a class="url"  href="${url}" target="_blank">${url}</a>
            <span class="url-copy">
              <a href="${data.result.full_short_link}" class="surl" target="_blank">${data.result.full_short_link}</a>
              <button class="copybtn" onclick="copyContent()">Copy</button>
            </span>`
            urlContainer.append(urlWrapper)
            let generatedURL = {
                originalURL: url,
                shortUrl: shortURL
              };
              savedUrls.push(generatedURL)
              localStorage.setItem("saved", JSON.stringify(savedUrls));
        })
    }
})
console.log(savedUrls)

const open = document.querySelector(".open");
const close = document.querySelector(".close");
const mobile_nav = document.querySelector(".mobile-nav")

open.addEventListener('click',()=>{
    open.classList.add('active');
    open.style="display:none"
    close.classList.remove('active');
    mobile_nav.classList.remove('active')
})
close.addEventListener('click',()=>{
    open.classList.remove('active');
    open.style="display:block"
    close.classList.add('active');
    mobile_nav.classList.add('active')
})


const srtURL = document.querySelectorAll('.surl');
const copybtn = document.querySelectorAll('.copybtn')
const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(shortURL);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
    copybtn.style="display none"
}


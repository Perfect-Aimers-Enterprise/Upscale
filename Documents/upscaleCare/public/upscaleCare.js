const { response } = require("express")

const careService1 = document.querySelector('.careService1')
const moreButton = document.querySelector('.moreButton')
const careService2 = document.querySelector('.careService2')
const answer = document.querySelector('.answer')
const buttons = document.querySelectorAll('.buttons')
const faBars = document.querySelector('.fa-bars')
const faTimes = document.querySelector('.fa-times')
const faButtons = document.querySelectorAll('.faButtons')
const listItems = document.querySelector('.list-items li')

moreButton.onclick = () => {
    console.log(careService2.classList);
    if (careService2.classList.contains('hidden')) {
        careService2.classList.remove('hidden')
        careService1.classList.add('hidden')
        moreButton.textContent = 'Less'
    }else{
        careService2.classList.add('hidden')
        careService1.classList.remove('hidden')
        moreButton.textContent = 'More'
    }  
    // careService1.classList.toggle('hidden')
    // careService2.classList.toggle('hidden')
}

buttons.forEach((button) => {
    button.onclick = (e) => {
        const parenting = e.target.parentElement.parentElement.parentElement.parentElement
        // console.log(parenting);
        parenting.classList.toggle('show-text')
        
    }
})

faBars.onclick = () => {
    
}
faButtons.forEach((faButton) => {
    faButton.onclick = (e) => {
        const fabtn = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement

        fabtn.classList.toggle('stuff-items')
    }
})

const apiUrl = 'https://restcountries.com/v3.1/independent?status=true';

fetch(apiUrl)
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Error fetching data', error)
})
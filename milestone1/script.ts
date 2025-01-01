

// for functionality we'll use typescript especially for button
const button=document.getElementById('toggle-personal info') as HTMLButtonElement
const personalInfo = document.getElementById('personal-information') as HTMLElement
button.addEventListener('click' , ()=> {
     if(personalInfo.style.display === 'none') {
        personalInfo.style.display = 'block'
     } else {
        personalInfo.style.display ='none'
     }
})
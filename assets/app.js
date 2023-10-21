const btn = document.querySelector('.btn');
const input = document.querySelector('input');
const emailAreaBc = document.querySelector('.input-area-bc');
const errorText = document.querySelector('.error-text');
const errorBorder = document.getElementById('email');
const secondBtn = document.querySelector('.sceond-btn');
const placeholderColor = document.querySelector('placeholder')
const mainCard = document.querySelector('.main-card');
const secondCard = document.querySelector('.second-card-header');


// Email Validation


const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



btn.addEventListener('click', (e) => {
    e.preventDefault();
    const emailValue = input.value.trim();
   if (emailPattern.test(emailValue)) {

    // mainCard.classList.add('hidden');
    secondCard.classList.add('hidden');
    mainCard.classList.add('hidden');
    
    console.log('hi');

   } else {
     errorFunc();
     clearFunc();
     console.log('hello');
     console.log(emailValue);
   }
})







const errorFunc = () => {
    errorBorder.style.border = '1px solid hsl(354, 100%, 66%)';
    emailAreaBc.style.backgroundColor = 'hsl(9, 61%, 89%)';
    errorText.style.display = 'block';
    

}

const clearFunc = () => {
    setTimeout( () => {
        errorBorder.style.border = '';
        emailAreaBc.style.backgroundColor = '';
        errorText.style.display = 'none';
    },3000)
      
}
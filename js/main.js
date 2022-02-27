//domdagi elemenlarni chaqirib oldik
var formEl=document.querySelector('.form')
var formInputEl=document.querySelector('.form__input')
var resultEl=document.querySelector('.result')
var inputcheks=formInputEl.value
// Bu kiritilayotgan raqam ekanligini tekshirish function si 
function hendil(evt){
    evt.preventDefault()
    var inputcheks=formInputEl.value
    if(inputcheks<0 || isNaN(inputcheks)){
        resultEl.textContent="0 dan katta raqam kiriting,va raqam kiriting!!!"
        resultEl.classList.remove('result-right')
        resultEl.classList.add('result-eror')
        return
    }
    FizzBuzz(inputcheks)
}
// bu funtion 3 ga 5 ga bo'lishi yoki bo'linmasligini aniqlovchi function
function FizzBuzz(num){
    if(num%3==0 && num%5==0){
        resultEl.textContent="FizzBuzz"// resultda javob ko'rinishi
        resultEl.classList.remove('result-eror') // class ayirdik
        resultEl.classList.add('result-right')  // class qo'shdik
        return
    }
    if(num%3==0){
        resultEl.textContent="Fizz"
        resultEl.classList.add('result-right')
        return
    }
    if(num%5==0){
        resultEl.textContent="Buzz"
        resultEl.classList.add('result-right')
        return
    }else{
        resultEl.textContent=` ${num} 3ga ham 5ga ham bo'linmaydi`
        resultEl.classList.add('result-right')
        return
    }
}

// form elementida submit xodisasi ro'y berganda xosil bo'ladigan amallarni bajaradigan quloq
formEl.addEventListener('submit',hendil)
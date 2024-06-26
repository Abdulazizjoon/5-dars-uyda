let kilc=document.querySelector('#flexSwitchCheckDefault')
let a=document.querySelector('.a')
let b=document.querySelector('.b')
let al=document.querySelector('.al')
let til1=document.querySelector('.light')
let dark=document.querySelector('.dark')
let unk=document.querySelector('.unk')
let redy=document.querySelector('.redy')
kilc.addEventListener('click',function() {
    b.style.display="none"
  a.style.marginLeft ="200px"
  a.style.backgroundColor="#18181b"
})

function salom() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
al.addEventListener('click',function() {
  dark.textContent="темный режим"
  til1.textContent="световой режим"
  unk.textContent="Раскройте силу творчества с Figma!"
  redy.textContent="Готовы улучшить свою дизайнерскую игру?"
  but.textContent="Попробуйте Фигму прямо сейчас"
})
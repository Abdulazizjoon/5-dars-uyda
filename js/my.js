let kilc=document.querySelector('#flexSwitchCheckDefault')
let a=document.querySelector('.a')
let b=document.querySelector('.b')
kilc.addEventListener('click',function() {
    b.style.display="none"
  a.style.marginLeft ="200px"
  a.style.backgroundColor="#18181b"
})

function salom() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

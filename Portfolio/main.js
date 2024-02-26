
// hamberg menu

let menu = document.querySelector('#menubar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('nav-toggle');
    menu.classList.toggle('fa-times');
})


// scrolltop


window.onscroll = () =>{scrolltopFunction()};

function scrolltopFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20){
        document.getElementById('scrolltop').style.display = 'block';
    }
    else{
        document.getElementById('scrolltop').style.display ='none';
    }
}

function scrollTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
 


// footer year

const currentYear = new Date().getFullYear();

document.getElementById('date').innerHTML = currentYear;

// typetext animate


  const  text = document.getElementById('sec-text');

  const Animate = () =>{
    setTimeout (() => {
        text.textContent = 'Web Developer';
    }, 0);
    setTimeout (() => {
        text.textContent = 'Front-End Developer';
    }, 4000);
    setTimeout (() => {
        text.textContent = 'Freelancer';
    }, 8000);
}
Animate();
setInterval(Animate, 12000);
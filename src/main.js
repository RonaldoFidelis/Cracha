let lista = document.querySelector('ul');
let navMobile = document.querySelector('#nav-mob');
let menuhamburguer = document.querySelector('.menu-hamburguer')

function Menu(e) {

    if (e.id == 'Menu') {
        e.id = 'Close';
        e.classList.remove("fa-solid", "fa-bars");
        e.classList.add("fa-solid", "fa-xmark");
        lista.classList.add('top-[30px]');
        lista.classList.add('opacity-100');
        navMobile.classList.add('nav-mobile')
        
    } else {
        e.id = 'Menu';
        e.classList.remove("fa-solid", "fa-xmark");
        e.classList.add("fa-solid", "fa-bars");
        lista.classList.remove('top-[30px]');
        lista.classList.remove('opacity-100');
        navMobile.classList.remove('nav-mobile')
    }
}

function Close(){
    console.log(menuhamburguer.id)

    if (menuhamburguer.id == 'Close') {
        menuhamburguer.id = 'Menu';
        menuhamburguer.classList.remove("fa-solid", "fa-xmark");
        menuhamburguer.classList.add("fa-solid", "fa-bars");
        lista.classList.remove('top-[30px]');
        lista.classList.remove('opacity-100');
        navMobile.classList.remove('nav-mobile')
    }

}
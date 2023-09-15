let lista = document.querySelector('ul');

function Menu(e) {
    console.log('teste')

    if (e.id == 'Menu') {
        e.id = 'Close';
        e.classList.remove("fa-solid", "fa-bars");
        e.classList.add("fa-solid", "fa-xmark");
        lista.classList.add('top-[30px]');
        lista.classList.add('opacity-100');
    } else {
        e.id = 'Menu';
        e.classList.remove("fa-solid", "fa-xmark");
        e.classList.add("fa-solid", "fa-bars");
        lista.classList.remove('top-[30px]');
        lista.classList.remove('opacity-100');
    }
}


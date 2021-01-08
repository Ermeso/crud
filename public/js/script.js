const body = document.querySelector('body');
const CREATE = document.querySelector('.create');
const modalbg = document.querySelector('.modal-bg');
const ALTERAR = document.querySelectorAll('.alterar');
const modalbgalter = document.querySelector('.modal-bg-alter');
const burger = document.querySelector('.burger');
const ul = document.querySelectorAll('ul');
const navbar = document.querySelector('nav');
const logo = document.querySelector('.logo');
const lines = document.querySelectorAll('.lines')

const disableScrolling = () => {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = () => {
        window.scrollTo(x, y);
    };
}

const enableScrolling = () => {
    window.onscroll = () => {

    };
}

const modal = () => {

    ALTERAR.forEach((element, index) => {
        ALTERAR[index].addEventListener('click', () => {
            window.scrollTo(0, 0);
            disableScrolling();
            modalbgalter.classList.add('modal-active');
            desativaralter();
        });
    });

    CREATE.addEventListener('click', () => {
        window.scrollTo(0, 0);
        disableScrolling();
        modalbg.classList.add('modal-active');
        desativar();
    });

    
};

const desativar = () => {
    modalbg.addEventListener('click', (e) => {
        if(e.target.id == 'fechar-modal') {
            enableScrolling()
            modalbg.classList.remove('modal-active');
        }
    });

    document.addEventListener('keydown', () => {
        var tecla = event.keyCode;
        if(tecla == 27) {
            enableScrolling()
            modalbg.classList.remove('modal-active');
        }
    });
};

const desativaralter = () => {
    modalbgalter.addEventListener('click', (e) => {
        if(e.target.id == 'fechar-modal') {
            enableScrolling()
            modalbgalter.classList.remove('modal-active');
        }
    });

    document.addEventListener('keydown', () => {
        var tecla = event.keyCode;
        if(tecla == 27) {
            enableScrolling()
            modalbgalter.classList.remove('modal-active');
        }
    });
};

const navslide = () => {
    burger.addEventListener('click', () => {
        ul.forEach((element, index) => {
           ul[index].classList.toggle('ul-active'); 
        });
        
        navbar.classList.toggle('navbar-active');
        logo.classList.toggle('logo-active');
        lines.forEach((element, index) => {
            lines[index].classList.toggle('burger-active');
        });
    });
};

navslide();

modal();
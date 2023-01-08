const menuButton = document.querySelector('.header__menu--mobile');
let menuActive = false;

menuButton.addEventListener('click', () => {
    const menu = document.querySelector('.header__menu');
    console.log(menu.style.display);

    if (!menuActive) {
        menu.style.display = 'flex';
        menuActive = true;
    } else {
        menu.style.display = 'none';
        menuActive = false;
    }

    window.addEventListener('click', (event) => {
        if(!event.target.closest('.header__menu') && !event.target.closest('.header__menu--mobile')) {
            menu.style.display = 'none';
            menuActive = false;
        } 
    })
})
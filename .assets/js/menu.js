const background = document.querySelector('#background');
const menu = document.querySelector('#menu');

function openMenu() {
    if (menu) {
        if (menu.hasAttribute('state') && menu.getAttribute('state') == 'close') {
            menu.setAttribute('state', 'open');
            background.setAttribute('style', 'display: block;')
            document.body.style.overflowY = 'hidden';
        }
    }
}

function closeMenu() {
    if (menu) {
        if (menu.hasAttribute('state') && menu.getAttribute('state') == 'open') {
            menu.setAttribute('state', 'close');
            background.setAttribute('style', 'display: none;')
            document.body.style.overflowY = 'scroll';
        }
    }
}

window.addEventListener('load', () => {
    const buttonOpenMenu = document.querySelector('#menu-open');
    buttonOpenMenu.addEventListener('click', () => openMenu());

    const buttonCloseMenu = document.querySelector('#menu-close');
    buttonCloseMenu.addEventListener('click', () => closeMenu());

    const menuLinkItems = document.querySelectorAll('#menu-item');
    menuLinkItems.forEach((link) => {
        link.addEventListener('click', () => {
            closeMenu();
        })
    })
})
const background = document.querySelector('#background');
const menu = document.querySelector('#menu');
const headerIcon = document.querySelector('#header-icon');

window.addEventListener('load', () => {
    if (headerIcon) {
        headerIcon.addEventListener('mouseenter', () => {
            headerIcon.setAttribute('src', 'assets/img/icon-hover.png')
        })
        headerIcon.addEventListener('mouseout', () => {
            headerIcon.setAttribute('src', 'assets/img/icon.png')
        })
    }

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

function platformRedirect(platform_name) {
    if (platform_name.trim() != "") {
        switch (platform_name) {
            case "VKPlay":
                window.location.replace('https://vkplay.ru/play/game/little-farmer/');
                break;
            default:
                console.error('Unknown platform.')
        }
    }
}

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

const backgroundView = document.querySelector('#background-img');
const viewWindow = document.querySelector('#screenshot');
const imgView = document.querySelector('#img-view');
const gameIMGS = document.querySelectorAll('#img');
const viewClose = document.querySelector('#screenshot-close');

window.addEventListener('load', () => {

    gameIMGS.forEach((e) => {
        e.addEventListener('click', () => {
            screenshot(e.getAttribute('img-id'));
        })
    })

    viewClose.addEventListener('click', () => screenshotClose());
})

function screenshot(id) {
    if (backgroundView.hasAttribute('style') && backgroundView.getAttribute('style') == 'display: none;') {
        console.log('test')
        backgroundView.setAttribute('style', 'display: flex;');
        imgView.setAttribute('src', '.assets/img/screenshot_'+id+'.png');
        document.body.style.overflowY = 'hidden';
    } else {
        screenshotClose();
    }
}

function screenshotClose() {
    backgroundView.setAttribute('style', 'display: none;');
    document.body.style.overflowY = 'scroll';
}
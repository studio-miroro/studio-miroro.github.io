window.addEventListener('load', () => {
    const copyrightText = document.querySelector('#copyright');

    if (copyrightText) {
        const date = new Date();
        const currentYear = date.getFullYear();
        copyrightText.innerHTML = "© " + currentYear + " Studio Miroro<br>Все права защищены.";
    }
})
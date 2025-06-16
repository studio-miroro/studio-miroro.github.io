window.addEventListener('load', () => {
    const copyrightText = document.querySelector('#copyright');

    if (copyrightText) {
        const date = new Date();
        const currentYear = date.getFullYear();
        copyrightText.innerHTML = "© " + currentYear + " <a href='https://studio-miroro.ru'>Studio Miroro</a><br>Все права защищены.";
    }
})
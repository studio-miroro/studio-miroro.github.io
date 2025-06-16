function gamePageOpen(url = '') {
    if (url.trim() != '') {
        switch (url) {
            case 'little-farmer':
                window.location.replace('little-farmer/');
                break;
            case 'delicious-bread':
                window.location.replace('https://gamejolt.com/games/deliciousbread/848434');
                break;
            default:
                console.error('Unknown game url.');
        }
    }
}
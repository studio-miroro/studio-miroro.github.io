let currentIndex = 0
let autoSlideInterval
let isVideoPlaying = false

function startAutoSlide() {
    if (!isVideoPlaying) {
        autoSlideInterval = setInterval(nextSlide, 5000)
    }
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval)
}

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner')
    const totalItems = document.querySelectorAll('.carousel-item').length

    if (index >= totalItems) {
        currentIndex = 0
    } else if (index < 0) {
        currentIndex = totalItems - 1
    } else {
        currentIndex = index
    }

    const offset = -currentIndex * 100
    carouselInner.style.transform = `translateX(${offset}%)`
}

function nextSlide() {
    stopAutoSlide()
    showSlide(currentIndex + 1)
    startAutoSlide()
}

function prevSlide() {
    stopAutoSlide()
    showSlide(currentIndex - 1)
    startAutoSlide()
}

function setupVideoListeners() {
    const iframe = document.querySelector('iframe');
    if (iframe) {
        const player = new YT.Player(iframe, {
            events: {
                'onStateChange': onPlayerStateChange
            }
        })
    }
}

// YouTube Player API
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        isVideoPlaying = true
        stopAutoSlide()
    } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
        isVideoPlaying = false
        startAutoSlide()
    }
}

// YouTube IFrame API
function loadYouTubeAPI() {
    const tag = document.createElement('script')
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
}

loadYouTubeAPI()
window.onYouTubeIframeAPIReady = setupVideoListeners
startAutoSlide()
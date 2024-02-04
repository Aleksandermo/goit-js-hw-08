import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
    const iframe = document.querySelector('iframe#vimeo-player');
    const player = new Vimeo(iframe);

const throttledUpdateLocalStorage = throttle(updateLocalStorage, 1000);

function updateLocalStorage(currentTime) {
    localStorage.setItem("videoplayer-current-time", currentTime);
}

function resumeVideoFromLocalStorage() {
    const storedTime = localStorage.getItem("videoplayer-current-time");

    if (storedTime !== null) {
        player.setCurrentTime(parseFloat(storedTime)).then(function (seconds) {
        localStorage.setItem("videoplayer-current-time", seconds);
        }).catch(function (error) {
            switch (error.name) {
                case 'RangeError':
                // Zapisany czas odtwarzania był mniejszy niż 0 lub większy niż czas trwania filmu
                break;
                default:
                // Inny błąd
                break;
                }
            });
        }
}
    
    player.on('play', function() {
        console.log('played the video!');
    });

    const onPlay = function(data) {
        const { duration, percent, seconds } = data;
        console.log('Event data:', data);

        throttledUpdateLocalStorage(seconds);
    };
    player.on('play', onPlay);

    player.getCurrentTime().then(function(currentTime) {
        localStorage.setItem("videoplayer-current-time", currentTime);
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
            // Czas odtwarzania był mniejszy niż 0 lub większy niż czas trwania filmu
            break;
            default:
            // Inny błąd
            break;
        }
    });
    resumeVideoFromLocalStorage();
});

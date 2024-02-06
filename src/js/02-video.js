import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Vimeo(document.getElementById('vimeo-player'));

// Funkcja do zapisywania czasu odtwarzania w local storage
const saveCurrentTime = time => {
  localStorage.setItem('videoplayer-current-time', time);
};

// Funkcja do ustawiania czasu odtwarzania na zapisany w local storage
const setCurrentTimeFromStorage = () => {
  const storedTime = localStorage.getItem('videoplayer-current-time');
  if (storedTime !== null) {
    player.setCurrentTime(parseFloat(storedTime));
  }
};

// Śledzenie zdarzenia timeupdate i zapisywanie czasu odtwarzania w local storage
player.on('timeupdate', throttle(data => {
  saveCurrentTime(data.seconds);
}, 1000));

// Ustawienie czasu odtwarzania na zapisany w local storage po przeładowaniu strony
window.addEventListener('load', setCurrentTimeFromStorage);


import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('iframe');

const player = new Player(iframeRef);

const LOCALSTORAGE_VIDEOPLAYER_KEY = 'videoplayer-current-time';

const currentTime =
  JSON.parse(localStorage.getItem(LOCALSTORAGE_VIDEOPLAYER_KEY)) || 0;

const onPlay = e => {
  localStorage.setItem(LOCALSTORAGE_VIDEOPLAYER_KEY, e.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(currentTime);

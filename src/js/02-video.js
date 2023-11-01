import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = e => {
  localStorage.setItem('videoplayer-current-time', e.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    console.log(seconds);
  })
  .catch(function (error) {
    console.log(error.name);
  });

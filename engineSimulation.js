import * as p5 from 'p5';
import { Howl } from 'howler';

const sketch = function sketch(p5) {
  var explosionSound;

  p5.preload = function () {
    explosionSound = new Howl({
      src: ['./explosion.mp3'],
    });
  }

  p5.setup = function () {
    const canvas = p5.createCanvas(600, 400);
    p5.frameRate(60);
  }

  var states = [1, 0, 2, 3, 2];
  var explosionSoundStarted = [false, false, false, false, false];
  var t0 = 0;
  var t1 = 0;
  var deltaTime = 0;
  var currentRPM = 800;
  p5.draw = function() {
    p5.noStroke();
    t1 = Date.now();
    deltaTime = t1 - t0;
    if (deltaTime >= (60 / currentRPM) * 1000) {
      states = states.map((state, i) => {
        if (state < 3) {
          state += 1;
        } else {
          state = 0;
        }
        if (state === 2) {
          explosionSoundStarted[i] = false;
        }
        return state;
      })
      t0 = Date.now();
    }
    states.forEach((state, i) => {
      switch(state) {
        case 0:
          // admisie
          p5.fill(180);
          break;
        case 1:
          // compresie
          p5.fill(226, 126, 50);
          break;
        case 2:
          // aprindere
          p5.fill(255, 70, 40);
          if (!explosionSoundStarted[i]) {
            // explosionSound.play(0, 1, 1, 0, 0.2);
            explosionSound.play();
            explosionSoundStarted[i] = true;
          }
          break
        case 3:
          // evacuare
          p5.fill(80);
          break;
      default:
        console.log('Wrong state!');
      }
      p5.ellipse(100 + 80 * i, 100, 50, 50);  
    });
  }
};

const sketchInstance = new p5(sketch, 'p5canvasParent');

console.log(10);

const rpmIndicator = document.getElementById('rpmShow');

document.getElementById('rpmInput').addEventListener('change', (event) => {
  currentRPM = event.target.value * 1000;
  rpmIndicator.innerHTML = currentRPM;
});
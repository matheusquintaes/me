import './style.css';
import './index.html'
import anime from 'animejs'

var lineDrawing = anime({
  targets: '#lineDrawing path, #lineDrawing polygon , #lineDrawing line ',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 100 },
  direction: 'alternate',
  loop: true 
});
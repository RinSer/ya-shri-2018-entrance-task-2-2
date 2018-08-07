import { isMobile } from './utils.js';

export function rotateSlider(target) {
    var R2D, active, angle, center, init, rotate, rotation, start, startAngle, stop;
  
    active = false;
  
    angle = 0;
  
    rotation = 0;
  
    startAngle = 0;
  
    center = {
      x: 0,
      y: 0
    };
  
    init = function() {
      target.addEventListener("mousedown", start(), false);
      target.addEventListener("touchstart", start(true), false);
      target.addEventListener("mousemove", rotate(), false);
      target.addEventListener("touchmove", rotate(true), false);
      target.addEventListener("mouseup", stop, false);
      return target.addEventListener("touchend", stop, false);
    };
  
    R2D = 180 / Math.PI;
  
    start = function(mobile = false) {
      return function(e) {
            var height, left, top, width, x, y, _ref;
            e.preventDefault();
            _ref = this.getBoundingClientRect(), top = _ref.top, left = _ref.left, height = _ref.height, width = _ref.width;
            center = {
                x: left + (width / 2),
                y: top + (height / 2)
            };
            if (mobile) {
                var touch = e.touches[0];
                x = touch.pageX - center.x;
                y = touch.pageY - center.y;
            } else {
                x = e.clientX - center.x;
                y = e.clientY - center.y;
            }
            startAngle = R2D * Math.atan2(y, x);
            return active = true;
      }
    };
  
    rotate = function(mobile = false) {
        return function(e) {
            var d, x, y;
            e.preventDefault();
            if (mobile) {
                var touch = e.touches[0];
                x = touch.pageX - center.x;
                y = touch.pageY - center.y;
            } else {
                x = e.clientX - center.x;
                y = e.clientY - center.y;
            }
            d = R2D * Math.atan2(y, x);
            rotation = d - startAngle;
            if (active) {
                var result = angle + rotation;
                console.log(result);
                return target.style.webkitTransform = "rotate(" + (angle + rotation) + "deg)";
            }
        }
    };
  
    stop = function() {
      angle += rotation;
      return active = false;
    };
  
    init();
}

export function sliderFilter() {
    var filters = document.getElementById('slider-filter').getElementsByTagName('p');
    for (var filter of filters)
        if (!filter.onclick) {
            filter.onclick = function($event) {
                var active = document.getElementsByClassName('active-slider')[0];
                if (active) active.classList.remove('active-slider');
                $event.target.classList.add('active-slider');
            }
        }
}

export function flipSlider() {
    var container = document.getElementsByClassName('simple-slider')[0];
    if (container) {
        var slider = document.getElementById('sliderRange');
        if (slider) {
            if (isMobile()) {
                slider.style.width = `${container.clientHeight}px`;
                slider.style.height = `${container.clientWidth}px`;
            } else {
                slider.style.width = `${container.clientWidth}px`;
                slider.style.height = `${container.clientHeight}px`;
            }
        }
    }
}

export function sliderAction() {
    var slider = document.getElementById('sliderRange');
    if (slider && !slider.onchange)
        slider.onchange = function() {
            var icon = document.getElementById('modal-icon');
            if (icon) {
                if (slider.value > 0)
                    icon.innerHTML = '+' + slider.value;
                else
                    icon.innerHTML = slider.value;
            }
        }
}
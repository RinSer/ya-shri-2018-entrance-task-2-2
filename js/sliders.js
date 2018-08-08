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

export function sliderFilter(setIcon = false) {
    var filters = document.getElementById('slider-filter').getElementsByTagName('p');
    for (var filter of filters)
        if (!filter.onclick) {
            filter.onclick = function($event) {
                // Change slider
                var value = $event.target.getAttribute('data-value');
                if (value) {
                    var slider = document.getElementById('sliderRange');
                    slider.value = value;
                    // Change icon text if necessary
                    if (setIcon) {
                        var icon = document.getElementById('modal-icon');
                        if (value > 0)
                            icon.innerHTML = '+' + slider.value;
                        else
                            icon.innerHTML = slider.value;
                    }
                }
                // Set filter active
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
            var sheet = document.styleSheets[document.styleSheets.length - 1];
            var rule, rule2;
            if (isMobile()) {
                slider.style.width = `${container.clientHeight}px`;
                slider.style.height = `${container.clientWidth}px`;
                rule = `
                    .theslider::-webkit-slider-thumb {
                        width: ${container.clientWidth}px;
                        height: ${container.clientWidth}px;
                        border-radius: ${Math.ceil(container.clientWidth / 2)}px;
                    }
                `;
                rule2 = `
                    .theslider::-moz-range-thumb {
                        width: ${container.clientWidth}px;
                        height: ${container.clientWidth}px;
                        border-radius: ${Math.ceil(container.clientWidth / 2)}px;
                    }
                `;
            } else {
                slider.style.width = `${container.clientWidth}px`;
                slider.style.height = `${container.clientHeight}px`;
                rule = `
                    .theslider::-webkit-slider-thumb {
                        width: ${container.clientHeight}px;
                        height: ${container.clientHeight}px;
                        border-radius: ${Math.ceil(container.clientHeight / 2)}px;
                    }
                `;
                rule2 = `
                    .theslider::-moz-range-thumb {
                        width: ${container.clientHeight}px;
                        height: ${container.clientHeight}px;
                        border-radius: ${Math.ceil(container.clientHeight / 2)}px;
                    }
                `;
            }
            if (sheet && rule && rule2) {
                if (Array.from(sheet.cssRules).map(r => r.selectorText).indexOf('.theslider::-webkit-slider-thumb') > 0)
                    sheet.insertRule(rule, sheet.cssRules.length);
                if (Array.from(sheet.cssRules).map(r => r.selectorText).indexOf('.theslider::-moz-range-thumb') > 0)
                    sheet.insertRule(rule2, sheet.cssRules.length);
            }
        }
    }
}

export function sliderAction(setIcon = false) {
    var slider = document.getElementById('sliderRange');
    if (slider && !slider.onchange)
        slider.onchange = function() {
            // Set default filter
            var active = document.getElementsByClassName('active-slider')[0];
            if (active) {
                active.classList.remove('active-slider');
                var filters = document.getElementById('slider-filter').getElementsByTagName('p');
                filters[0].classList.add('active-slider');
            }
            // Change icon if necessary
            if (setIcon) {
                var icon = document.getElementById('modal-icon');
                if (icon) {
                    if (slider.value > 0)
                        icon.innerHTML = '+' + slider.value;
                    else
                        icon.innerHTML = slider.value;
                }
            }
        }
}
export function rotateSlider(target) {
    var R2D, active, angle, center, init, rotate, rotation, start, startAngle, stop;
    
    active = false;
  
    rotation = 0;
  
    startAngle = 0;
  
    center = {
      x: 0,
      y: 0
    };

    var init_angle = getTransformAngle(target);
    if (init_angle)
        angle = init_angle;
    else angle = 0;
  
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
            startAngle = R2D * Math.atan2(y, x) + 90;
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
            d = R2D * Math.atan2(y, x) + 90;
            rotation = d - startAngle;
            if (active) {
                var result = angle + rotation;
                if (result > 136)
                    result -= 360;
                if (result < -136)
                    result += 360;
                if (result > -136 && result < 136) {
                    checkNotches();
                    var iconValue = Math.floor(map(result, -132, 132, 1, 30));
                    setIconValue(iconValue);
                    return target.style.webkitTransform = "rotate(" + (result) + "deg)";
                }
            }
        }
    };
  
    stop = function() {
        angle = getTransformAngle(target);
        return active = false;
    };
  
    init();

}

export function addNotches(iconValue = 23) {
    var container = document
        .getElementsByClassName('round-slider-container')[0];
    if (container) {
        // Get current position
        var degree = map(iconValue, 1, 30, -132, 132);
        var slider = document.getElementsByClassName('round-slider')[0];
        slider.style.webkitTransform = "rotate(" + (degree) + "deg)";
        // Remove notches if they are
        var notches = container.getElementsByClassName('round-stripe');
        for (var notch of notches)
            container.removeChild(notch);
        // Add notches
        for (var i = -132; i < 133; i += 3) {
            var div = document.createElement('div');
            div.classList.add('notch');
            var width = container.getBoundingClientRect().width;
            div.style.webkitTransform = 
                `rotate(${i}deg) translate(0, -${Math.floor(width/2)}px)`;
            if (i > degree) div.style.borderLeftColor = '#333';
            container.appendChild(div);
        }
    }
}

function setIconValue(value) {
    var icon = document.getElementById('modal-icon');
    if (value > 0)
        icon.innerHTML = `+${value}`;
    else icon.innerHTML = value;
}

function checkNotches() {
    var notches = document.getElementsByClassName('notch');
    var slider = document.getElementsByClassName('round-slider')[0];
    if (slider.style.webkitTransform && slider.style.webkitTransform.indexOf('rotate') > -1) {
        var sliderAngle = getTransformAngle(slider);
        for (var notch of notches) {
            var notchAngle = getTransformAngle(notch);
            if (notchAngle > sliderAngle)
                notch.style.borderLeftColor = '#333';
            else
                notch.style.borderLeftColor = 'orange';
        }
    }
}

function getTransformAngle(element) {
    return parseFloat(element.style.webkitTransform.match(/\-*\d+\.*\d*/g)[0]);
}

function map (num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
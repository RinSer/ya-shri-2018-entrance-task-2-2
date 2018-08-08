export function rotateSlider(target) {
    var R2D, active, angle, center, init, rotate, rotation, start, startAngle, stop;
    var hasChanged = false;
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
                var initialAngle = target.style.webkitTransform.match(/\d+\.\d+/g);
                target.style.webkitTransform = "rotate(" + (result) + "deg)";
                return checkNotches(initialAngle > result);
            }
        }
    };
  
    stop = function() {
      angle += rotation;
      return active = false;
    };
  
    init();
}

export function addNotches() {
    var container = document
        .getElementsByClassName('round-slider-container')[0];
    if (container) {
        // Remove notches if they are
        var notches = container.getElementsByClassName('round-stripe');
        for (var notch of notches)
            container.removeChild(notch);
        // Add notches
        for (var i = -135; i < 136; i += 3) {
            var div = document.createElement('div');
            div.classList.add('notch');
            var width = container.getBoundingClientRect().width;
            div.style.webkitTransform = 
                `rotate(${i}deg) translate(0, -${Math.floor(width/2)}px)`;
            if (i > 0) div.style.borderLeftColor = '#333';
            container.appendChild(div);
        }
    }
}

function checkNotches(lower) {
    var notches = document.getElementsByClassName('notch');
    var tick = document.getElementById('tick-tick');
    for (var notch of notches) {
        if (collide(tick, notch)) {
            if (lower)
                notch.style.borderLeftColor = '#333';
            else
                notch.style.borderLeftColor = 'orange';
        }
    }
}

function collide(el1, el2) {
    var first = el1.getBoundingClientRect();
    var second = el2.getBoundingClientRect();
    return !((first.bottom < second.top) ||
             (first.top > second.bottom) ||
             (first.right < second.left) ||
             (first.left > second.right))
};
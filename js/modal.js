<<<<<<< HEAD
// templates
import { modalHtml } from '../templates/modal.js';
import { roundSliderHtml, yellowSliderHtml, rainbowSliderHtml } from '../templates/sliders.js';
// functions
import { rotateSlider } from '../js/sliders.js';

export function generateModal() {
    // Find all devices and listen for modal to open
    var devices = document.getElementById('dev-container')
        .getElementsByClassName('tile');
    for (var device of devices) 
        if (!device.onclick)
            device.onclick = renderTemplate;
}

function renderTemplate($event) {
    // Restore initial modal state
    var modal = document.getElementById('modal')
    if (modal) modal.innerHTML = modalHtml;
    // Close on button press
    var button = document.getElementById('close-modal');
    if (button && !button.onclick)
        button.onclick = function() {
            var tile = document.getElementById('modal-tile');
            if (tile) tile.setAttribute('id', '');
            modal.style.visibility = 'hidden';
        }
    // Set current device tile
    var modalTile = document.getElementById('modal-tile');
    if (modalTile) modalTile.setAttribute('id', '');
    $event.target.setAttribute('id', 'modal-tile');
    setTimeout(function() {
        var title = $event.target.getElementsByTagName('h1')[0].innerHTML;
        var status = $event.target.getElementsByTagName('p')[0].innerHTML;
        var img = $event.target.style.backgroundImage;
        document.getElementById('modal-title').innerHTML = title;
        document.getElementById('modal-status').innerHTML = status;
        var icon = document.getElementById('modal-icon');
        if (icon) {
            // Add temperature if necessary
            icon.style.backgroundImage = img;
            if (img.indexOf('temperature') > 0)
                icon.innerHTML = '+23';
            else icon.innerHTML = '\u200b';
            // Add modal controller template
            var modalMain = document.getElementById('modal-main');
            if (modalMain) {
                if (img.indexOf('temperature_yellow') > 0) {
                    modalMain.innerHTML += roundSliderHtml;
                    // Round slider action
                    var slider = document.getElementsByClassName('round-slider')[0];
                    if (slider) rotateSlider(slider);
                }
                if (img.indexOf('sun') > 0)
                    modalMain.innerHTML += yellowSliderHtml;
                if (img.indexOf('temperature_grey') > 0)
                    modalMain.innerHTML += rainbowSliderHtml;
            }
        }
        modal.style.visibility = 'visible';
    }, 500);
=======
// template
import { modalHtml } from '../templates/modal.js';

export function generateModal() {
    var modal = document.getElementById('modal')
    if (modal) {
        modal.innerHTML = modalHtml;
        // Close on button press
        var button = document.getElementById('close-modal');
        if (button && !button.onclick)
            button.onclick = function() {
                var tile = document.getElementById('modal-tile');
                if (tile) tile.setAttribute('id', '');
                modal.style.visibility = 'hidden';
            }
        // Find all devices
        var devices = document.getElementById('dev-container')
            .getElementsByClassName('tile');
        for (var device of devices) 
            if (!device.onclick)
                device.onclick = function($event) {
                    var modalTile = document.getElementById('modal-tile');
                    if (modalTile) modalTile.setAttribute('id', '');
                    $event.target.setAttribute('id', 'modal-tile');
                    setTimeout(function() {
                        modal.style.visibility = 'visible';
                    }, 500);
                }
        // Round slider
        var notch = document.getElementsByClassName('notch')[0];
        if (notch) {
            notch.addEventListener('mousedown', function($event) {
                
            }, false);
        }
    }
>>>>>>> ab6845b4b78f3df8584a0f85adae818cd8047a81
}
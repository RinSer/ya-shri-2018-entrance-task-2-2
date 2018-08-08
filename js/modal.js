// templates
import { modalHtml } from '../templates/modal.js';
import { roundSliderHtml, yellowSliderHtml, rainbowSliderHtml } from '../templates/sliders.js';
// functions
import { sliderFilter, flipSlider, sliderAction } from './sliders.js';
import { rotateSlider, addNotches } from './roundSlider.js';

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
            // Remove slider styles
            var sheet = document.styleSheets[document.styleSheets.length - 1];
            var lastRule = sheet.cssRules[sheet.cssRules.length - 1];
            if (!lastRule.media)
                sheet.deleteRule(sheet.cssRules.length - 1);
            // Hide modal
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
                    addNotches();
                    // Round slider action
                    var slider = document.getElementsByClassName('round-slider')[0];
                    if (slider) rotateSlider(slider);
                }
                if (img.indexOf('sun') > 0) {
                    modalMain.innerHTML += yellowSliderHtml;
                    sliderFilter();
                    flipSlider();
                    sliderAction();
                }
                if (img.indexOf('temperature_grey') > 0) {
                    modalMain.innerHTML += rainbowSliderHtml;
                    sliderFilter(true);
                    flipSlider();
                    sliderAction(true);
                }
            }
        }
        modal.style.visibility = 'visible';
    }, 500);
}
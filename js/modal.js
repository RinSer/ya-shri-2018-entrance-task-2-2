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
}
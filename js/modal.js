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
                modal.style.visibility = 'hidden';
            }
        // Find all devices
        var devices = document.getElementById('dev-container')
            .getElementsByClassName('tile');
        for (var device of devices) 
            if (!device.onclick)
                device.onclick = function($event) {
                    modal.style.visibility = 'visible';
                }
    }
}
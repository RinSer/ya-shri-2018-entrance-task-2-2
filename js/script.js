// templates import
import { headerHtml } from '../templates/header.js';
import { footerHtml } from '../templates/footer.js';
// data blocks import
import { generateMain } from './main.js';
import { generateDevices } from './devices.js';
// functions import
import { checkMobMenu } from './mobmenu.js';

(function() {
    // Load header and footer templates
    var header = document.getElementById('header');
    if (header) header.innerHTML = headerHtml;

    var footer = document.getElementById('footer');
    if (footer) footer.innerHTML = footerHtml;

    // Load main block
    generateMain(5);

    // Load devices block
    generateDevices();

    // Add mobile menu if necessary
    checkMobMenu();
    // Remove or add mobile menu on screen resize
    window.addEventListener('resize', checkMobMenu);
})();
// templates import
import { headerHtml } from '../templates/header.js';
import { footerHtml } from '../templates/footer.js';
// data blocks import
import { generateMain } from './main.js';
import { generateScenarios } from './scenarios.js';
import { generateDevices, addFilter } from './devices.js';
import { generateModal } from './modal.js';
// functions import
import { checkMobileSize } from './mobile.js';

(function() {
    // Load header and footer templates
    var header = document.getElementById('header');
    if (header) header.innerHTML = headerHtml;

    var footer = document.getElementById('footer');
    if (footer) footer.innerHTML = footerHtml;

    // Load main block
    generateMain(5);

    // Load scenarios block
    generateScenarios(7);

    // Load devices block
    generateDevices();

    addFilter();

    // Load modal
    generateModal();

    // Add mobile menu if necessary
    checkMobileSize();
    // Remove or add mobile menu on screen resize
    window.addEventListener('resize', checkMobileSize);
})();
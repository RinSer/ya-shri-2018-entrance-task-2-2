import { headerHtml } from '../templates/header.js';
import { footerHtml } from '../templates/footer.js';
import { addMobMenu } from './mobheader.js';

(function() {

    var header = document.getElementById('header');
    if (header) header.innerHTML = headerHtml;

    var footer = document.getElementById('footer');
    if (footer) footer.innerHTML = footerHtml;
    
    // Add mob menu and listen for it to open
    if (window.innerWidth < 768) addMobMenu();

})();
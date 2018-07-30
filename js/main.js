import { headerHtml } from '../templates/header.js';
import { footerHtml } from '../templates/footer.js';

(function() {

    let header = document.getElementById('header');
    if (header) header.innerHTML = headerHtml;

    let footer = document.getElementById('footer');
    if (footer) footer.innerHTML = footerHtml;

})();
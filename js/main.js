import { headerHtml } from '../templates/header.js';
import { footerHtml } from '../templates/footer.js';
import { addMobMenu } from './mobheader.js';

(function() {

    var header = document.getElementById('header');
    if (header) header.innerHTML = headerHtml;

    var footer = document.getElementById('footer');
    if (footer) footer.innerHTML = footerHtml;
    
    checkMobMenu();

    window.addEventListener('resize', checkMobMenu);

    function checkMobMenu() {
        // Close mob menu on resize
        if (window.innerWidth > 767) 
            document.getElementById('mobnav')
                .style.display = 'none';
        else addMobMenu();
    }
})();
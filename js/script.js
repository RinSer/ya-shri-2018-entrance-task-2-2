// templates import
import { headerHtml } from '../templates/header.js';
import { footerHtml } from '../templates/footer.js';
import { mainHtml } from '../templates/main.js';
import { devicesHtml } from '../templates/devices.js';
import { tileHtml } from '../templates/tile.js';
// functions import
import { addMobMenu } from './mobheader.js';

(function() {
    // Load header and footer
    var header = document.getElementById('header');
    if (header) header.innerHTML = headerHtml;

    var footer = document.getElementById('footer');
    if (footer) footer.innerHTML = footerHtml;

    // Load main block
    var main = document.getElementById('main');
    if (main) main.innerHTML = mainHtml;

    // Load devices block
    var devices = document.getElementById('devices');
    if (devices) devices.innerHTML = devicesHtml;

    checkMobMenu();

    window.addEventListener('resize', checkMobMenu);

    function isMobile() {
        return window.innerWidth < 768;
    }

    function checkMobMenu() {
        // Close mob menu on resize
        if (!isMobile()) 
            document.getElementById('mobnav')
                .style.display = 'none';
        else addMobMenu();
    }

    // Load schedule and devices
    var schedule = document.getElementById('schedule');
    var devContainer = document.getElementById('dev-container');
    if (schedule) 
        for (var i = 0; i < 7; i++) {
            schedule.innerHTML += tileHtml;
            devContainer.innerHTML += tileHtml;
        }
    // Add scroll arrow if overflow
    // To main
    if (!isMobile() && schedule.clientHeight < schedule.scrollHeight) {
        let id = 's-scroll';
        var widget = document.getElementById('widget');
        widget.innerHTML += `<img id="${id}" src="assets/arrow_top.png" alt="scroll">`;
        document.getElementById(id).onclick = function() {
            var s = document.getElementById('schedule');
            if (Math.abs(s.scrollHeight - s.clientHeight - s.scrollTop) < 1)
                s.scrollTop = 0;
            else
                s.scrollTop += 0.05 * s.scrollHeight;
        }
    }
    // To devices
    if (!isMobile() && devContainer.clientWidth < devContainer.scrollWidth) {
        document.getElementById('arrows').style.display = 'block';
        document.getElementById('left-dev').onclick = function() {
            let container = document.getElementById('dev-container');
            container.scrollLeft -= 0.05 * container.scrollWidth;
        }
        document.getElementById('right-dev').onclick = function() {
            let container = document.getElementById('dev-container');
            container.scrollLeft += 0.05 * container.scrollWidth;
        }
    }
})();
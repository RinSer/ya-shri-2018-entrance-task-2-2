import { isMobile } from './utils.js';
import { addMainScroll } from './main.js';
import { addScenariosScroll } from './scenarios.js';
import { addDevicesScroll } from './devices.js';
import { flipSlider } from './sliders.js';
import { addNotches } from './roundSlider.js';
/**
 * Добавляет функционал мобильного меню
 */
export function checkMobileSize() {
    // Close mob menu on resize
    if (!isMobile()) {
        document.getElementById('mobnav')
            .style.display = 'none';
        addMainScroll();
        addScenariosScroll();
        addDevicesScroll();
    }
    else addMobMenu();
    // Check slider position if necessary
    flipSlider();
    // Check round slider notches
    addNotches();
}

function addMobMenu() {
    // Находим меню и мобильное меню
    var nav = document.getElementsByClassName('desktop')[0];
    var mobnav = document.getElementById('mobnav');
    mobnav.innerHTML = nav.innerHTML;
    // Удаляем логотип из списка меню
    var logo = mobnav.getElementsByTagName('li')[0];
    mobnav.removeChild(logo);
    // Следим за прикосновениями к бургеру
    var burger = document.getElementById('burger');
    if (burger && !burger.onclick)
        burger.onclick = toggleMenu;
    
    function toggleMenu() {
        if (mobnav.style.display === 'block')
            mobnav.style.display = 'none';
        else 
            mobnav.style.display = 'block';
    }
}
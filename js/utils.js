import { tileHtml } from '../templates/tile.js';
/**
 * Проверка на мобильный экран
 */
export function isMobile() {
    return window.innerWidth < 768;
}
/**
 * Добавляет шаблон панельки к элементу
 */
export function addTile(element, tileInfo) {
    element.innerHTML += tileHtml(tileInfo);
    element.lastChild.style.backgroundImage = `url(${tileInfo.icon})`;
}
/**
 * Прокрутка вправо на 5%
 */
export function scrollRight(elementId) {
    return function () {
        let container = document.getElementById(elementId);
        if (container)
            container.scrollLeft += 0.05 * container.scrollWidth;
    }
}
/**
 * Прокрутка влево на 5%
 */
export function scrollLeft(elementId) {
    return function () {
        let container = document.getElementById(elementId);
        if (container)
            container.scrollLeft -= 0.05 * container.scrollWidth;
    }
}
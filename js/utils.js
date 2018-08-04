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

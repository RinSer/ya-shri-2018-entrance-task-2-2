/**
 * Добавляет функционал мобильного меню
 */
export function addMobMenu() {
    // Находим меню и мобильное меню
    var nav = document.getElementsByClassName('desktop')[0];
    var mobnav = document.getElementById('mobnav');
    mobnav.innerHTML = nav.innerHTML;
    // Удаляем логотип из списка меню
    var logo = mobnav.getElementsByTagName('li')[0];
    mobnav.removeChild(logo);
    // Следим за прикосновениями к бургеру
    var burger = document.getElementById('burger');
    if (!burger.onclick)
        burger.onclick = toggleMenu;
    
    function toggleMenu() {
        if (mobnav.style.display === 'block')
            mobnav.style.display = 'none';
        else 
            mobnav.style.display = 'block';
    }
}
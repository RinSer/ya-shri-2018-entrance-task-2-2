export function addMobMenu() {
    var nav = document.getElementsByClassName('desktop')[0];
    var mobnav = document.getElementById('mobnav');
    mobnav.innerHTML = nav.innerHTML;
    var logo = mobnav.getElementsByTagName('li')[0];
    mobnav.removeChild(logo);
    document.getElementById('burger').onclick = function($event) {
        if (mobnav.style.display === 'none')
            mobnav.style.display = 'block';
        else 
            mobnav.style.display = 'none';
    }
}
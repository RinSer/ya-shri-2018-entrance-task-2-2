// template
import { devicesHtml } from '../templates/devices.js';
// mock data
import { getDevicesData } from './data.js';
// utilities
import { isMobile, addTile, scrollLeft, scrollRight } from './utils.js';

export function generateDevices(numTiles = 1) {
    // Devices html
    var devices = document.getElementById('devices');
    if (devices) devices.innerHTML = devicesHtml;
    // Add devices
    var devContainer = document.getElementById('dev-container');
    if (devContainer) {
        var tiles = getDevicesData();
        for (var i = 0; i < numTiles; i++)
            for (var tile of tiles)
                addTile(devContainer, tile);
    }
}

export function addDevicesScroll() {
    var devContainer = document.getElementById('dev-container');
    // Add scroll arrows if overflow on Desktop
    if (devContainer.clientWidth < devContainer.scrollWidth) {
        document.getElementById('arrows').style.display = 'block';
        var left = document.getElementById('left-dev');
        if (left && !left.onclick)
            left.onclick = scrollLeft('dev-container');
        var right = document.getElementById('right-dev');
        if (right && !right.onclick)
            right.onclick = scrollRight('dev-container');
    }
}

export function addFilter() {
    var filters = document.getElementsByClassName('filter')[0].getElementsByTagName('p');
    for (var filter of filters) {
        if (!filter.onclick)
            filter.onclick = function($event) {
                var mfilters = document.getElementsByClassName('filter')[0].getElementsByTagName('p');
                if ($event.target.classList.contains('active-filter')) {
                    if (isMobile()) {
                        for (var mfilter of mfilters)
                            mfilter.style.display = 'block';
                        document.getElementsByClassName('active-filter')[0]
                            .classList.remove('active-filter');
                    }
                } else {
                    var active = document.getElementsByClassName('active-filter')[0];
                    if (active) active.classList.remove('active-filter');
                    for (var mfilter of mfilters)
                        if (mfilter !== $event.target)
                            mfilter.style.display = 'none';
                        else mfilter.style.display = 'block';
                    $event.target.classList.add('active-filter');
                }
            }
    }
}

// template
import { devicesHtml } from '../templates/devices.js';
// mock data
import { getDevicesData } from './data.js';
// utilities
import { addTile, scrollLeft, scrollRight } from './utils.js';

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
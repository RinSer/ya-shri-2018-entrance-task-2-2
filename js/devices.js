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
    // Add scroll arrows if overflow on Desktop
    if (!isMobile() && devContainer.clientWidth < devContainer.scrollWidth) {
        document.getElementById('arrows').style.display = 'block';
        document.getElementById('left-dev').onclick = scrollLeft('dev-container');
        document.getElementById('right-dev').onclick = scrollRight('dev-container');
    }
}
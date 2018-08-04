// template
import { devicesHtml } from '../templates/devices.js';
// mock data
import { getDevicesData } from './data.js';
// utilities
import { isMobile, addTile } from './utils.js';

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
    // Add scroll arrow if overflow
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
}
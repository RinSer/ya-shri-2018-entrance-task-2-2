// template
import { mainHtml } from '../templates/main.js';
// mock data
import { getMainData } from './data.js';
// utilities
import { addTile } from './utils.js';

export function generateMain(numTiles = 1) {
    // Main html
    var main = document.getElementById('main');
    if (main) main.innerHTML = mainHtml;
    // Add scenarios to schedule
    var schedule = document.getElementById('schedule');
    if (schedule) {
        var tiles = getMainData();
        for (var i = 0; i < numTiles; i++)
            for (var tile of tiles)
                addTile(schedule, tile);
    }
}

export function addMainScroll() {
    var schedule = document.getElementById('schedule');
    // Add scroll arrow if overflow
    if (schedule.clientHeight < schedule.scrollHeight) {
        let id = 's-scroll';
        var img = document.getElementById(id);
        if (!img) {
            var widget = document.getElementById('widget');
            widget.innerHTML += `<img id="${id}" src="assets/arrow_top.png" alt="scroll">`;
            document.getElementById(id).onclick = function() {
                var s = document.getElementById('schedule');
                if (Math.abs(s.scrollHeight - s.clientHeight - s.scrollTop) < 1)
                    s.scrollTop = 0;
                else
                    s.scrollTop += 0.05 * s.scrollHeight;
            }
        } else img.style.display = 'block';
    }
}
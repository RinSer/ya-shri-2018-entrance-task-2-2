// template
import { scenariosHtml } from '../templates/scenarios.js';
// mock data
import { getScenariosData } from './data.js';
// utilities
import { addTile, scrollLeft, scrollRight } from './utils.js';

export function generateScenarios(numTiles = 1) {
    // Scenarios html
    var scenarios = document.getElementById('scenarios');
    if (scenarios) scenarios.innerHTML = scenariosHtml;
    // Add scenarios to schedule
    var container = document.getElementById('sce-container');
    if (container) {
        var tiles = getScenariosData();
        for (var i = 0; i < numTiles; i++)
            for (var tile of tiles)
                addTile(container, tile);
    }
}

export function addScenariosScroll() {
    var container = document.getElementById('sce-container');
    // Add scroll arrows if overflow on Desktop
    if (container.clientWidth < container.scrollWidth) {
        document.getElementById('sce-arrows').style.display = 'block';
        var left = document.getElementById('left-sce');
        if (left && !left.onclick)
            left.onclick = scrollLeft('sce-container');
        var right = document.getElementById('right-sce');
        if (right && !right.onclick)
            right.onclick = scrollRight('sce-container');
    }
}
// template
import { scenariosHtml } from '../templates/scenarios.js';
// mock data
import { getScenariosData } from './data.js';
// utilities
import { isMobile, addTile, scrollLeft, scrollRight } from './utils.js';

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
    // Add scroll arrows if overflow on Desktop
    if (!isMobile() && container.clientWidth < container.scrollWidth) {
        document.getElementById('sce-arrows').style.display = 'block';
        document.getElementById('left-sce').onclick = scrollLeft('sce-container');
        document.getElementById('right-sce').onclick = scrollRight('sce-container');
    }
}
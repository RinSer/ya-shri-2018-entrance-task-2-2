import { isMobile } from './utils.js';

export function sliderFilter(setIcon = false) {
    var filters = document.getElementById('slider-filter').getElementsByTagName('p');
    for (var i = 0; i < filters.length; i++)
        if (!filters[i].onclick) {
            filters[i].onclick = function($event) {
                // Change slider
                var value = $event.target.getAttribute('data-value');
                if (value) {
                    var slider = document.getElementById('sliderRange');
                    slider.value = value;
                    // Change icon text if necessary
                    if (setIcon) {
                        var icon = document.getElementById('modal-icon');
                        if (value > 0)
                            icon.innerHTML = '+' + slider.value;
                        else
                            icon.innerHTML = slider.value;
                    }
                }
                // Set filter active
                var active = document.getElementsByClassName('active-slider')[0];
                if (active) active.classList.remove('active-slider');
                $event.target.classList.add('active-slider');
            }
        }
}

export function flipSlider() {
    var container = document.getElementsByClassName('simple-slider')[0];
    if (container) {
        var slider = document.getElementById('sliderRange');
        if (slider) {
            var sheet = document.styleSheets[document.styleSheets.length - 1];
            var rule, rule2;
            if (isMobile()) {
                slider.style.width = `${container.clientHeight}px`;
                slider.style.height = `${container.clientWidth}px`;
                rule = `
                    .theslider::-webkit-slider-thumb {
                        width: ${container.clientWidth}px;
                        height: ${container.clientWidth}px;
                    }
                `;
                rule2 = `
                    .theslider::-moz-range-thumb {
                        width: ${container.clientWidth}px;
                        height: ${container.clientWidth}px;
                    }
                `;
            } else {
                slider.style.width = `${container.clientWidth}px`;
                slider.style.height = `${container.clientHeight}px`;
                rule = `
                    .theslider::-webkit-slider-thumb {
                        width: ${container.clientHeight}px;
                        height: ${container.clientHeight}px;
                    }
                `;
                rule2 = `
                    .theslider::-moz-range-thumb {
                        width: ${container.clientHeight}px;
                        height: ${container.clientHeight}px;
                    }
                `;
            }
            if (sheet && rule && rule2) {
                if (Array.from(sheet.cssRules).map(r => r.selectorText).indexOf('.theslider::-webkit-slider-thumb') > 0)
                    sheet.insertRule(rule, sheet.cssRules.length);
                if (Array.from(sheet.cssRules).map(r => r.selectorText).indexOf('.theslider::-moz-range-thumb') > 0)
                    sheet.insertRule(rule2, sheet.cssRules.length);
            }
        }
    }
}

export function sliderAction(setIcon = false) {
    var slider = document.getElementById('sliderRange');
    if (slider && !slider.onchange)
        slider.onchange = function() {
            // Set default filter
            var active = document.getElementsByClassName('active-slider')[0];
            if (active) {
                active.classList.remove('active-slider');
                var filters = document.getElementById('slider-filter').getElementsByTagName('p');
                filters[0].classList.add('active-slider');
            }
            // Change icon if necessary
            if (setIcon) {
                var icon = document.getElementById('modal-icon');
                if (icon) {
                    if (slider.value > 0)
                        icon.innerHTML = '+' + slider.value;
                    else
                        icon.innerHTML = slider.value;
                }
            }
        }
}
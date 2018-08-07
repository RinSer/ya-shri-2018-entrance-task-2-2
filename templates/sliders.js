export var roundSliderHtml = `
<div class="round-slider-container">
    <div id="round-notches"></div>
    <div class="round-slider-skeleton round-slider-shadow"></div>
    <div class="round-slider-skeleton round-slider">
        <div class="notch"></div>
    </div>
</div>
`;

export var yellowSliderHtml = `
<div class="slider-container">
    <div id="slider-filter">
        <div class="slider-filter-row">
            <p class="active-slider">Вручную</p>
            <p>Дневной свет</p>
            <p>Вечерний свет</p>
            <p>Рассвет</p>
        </div>
    </div>
    <div class="slider-slider">
        <div class="simple-slider yellow-slider">
            <input type="range" min="1" max="100" value="50" class="theslider" id="sliderRange">
        </div>
    </div>
</div>
`;

export var rainbowSliderHtml = `
<div class="slider-container">
    <div id="slider-filter">
        <div class="slider-filter-row">
            <p class="active-slider">Вручную</p>
            <p>Холодно</p>
            <p>Тепло</p>
            <p>Жарко</p>
        </div>
    </div>
    <div class="slider-slider">
        <div class="simple-slider rainbow-slider">
            <input type="range" min="-10" max="30" value="23" class="theslider" id="sliderRange">
        </div>
    </div>
</div>
`;
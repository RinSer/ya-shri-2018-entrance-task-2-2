export function tileHtml(tileInfo) {
    return `
    <div class="tile">
        <div class="tile-info">
            <h1>${tileInfo.title}</h1>
            <p>${tileInfo.message}</p>
        </div>
    </div>`;
}


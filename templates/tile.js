export function tileHtml(tileInfo) {
    var template = `
    <div class="tile">
        <div class="tile-info">
            <h1>${tileInfo.title}</h1>
            <p>${tileInfo.message}</p>
        </div>
    </div>`;
    // Remove empty message
    if (tileInfo.message === undefined) {
        template = template.replace(/\<p\>.+\<\/p\>/, '');
    }
    return template;
}


module.exports = function ( text ) {
    var prop =
        'textContent' in this && 'textContent' ||
        'innerText' in this && 'innerText' ||
        'innerHTML';

    // Set innerHTML
    if( arguments.length === 1 && typeof text !== 'undefined' ) {
        this[ prop ] = text;
        return this;
    }

    return this[ prop ] || '';
};
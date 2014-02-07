/**
 * saveMetadataJson
 * Date: 05.02.14
 * Vitaliy V. Makeev (w.makeev@gmail.com)
 */

var tools = require('../tools'),
    JSON = require('JSON');

module.exports = function (photoFile) {

    var frame = tools.calculateFrame(Units.PERCENT);

    var bounds = '[' + [
        frame.left.value   / 100,
        frame.top.value    / 100,
        frame.right.value  / 100 - 1,
        frame.bottom.value / 100 - 1
    ].join() + ']';

    var oldUnits = preferences.rulerUnits;
    preferences.rulerUnits = Units.PIXELS;

    var metadataJson = {
        ImageDescription: {
            viewBounds: bounds,
            baseBounds: bounds,
            baseBoundsDefined: true,
            width: activeDocument.width.value,
            height: activeDocument.height.value
        }
    };

    preferences.rulerUnits = oldUnits;

    var file = new File(photoFile.fsName.slice(0, -5) + '.jsn');
    if (file.open('w')) {
        file.write(JSON.stringify(metadataJson));
        file.close();
    }
};
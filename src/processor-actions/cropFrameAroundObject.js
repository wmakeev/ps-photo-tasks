/**
 * cropFrameAroundObject
 * Date: 05.02.14
 * Vitaliy V. Makeev (w.makeev@gmail.com)
 */

var cropAction = require('../photoshop-actions').crop,
    tools = require('../tools');

/**
 * Создает рамку вокруг объекта съемки
 * @param actionInfo
 */
module.exports = function (actionInfo) {

    var frame           = tools.calculateFrame(),
        zeroUnitValue   = '0 ' + tools.getRulerTypeAbbreviation(),
        zeroUnit        = UnitValue(zeroUnitValue);

    var cropData = {
        bounds: {

            left:   frame.left   != zeroUnit ?
                frame.left   - UnitValue(actionInfo.size.left   || zeroUnitValue) : frame.left,

            top:    frame.top    != zeroUnit ?
                frame.top    - UnitValue(actionInfo.size.top    || zeroUnitValue) : frame.top,

            right:  frame.right  != activeDocument.width ?
                frame.right  + UnitValue(actionInfo.size.right  || zeroUnitValue) : frame.right,

            bottom: frame.bottom != activeDocument.height ?
                frame.bottom + UnitValue(actionInfo.size.bottom || zeroUnitValue) : frame.bottom

        }
    };

    cropAction(cropData);

    return true;
};
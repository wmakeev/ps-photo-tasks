/**
 * cropFrameAroundObject
 * Date: 05.02.14
 * Vitaliy V. Makeev (w.makeev@gmail.com)
 */

var cropAction = require('../photoshop-actions').crop,
    tools = require('../tools'),
    ruler = require('../tools/ruler');

/**
 * Создает рамку вокруг объекта съемки
 * @param actionInfo
 */
module.exports = function (actionInfo) {
    //TODO Должна быть возможность устнавливать различные размерности для каждой из сторон!
    ruler.setRulerUnits(actionInfo.size.left);

    var zeroUnitValue   = '0 ' + tools.getRulerTypeAbbreviation(),
        zeroUnit        = UnitValue(zeroUnitValue),
        frame;

    frame = tools.calculateFrame();

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

    ruler.resetRuler();

    cropAction(cropData);

    return true;
};
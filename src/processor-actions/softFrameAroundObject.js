/**
 * softFrameAroundObject
 * Date: 05.02.14
 * Vitaliy V. Makeev (w.makeev@gmail.com)
 */

var tools = require('../tools'),
    gradientAction = require('../photoshop-actions').gradient,
    getUnitsTypeByAbbreviation = require('../tools').getUnitsTypeByAbbreviation;

/**
 * Накладывает градиент от 0% до 100% прозрачности
 * @param actionInfo
 */
module.exports = function (actionInfo) {

    var defaultFrameSize,
        frame               = tools.calculateFrame(),
        zeroUnit            = new UnitValue(0, tools.getRulerTypeAbbreviation()),
        curFrame,
        oldUnits = preferences.rulerUnits;

    defaultFrameSize = actionInfo.defaultSize ?
        UnitValue(actionInfo.defaultSize) :
        null;

    if (defaultFrameSize)
        preferences.rulerUnits = getUnitsTypeByAbbreviation(defaultFrameSize.type);

    // left gradient
    curFrame = frame.left != zeroUnit ? frame.left : defaultFrameSize;
    if (curFrame)
        gradientAction({
            from: [zeroUnit, zeroUnit],
            to:   [curFrame, zeroUnit]
        });

    // top gradient
    curFrame = frame.top != zeroUnit ? frame.top : defaultFrameSize;
    if (curFrame)
        gradientAction({
            from: [zeroUnit, zeroUnit],
            to:   [zeroUnit, curFrame]
        });

    // right gradient
    curFrame = frame.right != zeroUnit ?
        frame.right : defaultFrameSize ? activeDocument.width - defaultFrameSize : null;
    if (curFrame)
        gradientAction({
            from: [activeDocument.width, zeroUnit],
            to:   [curFrame, zeroUnit]
        });

    // bottom gradient
    curFrame = frame.bottom != zeroUnit ?
        frame.bottom : defaultFrameSize ? activeDocument.width - defaultFrameSize : null;
    if (curFrame)
        gradientAction({
            from: [zeroUnit, activeDocument.height],
            to:   [zeroUnit, curFrame]
        });

    if (defaultFrameSize) {
        preferences.rulerUnits = oldUnits;
    }
};
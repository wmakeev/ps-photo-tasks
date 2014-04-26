/**
 * calculateFrame
 * Date: 05.02.14
 * Vitaliy V. Makeev (w.makeev@gmail.com)
 */

var getRulerTypeAbbreviation = require('./getRulerTypeAbbreviation'),
    getUnitsTypeByAbbreviation = require('./getUnitsTypeByAbbreviation'),
    ruler = require('./ruler');

/**
 * Возвращает координаты (UnitValue) самых крайних направляющих.
 * Если направляющая не указана, то берутся границы кадра.
 * Горизонтальная направляющая может быть одна, в этом случае, она считается нижней.
 * @returns {{left: UnitValue, right: UnitValue, top: UnitValue, bottom: UnitValue}}
 */
module.exports = function (units) {
    var oldUnits = preferences.rulerUnits;
        docRef = activeDocument;

    //TODO  Использовать ruler.setRulerUnits(...);
    if (units) ruler.setRulerUnits(units);

    var guides = activeDocument.guides,
        zeroUnit = UnitValue('0 ' + getRulerTypeAbbreviation()),
        vrtGuides = [],
        hrzGuides = [];

    // Разделяем направляющие по типу
    for (var i = 0, len = guides.length; i < len; i++) {
        var guid = guides[i];
        guid.direction == 'Direction.VERTICAL' ?
            vrtGuides.push(guid) :
            hrzGuides.push(guid);
    }
    var guidesComparer = function (a, b) {
        return a.coordinate.as('px') - b.coordinate.as('px');
    };
    vrtGuides.sort(guidesComparer);
    hrzGuides.sort(guidesComparer);

    // Рамка по умолчанию соответствует границам документа
    var frame = {
        left:   zeroUnit,
        right:  docRef.width,
        top:    zeroUnit,
        bottom: docRef.height
    };

    // Обязательное наличие двух вертикальных направляющих для задания по ним рамки
    if (vrtGuides.length > 1) {
        frame.left =  vrtGuides[0].coordinate;
        frame.right = vrtGuides[vrtGuides.length - 1].coordinate;
    }

    // Горизонтальная направляющая может быть одна (нижняя)
    if (hrzGuides.length > 0) {
        frame.bottom =  hrzGuides[hrzGuides.length - 1].coordinate;
        if (hrzGuides.length > 1) {
            frame.top = hrzGuides[0].coordinate;
        }
    }

    if (units) ruler.resetRuler();

    return frame;
};
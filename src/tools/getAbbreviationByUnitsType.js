/**
 * getAbbreviationByUnitsType
 * Date: 07.02.14
 * Vitaliy V. Makeev (w.makeev@gmail.com)
 */

module.exports = function (UnitsType) {
    switch (UnitsType) {
        case Units.CM:
            return 'cm';
        case Units.INCHES:
            return 'in';
        case Units.MM:
            return 'mm';
        case Units.PERCENT:
            return '%';
        case Units.PICAS:
            return 'pc';
        case Units.PIXELS:
            return 'px';
        case Units.POINTS:
            return 'pt';
        default:
            throw 'Тип не поддерживается [' + preferences.rulerUnits + ']';
    }
};
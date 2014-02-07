/**
 * getUnitsTypeByAbbreviation
 * Date: 07.02.14
 * Vitaliy V. Makeev (w.makeev@gmail.com)
 */

//TODO Может быть есть встроенный метод для этой цели?
module.exports = function (abbreviation) {
    switch (abbreviation) {
        case 'cm':
            return Units.CM;
        case 'in':
            return Units.INCHES;
        case 'mm':
            return Units.MM;
        case '%':
            return Units.PERCENT;
        case 'pc':
            return Units.PICAS;
        case 'px':
            return Units.PIXELS;
        case 'pt':
            return Units.POINTS;
        default:
            throw 'Аббревиатура не определена [' + abbreviation + ']';
    }
};

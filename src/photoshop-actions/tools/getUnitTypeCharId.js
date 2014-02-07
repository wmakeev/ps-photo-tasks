/**
 * getUnitTypeCharId
 * Date: 05.02.14
 * Vitaliy V. Makeev (w.makeev@gmail.com)
 */

module.exports = function (unitType) {
    switch (unitType.type) {
        case '%':
            return '#Prc';
        case 'px':
            return '#Pxl';
        case 'in':
        case 'cm':
            return '#Rlt';
        default:
            throw 'Тип не поддерживается [' + unitType.type + ']';
    }
};
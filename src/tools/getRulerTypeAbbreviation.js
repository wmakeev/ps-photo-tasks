/**
 * getRulerTypeAbbreviation
 * Date: 07.02.14
 * Vitaliy V. Makeev (w.makeev@gmail.com)
 */

var getAbbreviationByUnitsType = require('./getAbbreviationByUnitsType');

module.exports = function () {
    return getAbbreviationByUnitsType(preferences.rulerUnits);
};

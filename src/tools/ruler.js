/**
 * ruler
 * Date: 21.02.14
 * Vitaliy V. Makeev (w.makeev@gmail.com)
 */

var getUnitsTypeByAbbreviation = require('./getUnitsTypeByAbbreviation');

var _activeUnit = null;


module.exports = {

    saveRulerUnits: function () {
        this.setRulerUnits(preferences.rulerUnits);
    },

    setRulerUnits: function (units) {
        var newUnits;
        if (units) {
            var u = (units + '').split('.'); // 'Units.PX'
            if (u.length == 2 && u[0] == 'Units' && u[1] in Units) {
                newUnits = units;
            } else if (typeof units === 'string') {
                newUnits = getUnitsTypeByAbbreviation(UnitValue(units).type);
            } else if (units instanceof UnitValue) {
                newUnits = getUnitsTypeByAbbreviation(units.type);
            } else {
                throw 'setRulerUnits: not supported [units] argument format'
            }
            if (preferences.rulerUnits !== newUnits) preferences.rulerUnits = newUnits;
        } else {
            throw new Error('setRulerUnits: [units] argument not specified')
        }

        if (!_activeUnit) _activeUnit = preferences.rulerUnits;

    },

    resetRuler: function () {
        if (_activeUnit) {
            preferences.rulerUnits = _activeUnit;
        }
        _activeUnit = null;
    }

};
/**
 * crop
 * Date: 05.02.14
 * Vitaliy V. Makeev (w.makeev@gmail.com)
 */

var getUnitTypeCharId = require('./tools/getUnitTypeCharId');

/**
 * Apply crop;
 * @param {{ bounds: {
 *   left: UnitValue,
 *   top: UnitValue,
 *   left: UnitValue,
 *   bottom: UnitValue
 * } }} data
 */
module.exports = function (data) {

    var idCrop, desc317, idT, desc318, idTop, idPrc, idLeft, idBtom,
        idRght, idRctn, idAngl, idAng, idDlt,
        idcropAspectRatioModeKey, idcropAspectRatioModeClass, idunconstrained;

    idCrop = charIDToTypeID( "Crop" );

    desc317 = new ActionDescriptor();
    idT = charIDToTypeID( "T   " );
    desc318 = new ActionDescriptor();

    idTop = charIDToTypeID( "Top " );
    idPrc = charIDToTypeID( getUnitTypeCharId(data.bounds.top) );
    desc318.putUnitDouble( idTop, idPrc, data.bounds.top.value );

    idLeft = charIDToTypeID( "Left" );
    idPrc = charIDToTypeID( getUnitTypeCharId(data.bounds.left) );
    desc318.putUnitDouble( idLeft, idPrc, data.bounds.left.value );

    idBtom = charIDToTypeID( "Btom" );
    idPrc = charIDToTypeID( getUnitTypeCharId(data.bounds.bottom) );
    desc318.putUnitDouble( idBtom, idPrc, data.bounds.bottom.value );

    idRght = charIDToTypeID( "Rght" );
    idPrc = charIDToTypeID( getUnitTypeCharId(data.bounds.right) );
    desc318.putUnitDouble( idRght, idPrc, data.bounds.right.value );

    idRctn = charIDToTypeID( "Rctn" );
    desc317.putObject( idT, idRctn, desc318 );

    idAngl = charIDToTypeID( "Angl" );
    idAng = charIDToTypeID( "#Ang" );
    desc317.putUnitDouble( idAngl, idAng, 0.000000 );
    idDlt = charIDToTypeID( "Dlt " );
    desc317.putBoolean( idDlt, false );
    idcropAspectRatioModeKey = stringIDToTypeID( "cropAspectRatioModeKey" );
    idcropAspectRatioModeClass = stringIDToTypeID( "cropAspectRatioModeClass" );
    idunconstrained = stringIDToTypeID( "unconstrained" );
    desc317.putEnumerated( idcropAspectRatioModeKey, idcropAspectRatioModeClass, idunconstrained );

    executeAction( idCrop, desc317, DialogModes.NO );

};
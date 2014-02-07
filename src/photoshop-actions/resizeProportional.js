/**
 * resizeProportional
 * Date: 05.02.14
 * Vitaliy V. Makeev (w.makeev@gmail.com)
 */

/**
 * Proportional resize (
 * @param {{
 *  newSize: UnitValue,
 *  direction: Direction
 * }} resize
 */
module.exports = function (resize) {
    var idImgS, desc456, idDir, idPxl, idscaleStyles, idCnsP, idIntr, idIntp, idbicubicAutomatic;

    //TODO Добавить масштабирование во всех единицах измерения
    idImgS = charIDToTypeID( "ImgS" );
    desc456 = new ActionDescriptor();
    idDir = charIDToTypeID( resize.direction === Direction.HORIZONTAL ? "Wdth" : "Hght" );
    idPxl = charIDToTypeID( "#Pxl" );
    desc456.putUnitDouble( idDir, idPxl, resize.newSize.value );
    idscaleStyles = stringIDToTypeID( "scaleStyles" );
    desc456.putBoolean( idscaleStyles, true );
    idCnsP = charIDToTypeID( "CnsP" );
    desc456.putBoolean( idCnsP, true );
    idIntr = charIDToTypeID( "Intr" );
    idIntp = charIDToTypeID( "Intp" );
    idbicubicAutomatic = stringIDToTypeID( "bicubicAutomatic" );
    desc456.putEnumerated( idIntr, idIntp, idbicubicAutomatic );

    executeAction( idImgS, desc456, DialogModes.NO );
};

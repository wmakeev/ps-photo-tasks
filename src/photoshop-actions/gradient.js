/**
 * fillGradient
 * Date: 05.02.14
 * Vitaliy V. Makeev (w.makeev@gmail.com)
 */

var getUnitTypeCharId = require('./tools/getUnitTypeCharId');

/**
 * Apply gradient to active document
 * @param {{ from: Array, to: Array }} data
 */
module.exports = function (data) {
    var desc64 = new ActionDescriptor(),
        idGrdn, idFrom;
    idFrom = charIDToTypeID( "From" );

    var desc65 = new ActionDescriptor(),
        idHrzn, idUnt, idVrtc, idPnt, idT;
    idHrzn = charIDToTypeID( "Hrzn" );
    idUnt = charIDToTypeID( getUnitTypeCharId(data.from[0]) );
    desc65.putUnitDouble( idHrzn, idUnt, data.from[0].value );
    idVrtc = charIDToTypeID( "Vrtc" );
    idUnt = charIDToTypeID( getUnitTypeCharId(data.from[1]) );
    desc65.putUnitDouble( idVrtc, idUnt, data.from[1].value );
    idPnt = charIDToTypeID( "Pnt " );
    desc64.putObject( idFrom, idPnt, desc65 );
    idT = charIDToTypeID( "T   " );

    var desc66 = new ActionDescriptor(),
        idType, idGrdT, idLnr, idDthr, idUsMs, idGrad;
    idHrzn = charIDToTypeID( "Hrzn" );
    idUnt = charIDToTypeID( getUnitTypeCharId(data.to[0]) );
    desc66.putUnitDouble( idHrzn, idUnt, data.to[0].value );
    idVrtc = charIDToTypeID( "Vrtc" );
    idUnt = charIDToTypeID( getUnitTypeCharId(data.to[1]) );
    desc66.putUnitDouble( idVrtc, idUnt, data.to[1].value );
    idPnt = charIDToTypeID( "Pnt " );
    desc64.putObject( idT, idPnt, desc66 );
    idType = charIDToTypeID( "Type" );
    idGrdT = charIDToTypeID( "GrdT" );
    idLnr = charIDToTypeID( "Lnr " );
    desc64.putEnumerated( idType, idGrdT, idLnr );
    idDthr = charIDToTypeID( "Dthr" );
    desc64.putBoolean( idDthr, true );
    idUsMs = charIDToTypeID( "UsMs" );
    desc64.putBoolean( idUsMs, true );
    idGrad = charIDToTypeID( "Grad" );

    var desc67 = new ActionDescriptor(),
        idNm, idGrdF, idCstS, idIntr, idClrs, list13;
    idNm = charIDToTypeID( "Nm  " );
    desc67.putString( idNm, '$$$/DefaultGradient/ForegroundToTransparent=Foreground to Transparent' );
    idGrdF = charIDToTypeID( "GrdF" );
    idGrdF = charIDToTypeID( "GrdF" );
    idCstS = charIDToTypeID("CstS");
    desc67.putEnumerated( idGrdF, idGrdF, idCstS );
    idIntr = charIDToTypeID( "Intr" );
    desc67.putDouble( idIntr, 4096.000000 );
    idClrs = charIDToTypeID( "Clrs" );
    list13 = new ActionList();

    var desc68 = new ActionDescriptor(),
        idClry, idFrgC, idLctn, idMdpn, idClrt;
    idType = charIDToTypeID( "Type" );
    idClry = charIDToTypeID( "Clry" );
    idFrgC = charIDToTypeID( "FrgC" );
    desc68.putEnumerated( idType, idClry, idFrgC );
    idLctn = charIDToTypeID( "Lctn" );
    desc68.putInteger( idLctn, 0 );
    idMdpn = charIDToTypeID( "Mdpn" );
    desc68.putInteger( idMdpn, 50 );
    idClrt = charIDToTypeID( "Clrt" );
    list13.putObject( idClrt, desc68 );

    var desc69 = new ActionDescriptor(),
        idTrns, list14;
    idType = charIDToTypeID( "Type" );
    idClry = charIDToTypeID( "Clry" );
    idFrgC = charIDToTypeID( "FrgC" );
    desc69.putEnumerated( idType, idClry, idFrgC );
    idLctn = charIDToTypeID( "Lctn" );
    desc69.putInteger( idLctn, 4096 );
    idMdpn = charIDToTypeID( "Mdpn" );
    desc69.putInteger( idMdpn, 50 );
    idClrt = charIDToTypeID( "Clrt" );
    list13.putObject( idClrt, desc69 );
    desc67.putList( idClrs, list13 );
    idTrns = charIDToTypeID( "Trns" );
    list14 = new ActionList();

    var desc70 = new ActionDescriptor(),
        idOpct, idPrc, idTrnS;
    idOpct = charIDToTypeID( "Opct" );
    idPrc = charIDToTypeID( "#Prc" );
    desc70.putUnitDouble( idOpct, idPrc, 100.000000 );
    idLctn = charIDToTypeID( "Lctn" );
    desc70.putInteger( idLctn, 0 );
    idMdpn = charIDToTypeID( "Mdpn" );
    desc70.putInteger( idMdpn, 50 );
    idTrnS = charIDToTypeID( "TrnS" );
    list14.putObject( idTrnS, desc70 );

    var desc71 = new ActionDescriptor();
    idOpct = charIDToTypeID( "Opct" );
    idPrc = charIDToTypeID( "#Prc" );
    desc71.putUnitDouble( idOpct, idPrc, 0.000000 );
    idLctn = charIDToTypeID( "Lctn" );
    desc71.putInteger( idLctn, 4096 );
    idMdpn = charIDToTypeID( "Mdpn" );
    desc71.putInteger( idMdpn, 50 );
    idTrnS = charIDToTypeID( "TrnS" );
    list14.putObject( idTrnS, desc71 );
    desc67.putList( idTrns, list14 );
    idGrdn = charIDToTypeID( "Grdn" );
    desc64.putObject( idGrad, idGrdn, desc67 );

    executeAction( idGrdn, desc64, DialogModes.NO );
};
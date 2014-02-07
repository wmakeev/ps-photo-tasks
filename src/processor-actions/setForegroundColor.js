/**
 * setForegroundColor
 * Date: 05.02.14
 * Vitaliy V. Makeev (w.makeev@gmail.com)
 */


module.exports = function (actionInfo) {

    var solidColorRef = new SolidColor();

    //TODO Добавить hexValue
    // solidColorRef.rgb.hexValue = actionInfo.RGB;

    solidColorRef.rgb.red   = actionInfo.color[0];
    solidColorRef.rgb.green = actionInfo.color[1];
    solidColorRef.rgb.blue  = actionInfo.color[2];

    app.foregroundColor = solidColorRef;

    return true;
};



/*var idsetd, desc123, idnull, ref8, idClr, idFrgC, idT, desc124,
 idRd, idGrn, idBl, idRGBC, idSrce;

 idsetd = charIDToTypeID("setd");
 desc123 = new ActionDescriptor();
 idnull = charIDToTypeID("null");
 ref8 = new ActionReference();
 idClr = charIDToTypeID("Clr ");
 idFrgC = charIDToTypeID("FrgC");
 ref8.putProperty(idClr, idFrgC);
 desc123.putReference(idnull, ref8);
 idT = charIDToTypeID("T   ");
 desc124 = new ActionDescriptor();
 idRd = charIDToTypeID("Rd  ");
 desc124.putDouble(idRd, color.RGB[0]);
 idGrn = charIDToTypeID("Grn ");
 desc124.putDouble(idGrn, color.RGB[1]);
 idBl = charIDToTypeID("Bl  ");
 desc124.putDouble(idBl, color.RGB[2]);
 idRGBC = charIDToTypeID("RGBC");
 desc123.putObject(idT, idRGBC, desc124);
 idSrce = charIDToTypeID("Srce");
 desc123.putString(idSrce, "photoshopPicker");

 executeAction(idsetd, desc123, DialogModes.NO);*/
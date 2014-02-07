/**
 * generateCatalogImages
 * Date: 06.02.14
 * Vitaliy V. Makeev (w.makeev@gmail.com)
 */

var tools = require('../tools'),
    savePhotoView = require(('./savePhotoView')),
    saveMetadataJson = require('./saveMetadataJson');

var actions = require('../photoshop-actions');

module.exports = function (photoSet, viewItem, sizes) {

    //TODO Можно узнать размер в пикселях без изменения размерности линейки?
    //TODO Нужно ли преобразовывать размерность перед операцией масштабирования?

    var docRef = activeDocument,
        oldUnits = preferences.rulerUnits;

    // Генерируем размеры
    for (var size_i = 0, sizes_len = viewItem.sizes.length; size_i < sizes_len; size_i++) {
        var sizeType    = sizes[viewItem.sizes[size_i]],
            //TODO Реализовано только maxWidth и maxHeight
            maxWidth    = new UnitValue(sizeType.size.maxWidth),
            maxHeight   = new UnitValue(sizeType.size.maxHeight);

        preferences.rulerUnits =
            tools.getUnitsTypeByAbbreviation(maxWidth.type);

        var resizeDirection,
            resizeValue = null,
            width_k  = docRef.width  / maxWidth,
            height_k = docRef.height / maxHeight;

        if (width_k > height_k) {
            resizeDirection = Direction.HORIZONTAL;
            if (docRef.width > maxWidth)    resizeValue = maxWidth;
        } else {
            resizeDirection = Direction.VERTICAL;
            if (docRef.height > maxHeight)  resizeValue = maxHeight;
        }

        // Сохраняем текущее состояние, чтобы вернуться после изменений
        var savedState = docRef.activeHistoryState;

        if (resizeValue) actions.resizeProportional({
            doc:        docRef,
            direction:  resizeDirection,
            newSize:    resizeValue
        });

        var savedFile = savePhotoView({
            doc:      docRef,
            photoSet: photoSet,
            view:     viewItem,
            sizeType: sizeType
        });

        saveMetadataJson(savedFile);

        // Восстанавливаем состояние
        docRef.activeHistoryState = savedState;

    } // sizeInfos

    preferences.rulerUnits = oldUnits;

};
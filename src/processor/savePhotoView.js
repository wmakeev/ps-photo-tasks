/**
 * savePhotoView
 * Date: 05.02.14
 * Vitaliy V. Makeev (w.makeev@gmail.com)
 */

var settings = require('../settings');

/**
 * Сохраняет текущее фото
 * @param {{
 *  doc: Object,
 *  item: Object,
 *  view: Object
 * }} data
 * @return file
 */
module.exports = function (data) {
    var doc      = data.doc,
        photoSet = data.photoSet,
        view     = data.view,
        sizeType = data.sizeType;

    //TODO Формировать имя файла согласно настройкам (нужно подключать шаблонизатор)
    // /front-base.jpg
    var fileName = [view.name, 'base'].join('-') + '.jpeg';

    // Полный путь к файлу
    // [path]/4955
    var imgFolder = new Folder([settings.productPhotosPath, photoSet.code].join('/'));

    var file = new File([imgFolder.fsName, fileName].join('/'));

    if (!imgFolder.exist) imgFolder.create();
    // folder.changePath('../');

    //TODO Пока реализовно сохранение только в JPEG
    var jpgSaveOptions = new JPEGSaveOptions();
    jpgSaveOptions.embedColorProfile = false;
    jpgSaveOptions.formatOptions = FormatOptions.OPTIMIZEDBASELINE;
    jpgSaveOptions.matte = MatteType.WHITE;
    jpgSaveOptions.quality = sizeType.file.quality || 8;

    //$.writeln(file.fsName);
    doc.saveAs(file, jpgSaveOptions, true, Extension.LOWERCASE);

    return file;
};
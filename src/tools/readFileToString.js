/**
 * readFileToString
 * Date: 05.02.14
 * Vitaliy V. Makeev (w.makeev@gmail.com)
 */

/**
 * Читает файл по указанному пути
 */
module.exports = function (filePath) {

    var file = new File(filePath);

    if (file.open('r')) {
        var data = file.read();
        file.close();
        return data;
    } else {
        return null;
    }

};


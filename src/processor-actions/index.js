/**
 * actions
 * Date: 05.02.14
 * Vitaliy V. Makeev (w.makeev@gmail.com)
 */

// TODO Загружать в дальнейшем функции из отдельного файла

module.exports = {

    cropFrameAroundObject: require('./cropFrameAroundObject'),

    softFrameAroundObject: require('./softFrameAroundObject'),

    setForegroundColor: require('./setForegroundColor'),

    test: function () {
        $.writeln ('1234');
    }

};
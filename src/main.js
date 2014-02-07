/**
 * main
 * Date: 05.02.14
 * Vitaliy V. Makeev (w.makeev@gmail.com)
 */

var settings = require('./settings'),
    processor = require('./processor'),
    JSON = require('JSON'),
    tools = require('./tools');

/**
 * Получает текущую задачу
 * @returns {{name: string, items: Array}}
 */
function loadActiveTask() {
    var taskJson = tools.readFileToString(settings.taskFilePath + '/photoProcessorTask.json');
    return JSON.parse(taskJson);
}

// Закрываем открытые документы
while (app.documents && app.documents.length > 0) {
    activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}

var task = loadActiveTask();
processor.processTask(task);

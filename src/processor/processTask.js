/**
 * processTask
 * Date: 05.02.14
 * Vitaliy V. Makeev (w.makeev@gmail.com)
 */

var settings = require('../settings'),
    actions = require('../processor-actions'),
    generateCatalogImages = require('./generateCatalogImages'),
    log = require('logger');

/**
 * Запускает обработку текущего задания
 * @param {{
 *     [defaults]: {
 *         [applyActions]: Array,
 *         [sizes]: Array
 *     },
 *     photoSets: [
 *         {
 *             views: [
 *                {
 *                    name: String,
 *                    path: String,
 *                    fileName: String
 *                 }
 *             ]
 *         }
 *     ],
 *     actions: Object,
 *     [sizes]: Object
 * }} task
 */
module.exports = function processTask(task) {

    // process task photosets
    for (var taskItem_i = 0, taskItems_len = task.photoSets.length; taskItem_i < taskItems_len; taskItem_i++) {
        var photoSet = task.photoSets[taskItem_i];

        if (photoSet.skip) continue;

        // process views in photoset
        for (var view_j = 0, views_len = photoSet.views.length; view_j < views_len; view_j++) {
            var viewItem = photoSet.views[view_j];

            //TODO Нужно формировать путь к файлу более безопасно
            var fileRef = new File(settings.basePath + '/' + viewItem.path + '/' + viewItem.fileName);
            var docRef = app.open(fileRef);

            var applyActions = viewItem.applyActions || task.defaults.applyActions; //TODO applyActions !== undefined

            for (var action_i = 0, actions_len = applyActions.length; action_i < actions_len; action_i++) {
                var actionInfo = task.actions[applyActions[action_i]];
                //actionInfo.doc = docRef;
                log.debug('Действие - ' + actionInfo.action);
                actions[actionInfo.action](actionInfo);
            } // actions

            // defaults sizes
            viewItem.sizes = viewItem.sizes || task.defaults.sizes;
            generateCatalogImages(photoSet, viewItem, task.sizes);

            docRef.close(SaveOptions.DONOTSAVECHANGES);

        } // viewItems

    } // taskItems

};
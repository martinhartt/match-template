'use strict';

var _ = require('underscore');

exports = function matchTemplate(object, template) {
    var cleanTemplate = _.omit(template, function (i) {
        return !i;
    });
    var cleanKeys = _.keys(cleanTemplate);
    var result = {};
    cleanKeys.forEach(function (k) {
        if (_.isObject(template[k])) {
            result[k] = matchTemplate(object[k], template[k]);
        } else {
            result[k] = object[k];
        }
    });

    return result;
};

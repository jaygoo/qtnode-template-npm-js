'use strict';

module.exports = function (args) {
    Object.assign({}, args);


    return async function (next) {

        next();
    };
};



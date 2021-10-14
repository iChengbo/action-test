"use strict";
/*
 * @Author: iChengbo
 * @Date: 2021-10-14 10:22:55
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-10-14 13:40:31
 * @FilePath: /action-test/index.ts
 */
exports.__esModule = true;
exports.sayGoodBye = exports.sayHello = exports.getCurrent = void 0;
var getCurrent = function () {
    return new Date();
};
exports.getCurrent = getCurrent;
var sayHello = function (name) {
    console.log('Hello ' + name);
};
exports.sayHello = sayHello;
var sayGoodBye = function (name) {
    console.log('Goodbye ' + name);
};
exports.sayGoodBye = sayGoodBye;

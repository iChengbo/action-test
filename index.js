"use strict";
/*
 * @Author: iChengbo
 * @Date: 2021-10-14 10:22:55
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-10-14 13:15:01
 * @FilePath: /action-test/index.ts
 */
exports.__esModule = true;
exports.getCurrent = exports.sayHello = void 0;
var getCurrent = function () {
    return new Date();
};
exports.getCurrent = getCurrent;
var sayHello = function (name) {
    console.log('Hellow' + name);
};
exports.sayHello = sayHello;

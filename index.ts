/*
 * @Author: iChengbo
 * @Date: 2021-10-14 10:22:55
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-10-14 13:15:01
 * @FilePath: /action-test/index.ts
 */

const getCurrent = () => {
    return new Date();
}

const sayHello = (name: string) => {
    console.log('Hellow' + name);
}

export { sayHello, getCurrent }

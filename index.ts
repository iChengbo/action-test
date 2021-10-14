/*
 * @Author: iChengbo
 * @Date: 2021-10-14 10:22:55
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-10-14 13:40:31
 * @FilePath: /action-test/index.ts
 */

const getCurrent = () => {
    return new Date();
}

const sayHello = (name: string) => {
    console.log('Hello ' + name);
}

const sayGoodBye = (name: string) => {
    console.log('Goodbye ' + name);
}

export { getCurrent, sayHello, sayGoodBye }

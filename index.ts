/*
 * @Author: iChengbo
 * @Date: 2021-10-14 10:22:55
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-10-20 17:16:25
 * @FilePath: /action-test/index.ts
 */

const getCurrent = () => {
    return new Date();
}

const sayCurrentVersion = () => {
    console.log('v1.0.0-beta.24')
}

const sayHello = (name: string) => {
    console.log('Hello ' + name);
}

const sayGoodBye = (name: string) => {
    console.log('Goodbye ' + name);
}

export { getCurrent, sayCurrentVersion, sayHello, sayGoodBye }

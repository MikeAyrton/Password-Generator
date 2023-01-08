import React from "react";

export class PasswordService extends React.Component {
    static getRandomLowerCase() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    static getRandomUpperCase() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    static getRandomNumbers() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }

    static getRandomSymbols() {
        let symbolStr = `!@#$%^&*(){}[]/`;
        return symbolStr[Math.floor(Math.random() * symbolStr.length)];
    }

    static getPasswordObj(state) {
        let PasswordObj = {}
        for (let key of Object.keys(state)) {
            if (typeof state[key] === 'boolean' && state[key]) {
                PasswordObj = {
                    ...PasswordObj,
                    [key]: state[key]
                }
            }
        }
        return PasswordObj;
    }

    static generayePassword(PasswordObj, passwordLenght, i) {
        let thePassword = '';
        for (let i = 0; i<Number(passwordLenght); i += Object.keys(PasswordObj).length)
        {
            if (PasswordObj.lower) thePassword += `${this.getRandomLowerCase()}`;
            if (PasswordObj.upper) thePassword += `${this.getRandomUpperCase()}`;
            if (PasswordObj.symbol) thePassword += `${this.getRandomSymbols()}`;
            if (PasswordObj.number) thePassword += `${this.getRandomNumbers()}`;
        }
        return thePassword.substring(0, Number(passwordLenght));
    }
}
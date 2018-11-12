import * as appSettings from 'tns-core-modules/application-settings/application-settings';
import { Injectable } from '@angular/core';
var CryptoJS = require("crypto-js");
@Injectable()
export class PasswordService {

    securedPassword: any;
    aesKey: string; 

    constructor() {
        this.securedPassword = appSettings.getString('password') ? JSON.parse(appSettings.getString('password')) : undefined;
    }

    getPassword() {
        return this.securedPassword;
    }

    async setPassword(password: String) {
        this.securedPassword = await CryptoJS.PBKDF2(password, 'salt', 100, 64, 'sha512');
        appSettings.setString('password', JSON.stringify(this.securedPassword));
    }

    async comparePassword(password: String): Promise<boolean> {
        const pbkdf2 = await CryptoJS.PBKDF2(password, 'salt', 100, 64, 'sha512');
        // console.log(this.securedPassword);
        // console.log(pbkdf2);
        // console.log('----');
        if (JSON.stringify(pbkdf2) === JSON.stringify(this.securedPassword)) {
            this.aesKey = pbkdf2;
            console.log(this.aesKey);
            return true
    }
        return false;
    }

saveNote(note: String) {
    appSettings.setString('note', JSON.stringify(note));
}

getNote() {
    return appSettings.getString('note') ? JSON.parse(appSettings.getString('note')) : '';
}
}

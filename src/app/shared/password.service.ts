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
        const aesKey: string = this.getPbkdf2(password);
        const ciphertext = CryptoJS.AES.encrypt(password, aesKey);
        this.securedPassword = ciphertext;
        appSettings.setString('password', JSON.stringify(ciphertext.toString()));
    }

    async comparePassword(password: String): Promise<boolean> {
        const aesKey: string = this.getPbkdf2(password);
        const bytes  = CryptoJS.AES.decrypt(this.securedPassword, aesKey);
        const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
            if (password === decryptedPassword) {
                this.aesKey = aesKey;
                return true
        }
        return false;
    }

    saveNote(note: String) {
        const securedNote = CryptoJS.AES.encrypt(note, this.aesKey);
        appSettings.setString('note', JSON.stringify(securedNote.toString()));
    }

    getNote() {
        const note = appSettings.getString('note') ? JSON.parse(appSettings.getString('note')) : '';
        const bytes  = CryptoJS.AES.decrypt(note, this.aesKey);
        return bytes.toString(CryptoJS.enc.Utf8);
    }

    getPbkdf2(password: String) {
        const pbkdf2 = CryptoJS.PBKDF2(password, 'salt', 100, 64, 'sha512');
        return pbkdf2.toString();
    }
}

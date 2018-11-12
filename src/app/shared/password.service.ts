import * as appSettings from 'tns-core-modules/application-settings/application-settings';
import { Injectable } from '@angular/core';


@Injectable()
export class PasswordService {

    securedPassword: String;

    constructor() {
        this.securedPassword = appSettings.getString('password') ? JSON.parse(appSettings.getString('password')) : undefined;
    }

    getPassword() {
        return this.securedPassword;
    }

    setPassword(password: String) {
        this.securedPassword = password;
        appSettings.setString('password', JSON.stringify(password));
    }

    comparePassword(password: String): boolean {
        console.log(this.securedPassword);
        console.log(password);
        console.log('----');
        if (password === this.securedPassword) {
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

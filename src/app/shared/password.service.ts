import * as appSettings from 'tns-core-modules/application-settings/application-settings';
import { Injectable } from '@angular/core';


@Injectable()
export class PasswordService {

    securedPassword: String;

  constructor() {
    const securedPassword = appSettings.getString('password') ? JSON.parse(appSettings.getString('password')) : undefined;
  }

  getPassword() {
    return this.securedPassword;
  }

  setPassword(password: String) {
    this.securedPassword = password;
    appSettings.setString('password', JSON.stringify(password));
  }
}

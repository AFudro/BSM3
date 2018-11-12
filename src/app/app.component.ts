import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { PasswordService } from './shared/password.service';

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {

    constructor(
        private routerExtensions: RouterExtensions,
        private passwordService: PasswordService,
    ) { }

    ngOnInit() {

        if (this.passwordService.getPassword()) {
            this.routerExtensions.navigate(['/auth'], {
            });
        }
        else {
            this.routerExtensions.navigate(['/set-password'], {
            });
        }
    }
}

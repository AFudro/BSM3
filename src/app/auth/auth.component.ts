import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordService } from '../shared/password.service';
import { RouterExtensions } from 'nativescript-angular/router';
import * as dialogs from 'tns-core-modules/ui/dialogs/dialogs';

@Component({
    selector: "Auth",
    moduleId: module.id,
    templateUrl: "./auth.component.html"
})
export class AuthComponent implements OnInit {
    private passwordForm: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private routerExtensions: RouterExtensions,
        private passwordService: PasswordService,
    ) {
        this.passwordForm = this.formBuilder.group({
            password: ['', Validators.required],
        });

    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    Authorize() {
        this.passwordService.comparePassword(this.passwordForm.value.password).then((result) => {
            if(result) {
                this.routerExtensions.navigate(['/note'], {
                });
            }
            else {
                dialogs.alert({
                    title: "Bład",
                    message: "Nieprawidłowe hasło",
                    okButtonText: "ok"
                }).then(function () {
    
                });
            }

        })

        // if (this.passwordService.comparePassword(this.passwordForm.value.password)) {

        // }

    }
}

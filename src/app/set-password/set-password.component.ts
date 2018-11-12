import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterExtensions } from 'nativescript-angular/router';
import { PasswordService } from '../shared/password.service';

@Component({
    selector: "Set-password",
    moduleId: module.id,
    templateUrl: "./set-password.component.html"
})
export class SetPasswordComponent implements OnInit {
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
    }

    setPassword() {
        this.passwordService.setPassword(this.passwordForm.value.password)
        this.routerExtensions.navigate(['/auth'], {
            clearHistory: true,
        });
    }
}

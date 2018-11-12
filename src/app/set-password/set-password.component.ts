import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterExtensions } from 'nativescript-angular/router';

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
    ) {
        this.passwordForm = this.formBuilder.group({
            password: ['', Validators.required],
        });
        
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    setPassword() {
        this.routerExtensions.navigate(['/auth'], {
        });
    }
}

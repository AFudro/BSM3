import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: "Auth",
    moduleId: module.id,
    templateUrl: "./auth.component.html"
})
export class AuthComponent implements OnInit {
    private passwordForm: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
    ) {
        this.passwordForm = this.formBuilder.group({
            password: ['', Validators.required],
        });
        
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    Authorize() {
        
    }
}

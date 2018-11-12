import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as dialogs from 'tns-core-modules/ui/dialogs/dialogs';
import { PasswordService } from '../shared/password.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: "Note",
    moduleId: module.id,
    templateUrl: "./note.component.html"
})
export class NoteComponent implements OnInit {

    @ViewChild('note')
    private note: ElementRef;

    constructor(
        private passwordService: PasswordService,
        private routerExtensions: RouterExtensions,
    ) {
    }

    ngOnInit(): void {
        this.note.nativeElement.text = this.passwordService.getNote();
    }

    save() {
        this.passwordService.saveNote(this.note.nativeElement.text)
        dialogs.alert({
            message: "Zapisano Notatkę",
            okButtonText: "ok"
        }).then(function () {

        });
    }

    changePassword() {
        this.routerExtensions.navigate(['/set-password'], {
        });
    }
}

import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Note",
    moduleId: module.id,
    templateUrl: "./note.component.html"
})
export class NoteComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}

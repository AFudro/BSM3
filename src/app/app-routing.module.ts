import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NoteComponent } from './note/note.component';
import { AuthComponent } from './auth/auth.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: "", component: AppComponent},
    { path: "note", component: NoteComponent },
    { path: "auth", component: AuthComponent },
    { path: "set-password", component: SetPasswordComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

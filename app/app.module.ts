import{NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

// Components
import {AppComponent} from "./app.component";
import {InputsComponent} from "./bindings/inputs.component";
import {ConfirmComponent} from "./bindings/confirm.component";

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, InputsComponent, ConfirmComponent],
	bootstrap: [AppComponent]
})

export class AppModule {
}
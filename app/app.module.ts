import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

// Components
import {AppComponent} from "./app.component";
import {UnlessDirective} from "./directives/unless.dirrective";

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, UnlessDirective],
	bootstrap: [AppComponent]
})

export class AppModule {
}
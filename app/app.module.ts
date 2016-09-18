import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

// Components
import {AppComponent} from "./app.component";
import {AnimationComponent} from "./anim.component";

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, AnimationComponent],
	bootstrap: [AppComponent]
})

export class AppModule {
}
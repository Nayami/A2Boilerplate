import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

// Components
import {AppComponent} from "./app.component";
import {CustomAttributeComponent} from "./dirrectives/customAttr.component";
import {HighlightDirective} from "./dirrectives/customdirective.directive";


@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, CustomAttributeComponent, HighlightDirective],
	bootstrap: [AppComponent],
})

export class AppModule {
}
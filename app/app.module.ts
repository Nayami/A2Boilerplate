import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

// Components
import {AppComponent} from "./app.component";
import {AlphaSiblingComponent} from "./sibling-components/alphaSibling.component";
import {BetaSiblingComponent} from "./sibling-components/betaSibling.component";
import {MiddlewareService} from "./services/middlewareData.service";

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, AlphaSiblingComponent, BetaSiblingComponent],
	bootstrap: [AppComponent],
	providers: [MiddlewareService]
})

export class AppModule {
}
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {NotFoundComponent} from "./components/app.notfound.component";
import {ProfileComponent} from "./components/app.profile.component";
import {HomeComponent} from "./components/app.home.component";

@NgModule({
	imports: [
		BrowserModule,
		routing,
	],
	declarations: [
		AppComponent,
		HomeComponent,
		NotFoundComponent,
		ProfileComponent
	],
	bootstrap: [AppComponent],
	providers: [
		appRoutingProviders
	],
})
export class AppModule {
}
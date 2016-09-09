import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

// Components
import {AppComponent} from "./app.component";
import {ShoppingComponent} from "./shopping-list/shopping.component";
import {NewitemComponent} from "./shopping-list/new-item.component";
import {EditComponent} from "./shopping-list/edit-item.component";

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, ShoppingComponent, NewitemComponent, EditComponent],
	bootstrap: [AppComponent]
})

export class AppModule {
}
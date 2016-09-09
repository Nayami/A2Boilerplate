import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {ListItemInterface} from "./interfaces/item.interface";

@Component({
	selector: 'edit-component',
	template: `
	<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			<input class="mdl-textfield__input" type="text" id="item-name" [(ngModel)]="passItem.name">
			<label class="mdl-textfield__label" for="item-name">Item Name</label>
		</div>
		<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			<input class="mdl-textfield__input" type="text" id="item-amount" [(ngModel)]="passItem.amount">
			<label class="mdl-textfield__label" for="item-amount">Amount</label>
		</div>
		<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
			<i class="material-icons" (click)="handleDelete(passItem)">delete</i>
		</button>
	`
})
export class EditComponent implements OnInit {

	@Input() passItem;

	@Output() raiseDelete = new EventEmitter<ListItemInterface>();

	handleDelete(editRef : ListItemInterface):void {
		this.raiseDelete.emit(editRef);
	}

	constructor() {
	}

	ngOnInit() {
	}

}
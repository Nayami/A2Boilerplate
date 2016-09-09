import {Component, OnInit} from '@angular/core';
import {ListItemInterface} from "./interfaces/item.interface";

@Component({
	selector: 'shopping-component',
	template: `
		<section>
			<new-item (addedItem)="catchAddedItem($event)"></new-item>
		</section>
		<section>
			<h3 class="mdl-typography--display-2">My List</h3>
			<ul>
				<li *ngFor="let singleItem of listItems">
					<span>{{singleItem.name}}</span> <span class="mdl-badge" attr.data-badge="{{singleItem.amount}}">Inbox</span>
					<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
					<i class="material-icons" (click)="handleEdit(singleItem)">edit</i>
					</button>{{index}}
					<div>
						<edit-component (raiseDelete)="handleDelete($event)" [passItem]="singleItem"></edit-component>
					</div>
				</li>
			</ul>
		</section>
	`
})
export class ShoppingComponent implements OnInit {

	listItems = new Array<ListItemInterface>();
	selectedItem : ListItemInterface;

	showHideElem (elem):void {

	}

	handleDelete(delItem : ListItemInterface):void {
		this.listItems.splice(this.listItems.indexOf(delItem), 1);
	}

	catchAddedItem(item: ListItemInterface): void {
		this.listItems.push({name: item.name, amount: item.amount});
	}

	handleEdit (editedItem : ListItemInterface):void {
		// this.selectedItem = editedItem;
	}

	constructor() {
	}

	ngOnInit() {
	}
}
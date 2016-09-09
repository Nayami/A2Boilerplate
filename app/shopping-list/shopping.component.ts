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
				<li *ngFor="let singleItem of listItems let ind = index">
					<span>{{singleItem.name}}</span> <span class="mdl-badge" attr.data-badge="{{singleItem.amount}}"></span>
					<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
					<i class="material-icons" (click)="handleEdit(ind)">edit</i>
					</button>
					<div [hidden]="singleItem.showEdit === false">
						<edit-component (raiseDelete)="handleDelete($event)" [passItem]="singleItem"></edit-component>
					</div>
				</li>
			</ul>
		</section>
	`
})
export class ShoppingComponent implements OnInit {

	listItems = new Array<ListItemInterface>();

	handleDelete(delItem : ListItemInterface):void {
		this.listItems.splice(this.listItems.indexOf(delItem), 1);
	}

	catchAddedItem(item: ListItemInterface): void {
		this.listItems.push({name: item.name, amount: item.amount, showEdit : false});
	}

	handleEdit (editedItem:number) {
		this.listItems[editedItem].showEdit = !this.listItems[editedItem].showEdit
	}

	constructor() {
	}

	ngOnInit() {
	}
}
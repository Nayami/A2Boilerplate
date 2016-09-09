import {Component, OnInit} from '@angular/core';

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
					<span>{{singleItem.name}}</span> / <span>{{singleItem.amount}}</span>
				</li>
			</ul>
		</section>
	`
})
export class ShoppingComponent implements OnInit {

	listItems = new Array<{name: string, amount: number}>();

	catchAddedItem(item: {name: string, amount: number}): void {
		this.listItems.push({name: item.name, amount: item.amount});
	}

	constructor() {
	}

	ngOnInit() {
	}
}
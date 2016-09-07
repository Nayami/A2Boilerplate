import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
	selector: 'app-component',
	template: `
		<section class="mdl-grid mdl-color--grey-200">
			<input-component (submitted)="catchSubmit($event)" [myself]="confirmMyselfParent"></input-component>
		</section>
		<section class="mdl-grid mdl-color--grey-300">
			<confirm-component (confirmed)="handleParentConfirm($event)" [myself]="myself"></confirm-component>
		</section>
	`,
})

export class AppComponent implements OnInit {

	myself = {name: '', age: ''};
	confirmMyselfParent = {name: '', age: ''};

	handleParentConfirm(event: any): void {
		this.confirmMyselfParent = {name: event.name, age: event.age};
	}

	catchSubmit(myself: {name: string, age: string}) {
		this.myself = {name: myself.name, age: myself.age};
	}

	constructor() {
	}

	ngOnInit(): void {
	}

}
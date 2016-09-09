import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-component',
	template: `
		<header class="mdl-typography--display-3">Shopping List</header>
		<section>
			<shopping-component></shopping-component>
		</section>
	`,
})

export class AppComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

}
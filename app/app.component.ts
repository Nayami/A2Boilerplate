import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-component',
	template: `
		<alpha-sibling></alpha-sibling>
		<beta-sibling></beta-sibling>
	`,
})

export class AppComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

}
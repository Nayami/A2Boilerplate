import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'custom-attribute',
	template: `
		<p>Text without highlighting</p>
		<div highlightMe>Lorem ipsum dolor.</div>
	`,

})
export class CustomAttributeComponent implements OnInit {


	constructor() {
	}

	ngOnInit() {
	}

}
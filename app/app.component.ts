import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-component',
	template: `
		<section>
			<h3>Custom Structural Directive</h3>
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input #someCondition (keyup)="0" class="mdl-textfield__input" type="text" id="txt-id">
				<label class="mdl-textfield__label" for="txt-id">Enter true or false</label>
			</div>
			<div *unlessDir="someCondition.value === 'false'">
				<p>This will be shown unless you enter 'false'</p>
			</div>
		</section>
	`,
})

export class AppComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

}
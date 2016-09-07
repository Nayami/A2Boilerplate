import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
	selector: 'input-component',
	template: `
		<h5>Enter Your name and age <small>Inputs scope</small></h5>
		<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			<input class="mdl-textfield__input" type="text" id="name" [(ngModel)]="myself.name" (keyup)="handleKeyup()">
			<label class="mdl-textfield__label" for="name">Name</label>
		</div>
		<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			<input class="mdl-textfield__input" type="text" id="age" [(ngModel)]="myself.age" (keyup)="handleKeyup()">
			<label class="mdl-textfield__label" for="age">Age</label>
		</div>
		<footer>
			<p>Filled: {{isFilled ? 'Yes' : 'No'}}</p>
			<p>Valid: {{isValid ? 'Yes' : 'No'}}</p>
			<button (click)="handleSubmit()" [disabled]="!isValid" type="submit" class="mdl-button mdl-js-button mdl-button--raised">Submit</button>
		</footer>
	`
})
export class InputsComponent implements OnInit {

	myself: any = {name: '', age: ''};
	isFilled: boolean = false;
	isValid: boolean = false;
	@Input() myself : any;
	@Output() submitted = new EventEmitter<{name:string, age:number}>();

	handleSubmit():void {
		this.submitted.emit(this.myself);
	}

	handleKeyup():void {
		this.isFilled = (this.myself.name != '' && this.myself.age != '') ? true : false;
		this.isValid = (this.myself.name != '' && /^\d+$/.test(this.myself.age)) ? true : false;
	}

	constructor() {
	}

	ngOnInit() {
	}

}
import {Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
	selector: 'confirm-component',
	template: `
		<h5>Enter Your name and age <small>Confirm scope</small></h5>
		<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			<input class="mdl-textfield__input" type="text" id="name" [(ngModel)]="confirmMyself.name" (keyup)="handleKeyup()">
			<label class="mdl-textfield__label" for="name">Name</label>
		</div>
		<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			<input class="mdl-textfield__input" type="text" id="age" [(ngModel)]="confirmMyself.age" (keyup)="handleKeyup()">
			<label class="mdl-textfield__label" for="age">Age</label>
		</div>
		<footer>
			<p>Filled: {{isFilled ? 'Yes' : 'No'}}</p>
			<p>Valid: {{isValid ? 'Yes' : 'No'}}</p>
			<button (click)="handleConfirm()" [disabled]="!isValid" type="submit" class="mdl-button mdl-js-button mdl-button--raised">Submit Confirm</button>
		</footer>
		`
})
export class ConfirmComponent implements OnInit, OnChanges {

	confirmMyself: any = {name: '', age: ''};
	isFilled: boolean = false;
	isValid: boolean = false;
	@Input() myself : any;
	@Output() confirmed = new EventEmitter<{name:string, age:number}>();

	handleConfirm():void {
		this.confirmed.emit(this.confirmMyself);
	}

	handleKeyup():void {
		this.isFilled = (this.confirmMyself.name != '' && this.confirmMyself.age != '') ? true : false;
		this.isValid = (this.confirmMyself.name != '' && /^\d+$/.test(this.confirmMyself.age)) ? true : false;
	}

	constructor() {
	}

	ngOnInit() {

	}

	ngOnChanges(changes: SimpleChanges) {
		this.confirmMyself = changes['myself'].currentValue;
	}

}
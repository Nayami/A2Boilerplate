import {Component, OnInit} from '@angular/core';
import {MiddlewareService} from "../services/middlewareData.service";

@Component({
	selector: 'alpha-sibling',
	template: `
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				<input class="mdl-textfield__input" type="text" id="txt-id" #mes>
				<label class="mdl-textfield__label" for="txt-id">Enter Some text</label>
			</div>
			<button type="button" class="mdl-button mdl-js-button mdl-button--raised" (click)="onLog(mes.value)">Submit</button>
		`
})
export class AlphaSiblingComponent implements OnInit {
	constructor(private middlewareData : MiddlewareService) {
	}

	ngOnInit() {
	}

	onLog(message:string):void {
		this.middlewareData.setMessage(message)
	}

}
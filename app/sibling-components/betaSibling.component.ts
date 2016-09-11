import {Component, OnInit} from '@angular/core';
import {MiddlewareService} from "../services/middlewareData.service";

@Component({
	selector: 'beta-sibling',
	template: `<div>{{middlewareData.getMessage()}}</div>`
})
export class BetaSiblingComponent implements OnInit {

	constructor(private middlewareData : MiddlewareService) {}

	ngOnInit() {
	}

}
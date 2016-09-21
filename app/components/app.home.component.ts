import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
	template: `
		<div class="am-wrap">
			<br>
			<h1 class="text-center">Home Component</h1>
			<hr>
			<a [routerLink]="['/user']">User sublink</a>
			<button type="button" class="mdl-button mdl-js-button mdl-button--raised" (click)="onNavigate()">User</button>
		</div>
	`
})
export class HomeComponent implements OnInit {

	constructor(private router: Router) {
	}

	onNavigate():void {
		this.router.navigate(['/user']);
	}

	ngOnInit() {
	}

}
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
	template: `
		<div class="am-wrap">
			<br>
			<h1 class="text-center">Profile Component</h1>
			<a class="mdl-navigation__link" [routerLink]="['/user', 'some']">Some Particular User</a>
			<a class="mdl-navigation__link" [routerLink]="['/user', 'some1']">Some Particular User</a>
			<a class="mdl-navigation__link" [routerLink]="['/user', 'some2']">Some Particular User</a>
			<a class="mdl-navigation__link" [routerLink]="['/user', 'some3']">Some Particular User</a>
			<hr>
			{{userSlug}}
		</div>
	`
})
export class ProfileComponent implements OnInit, OnDestroy {

	private subscription : Subscription;
	userSlug : string;

	constructor(private router: Router, private activatedRoute: ActivatedRoute) {
		this.subscription = activatedRoute.params
			.subscribe(
				(param : any) => {
					this.userSlug = param['id'];
				}
			)
	}

	ngOnInit() {
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
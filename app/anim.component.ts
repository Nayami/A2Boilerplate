import {Component, OnInit,
	trigger,
	state,
	style,
	transition,
	animate
} from '@angular/core';

@Component({
	selector: 'animaiton-component',
	animations: [
		trigger('flyInOut', [
			state('in', style({transform: 'translateX(0)'})),
			// Enter animation
			transition('void => *', [
				style({transform: 'translateX(-100%)'}),
				animate(100)
			]),
			// Leave Animation
			transition('* => void', [
				animate(100, style({transform: 'translateX(100%)'}))
			])
		])
	],
	template: `
		<ul>
		<li *ngFor="let item of arr" [@flyInOut]>
			{{item}}<button type="button" (click)="oncli(item)" class="mdl-button">Remove me</button>
		</li>
		</ul>
	`
})
export class AnimationComponent implements OnInit {

	arr : any = [
		"Lorem ipsum.",
		"Laborum, sequi?",
		"Obcaecati, voluptatum."
	];
	constructor() {
	}

	oncli(elem){
		this.arr.splice(this.arr.indexOf(elem), 1)
	}

	ngOnInit() {
	}
}
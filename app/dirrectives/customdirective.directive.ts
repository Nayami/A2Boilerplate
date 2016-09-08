import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
	selector : '[highlightMe]'
})
export class HighlightDirective {

	constructor(el: ElementRef, renderer: Renderer) {
		renderer.setElementStyle(el.nativeElement, 'backgroundColor', '#FF6F43');
	}

}
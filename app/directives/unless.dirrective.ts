import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
	selector: '[unlessDir]', // *unlessDir
})
export class UnlessDirective {

	@Input() unlessDir;
	set unlessDir(condition: boolean) {
		if(!condition) {
			this._viewContainer.createEmbeddedView(this._template);
		} else {
			this._viewContainer.clear();
		}
	}

	constructor(private _template: TemplateRef<any>, private _viewContainer: ViewContainerRef) {}

}
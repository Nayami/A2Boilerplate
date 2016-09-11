import {Injectable} from '@angular/core';

@Injectable()
export class MiddlewareService {

	message:string;

	setMessage (msg:string):void {
		this.message = msg
	}

	getMessage() {
		return this.message
	}

	constructor() {
	}

}
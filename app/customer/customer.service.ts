import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {
	
	constructor() {}
	
	getCustomers() {
		return [
      {id: 1, name: 'Ward'},
      {id: 2, name: 'John Do Little'},
      {id: 3, name: 'Silly'},
      {id: 4, name: 'Emmet'}
    ];
	}
}
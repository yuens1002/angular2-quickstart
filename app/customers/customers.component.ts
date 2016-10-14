import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer/customer.service';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-customers',
    templateUrl: 'app/customers/customers.component.html',
	  providers: [ CustomerService ]
})

export class CustomersComponent implements OnInit { 
     customers: Observable<any[]>;
  
    constructor(private _customerService: CustomerService) {}
  
    ngOnInit() {
			this.customers = this._customerService.getCustomers();
		}
			
    
}
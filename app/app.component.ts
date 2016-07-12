import { Component } from 'angular2/core';
import { ProductListComponent } from './products/product-list.component'; // tells angular where to import pm-products
	// this is an inline template:
@Component({
	selector: 'pm-app',
	template: `			
		<div>
			<h1>{{ pageTitle }}</h1>
			<pm-products></pm-products>
		</div>
		`,
	directives: [ProductListComponent]  // tells angular where to look for pm-products

})
export class AppComponent {
	pageTitle: string = 'Default Page Title!';
}
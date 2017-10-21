import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	template: `
		<nav>
			<a routerLink="/employeesRecord">Show Employees Record</a>
		</nav>
		<router-outlet></router-outlet>
		`,
	styleUrls: ['./app.component.css']
})

export class AppComponent{
	
}	
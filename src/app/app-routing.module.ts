import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//loading component
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeRecordComponent } from './employee-record.component';
import { AddNewEmployeeComponent } from './add-new-employee.component';

const routes: Routes = [
	// { path: '', redirectTo:'somelink', pathMatch: 'full' }
	{ path: 'employee-detail/:id', component: EmployeeDetailComponent},
	{ path: 'employeesRecord', component: EmployeeRecordComponent },
	{ path: 'add-new-employee', component: AddNewEmployeeComponent },
	{ path: 'add-new-employee/:id', component: AddNewEmployeeComponent }
];

@NgModule({

	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [ RouterModule ]

})


export class AppRoutingModule {}
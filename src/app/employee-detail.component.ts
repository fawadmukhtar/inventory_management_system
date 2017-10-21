import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { EmployeesRecord }   from './employees-record';
import { EmployeeRecordService } from './employee-record.service';

import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
	selector: 'employee-detail',
	templateUrl: './employee-detail.component.html',
	styleUrls: ['./employee-detail.component.css']
})

export class EmployeeDetailComponent implements OnInit {
	// @Input () employeeCheck: Boolean;
	// @Input() selectedEmployee : EmployeesRecord;

	selectedEmployee: EmployeesRecord;

	constructor(
		private employeeRecordService: EmployeeRecordService,
		private route: ActivatedRoute,
		private location: Location,
		private router: Router 
	){}

	ngOnInit(){
	this.route.params
		.switchMap((params: Params) => this.employeeRecordService.getEmployee(+params['id']))
		.subscribe( employee => this.selectedEmployee = employee );
	}

	goBack(){
		this.location.back();
	}

	edit(){
		this.router.navigate(['/add-new-employee', this.selectedEmployee.id]);
	}

	delete(){
		this.employeeRecordService.deleteEmployee(this.selectedEmployee.id)
		.then(() => { this.router.navigate(['/employeesRecord']) });
	}
}
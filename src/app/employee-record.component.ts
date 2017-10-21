import { Component, OnInit }       from '@angular/core';
import { EmployeesRecord } from './employees-record';
// import { EMPLOYEES }  from './mock-employees';
import { EmployeeRecordService } from './employee-record.service';

import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'employee-record',
	templateUrl: './employee-record.component.html',
	styleUrls: ['./employee-record.component.css']
})

export class EmployeeRecordComponent implements OnInit {
	title = 'Employees Record';
	employees: EmployeesRecord[];
	// employeesLength: number;
	// totalItem:any;
	// currentEmployee: EmployeeRecordService;
	// currentEmployeeCheck = false;

	constructor(
		private employeeRecordService: EmployeeRecordService,
		private router: Router

		){}

	// fullDetail(currentEmployee:any){
	// 	this.currentEmployeeCheck = true;
	// 	this.currentEmployee = currentEmployee;
	// }

	getEmployee(){
		this.employeeRecordService.getEmployees().
		then(employees => {
							this.employees = employees;
							// this.employeesLength = employees.length;
							// if(this.employeesLength > 10){
							// 	this.employees = this.employees.slice(0, 10);
							// 	console.log(this.employees);
							// }
						});
		
		//console.log(this.employeesLength); // if we assigne value here it will
		// display undefined because this will execute before the then response
	}

	removeRecord(id:number){
		this.employeeRecordService.deleteEmployee(id)
		.then(() => 
				this.employees = this.employees
				.filter((employee) => employee.id !== id));
	}
	
	// when doing pagination
	// public getServerData(event:any){
	// 	this.employeeRecordService.getdata(event).subscribe(
	// 		response =>{
	// 			if(response.error) { 
	// 				alert('Server Error');
	// 			} else {
	// 				this.employees = response.employees;
	// 				this.totalItem = response.totalItems;
	// 			}
	// 		},
	// 		error =>{
	// 			alert('Server error');
	// 		}
	// 	);
	// 	return event;
	// }

	ngOnInit(){
		this.getEmployee();
	}



}
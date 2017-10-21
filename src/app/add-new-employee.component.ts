import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmployeesRecord } from './employees-record';
import { EmployeeRecordService } from './employee-record.service';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
	selector: 'add-new-employee',
	templateUrl: './add-new-employee.component.html',
	styleUrls: ['./add-new-employee.component.css']	
})

export class AddNewEmployeeComponent implements OnInit {

	id: number;
	firstName : string;
	lastName  : string;
	dob       : Date;
	dojoining : Date;			
	leaveAvail: number;
	phone	 : number;		
	age       : number;
	jobDescp	 : any;

	selectedEmployee: EmployeesRecord;
	checkUpdate = false; 
	newEmployee: EmployeesRecord;

	constructor(
		private employeeRecordService: EmployeeRecordService,
		private router: Router,
		private route: ActivatedRoute,
		private location: Location
		){}
		
	onSubmit(event:any):void{
		event.preventDefault();
		this.newEmployee = {
			id: this.id, firstName: this.firstName, lastName:this.lastName,
			dob: this.dob, dojoining: this.dojoining, leaveAvail: this.leaveAvail, 
			phone: this.phone, age: this.age, jobDescp: this.jobDescp
		};
		this.employeeRecordService.create(this.newEmployee).then();
		// this.employeeRecordService.create(this.id, this.firstName, this.lastName,
		// 	this.dob, this.dojoining, this.leaveAvail, this.phone, this.age, this.jobDescp)
		// 	.then();

		this.router.navigate(['/employeesRecord']);
	}

	onUpdate(event:any):void{
		event.preventDefault();

		this.employeeRecordService.update(this.selectedEmployee)
		.then(() => this.goBack());
	}

	ngOnInit(){  // this life cycle hook executes when all data variable will initialize
		// this.route.snapshot.params['id']); the route.snapshot provide the initial value
		// of the parameters. You can access the parameters directly without subscribing or 
		// adding observable operators. it much simpler to write and read 
		// console.log(this.route.snapshot);
		if(this.route.snapshot.params['id']){
			this.route.params
				.switchMap( (params:Params) => this.employeeRecordService
				.getEmployee(+params['id']))
				.subscribe(employee => {
							this.selectedEmployee = employee;
							// after first compilation of code and open window in browser
							// uncomment below three ubline, in computer compilation it 
							// shows error while in browser does not showing error
							this.selectedEmployee.dob = this.formatDate(employee.dob);
							this.selectedEmployee.dojoining = this
							.formatDate(employee.dojoining);
							this.checkUpdate = true;
							}
				);			
		}

	}

	// get diagnostic() {
	// 	return JSON.stringify(this.selectedEmployee.firstName);
	// }  // this was only for testing, is our ngModel is working or not ?
	
	goBack(){
		this.location.back();
	}

	formatDate(myDate: Date):any{
		let newDate = new Date(myDate);
		let year = newDate.getFullYear();
		let month = newDate.getMonth() + 1;
		let day = newDate.getDate();
		let newDay = '';
		let newMonth = '';
		if(day < 10){		
			newDay =  '0' + day;
		}else{
			newDay = ''+ day;
		}
		if(month < 10){			
			newMonth =  '0' + month;
		}else{
			newMonth = ''+ month;
		}
		let result = year + "-"+ newMonth + "-" + newDay;
		return  result;   
	}

}
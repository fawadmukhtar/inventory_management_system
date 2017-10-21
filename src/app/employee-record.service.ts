import { Injectable } from '@angular/core';
// import { EMPLOYEES } from './mock-employees';
import { EmployeesRecord } from './employees-record';

// loading these for loading data from server
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise'; // when use http then use toPromise
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

// import { Observable } from 'rxjs/Rx';


@Injectable()


export class EmployeeRecordService {

	private employeesUrl = 'api/employees';
	private headers = new Headers({'ContentType': 'application/json'});
	// headers is for extra information, in which formate our data is send, or recive
	constructor(private http: Http){}

	// getEmployees(): Promise<EmployeesRecord[]>{
	// 	return Promise.resolve(EMPLOYEES);
	// }

	getEmployees(): Promise<EmployeesRecord[]>{
		return this.http.get(this.employeesUrl)
		.toPromise()
		.then(employees => employees.json().data as EmployeesRecord[])
		.catch(this.handleError);
	}

	// public getdata(page:Number):any{
	// 	return this.http.get(`${this.employeesUrl}${page}`)
	// 		.map((response:Response) => response.json())
	// 		.catch((error:any) => Observable.throw(error.json().error) || 'Server Error');
	// }

	// getEmployees(page:Number):any{
	// 	return this.http.get(`${this.employeesUrl}${page}`)
	// 		.map((response:Response) => response.json().data)
	// 		.catch((error:any) => Observable.throw(error.json().error) || 'Server Error');
	// }

	// getEmployee(id:number): Promise<EmployeesRecord>{
	// 	return this.getEmployees()
	// 		.then(employees => employees.find(employee => employee.employeeID == id));
	// }

	getEmployee(id:number): Promise<EmployeesRecord>{
		const url = `${this.employeesUrl}/${id}`; // in this url the only that 
		//employee which  id is same with this parameter id
		return this.http.get(url)
		.toPromise()
		.then(employee =>  employee.json().data as EmployeesRecord)
		.catch(this.handleError);
	}

	create(newEmployee:EmployeesRecord): Promise<EmployeesRecord>{
		return this.http
		.post(this.employeesUrl, JSON.stringify(newEmployee), {headers: this.headers})
		.toPromise()
		.then(response => response.json().data)
		.catch(this.handleError);
	}

	update(selectedEmployee: EmployeesRecord):Promise<EmployeesRecord>{
		const url = `api/employees/${selectedEmployee.id}`;
		// when use variable in url then use these `` not ''
		return this.http
		.put(url, JSON.stringify(selectedEmployee), {headers: this.headers})
		.toPromise()
		.then(() => selectedEmployee)
		.catch(this.handleError);
	}

	deleteEmployee(id:number):Promise<EmployeesRecord>{
		const url = `${this.employeesUrl}/${id}`;
		return this.http
		.delete(url, {headers: this.headers})
		.toPromise()
		.then(() => null)
		.catch(this.handleError);
	}




	private handleError(error: any): Promise<any> {
	    console.error('An error occurred', error); // for demo purposes only
	    return Promise.reject(error.message || error);
	}
}
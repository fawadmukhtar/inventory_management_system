import { InMemoryDbService } from 'angular-in-memory-web-api';

// so still there is no dependency injection, thats why we are not declare injectable
// decorater


export class InMemoryDataService implements InMemoryDbService {

	createDb(){
		let options = { year: 'numeric', month: 'numeric', day: 'numeric' };

		let employees = [
			{
				id: 1,
				firstName: 'Fahad',
				lastName: 'Mukhtar',
				dob: (new Date('3-9-1008')).toLocaleDateString(),
				dojoining: (new Date('12-3-1995')).toLocaleDateString(),
				leaveAvail: 5,
				phone:  3459547704,
				age: 34,
				jobDescp: 'This is my first data'
			},
			{
				id: 2,
				firstName: 'Fawad',
				lastName: 'Mukhtar',
				dob: (new Date('3-9-1008')).toLocaleDateString(),
				dojoining: (new Date('12-3-1995')).toLocaleDateString(),
				leaveAvail: 5,
				phone:  3459547704,
				age: 34,
				jobDescp: 'This is my first data'
			},
			{
				id: 3,
				firstName: 'Saad',
				lastName: 'Mukhtar',
				dob: (new Date('3-9-1008')).toLocaleDateString(),
				dojoining: (new Date('12-3-1995')).toLocaleDateString(),
				leaveAvail: 5,
				phone:  3459547704,
				age: 34,
				jobDescp: 'This is my first data'
			},
			{
				id: 4,
				firstName: 'Bilal',
				lastName: 'Mukhtar',
				dob: (new Date('3-9-1008')).toLocaleDateString(),
				dojoining: (new Date('12-3-1995')).toLocaleDateString(),
				leaveAvail: 5,
				phone:  3459547704,
				age: 34,
				jobDescp: 'This is my first data'
			},
			{
				id: 5,
				firstName: 'Fahad',
				lastName: 'Mukhtar',
				dob: (new Date('3-9-1008')).toLocaleDateString(),
				dojoining: (new Date('12-3-1995')).toLocaleDateString(),
				leaveAvail: 5,
				phone:  3459547704,
				age: 34,
				jobDescp: 'This is my first data'
			},
			{
				id: 6,
				firstName: 'Fawad',
				lastName: 'Mukhtar',
				dob: (new Date('3-9-1008')).toLocaleDateString(),
				dojoining: (new Date('12-3-1995')).toLocaleDateString(),
				leaveAvail: 5,
				phone:  3459547704,
				age: 34,
				jobDescp: 'This is my first data'
			},
			{
				id: 7,
				firstName: 'Saad',
				lastName: 'Mukhtar',
				dob: (new Date('3-9-1008')).toLocaleDateString(),
				dojoining: (new Date('12-3-1995')).toLocaleDateString(),
				leaveAvail: 5,
				phone:  3459547704,
				age: 34,
				jobDescp: 'This is my first data'
			},
			{
				id: 8,
				firstName: 'Bilal',
				lastName: 'Mukhtar',
				dob: (new Date('3-9-1008')).toLocaleDateString(),
				dojoining: (new Date('12-3-1995')).toLocaleDateString(),
				leaveAvail: 5,
				phone:  3459547704,
				age: 34,
				jobDescp: 'This is my first data'
			},{
				id: 9,
				firstName: 'Fahad',
				lastName: 'Mukhtar',
				dob: (new Date('3-9-1008')).toLocaleDateString(),
				dojoining: (new Date('12-3-1995')).toLocaleDateString(),
				leaveAvail: 5,
				phone:  3459547704,
				age: 34,
				jobDescp: 'This is my first data'
			},
			{
				id: 10,
				firstName: 'Fawad',
				lastName: 'Mukhtar',
				dob: (new Date('3-9-1008')).toLocaleDateString(),
				dojoining: (new Date('12-3-1995')).toLocaleDateString(),
				leaveAvail: 5,
				phone:  3459547704,
				age: 34,
				jobDescp: 'This is my first data'
			}
		];

		return {employees}; // curly braces is must
	}

	// dateFormat():Date{
	// 	let date = new Date('2000-2-22');
	// 	let day = date.getDay();
	// 	let month = date.getMonth();
	// 	let year = date.getFullYear();
	// 	let myDate = year month day;	
	// 	return myDate;
	// } 
}
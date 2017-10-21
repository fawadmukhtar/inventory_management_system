export class EmployeesRecord {
	
	constructor(
		public id: number,
		public firstName : string,
		public lastName  : string,
		public dob       : Date,  // data type for dob should be date
		public dojoining : Date,
		public leaveAvail: number,
		public phone	 : number,
		public age       : number,
		public jobDescp	 : any
		
		) {}
}
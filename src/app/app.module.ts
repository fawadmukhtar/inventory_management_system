import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; 
import { FormsModule } from '@angular/forms';

// loading my custome routing module
import { AppRoutingModule } from './app-routing.module';

//loading service to use in all application
import { EmployeeRecordService } from './employee-record.service';

//loding and configuring fake database
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// loading component
import { AppComponent } from './app.component';
import { EmployeeRecordComponent } from './employee-record.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { AddNewEmployeeComponent } from './add-new-employee.component';

// import { Ng2PaginationModule } from 'ng2-pagination'; // main problem was
// here due to this shows error GET http://localhost:3000/ng2-pagination 404 (Not Found)

@NgModule({
	imports: [ 
		BrowserModule,
		AppRoutingModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		FormsModule 
	],
	declarations : [ 
		AppComponent,	
		EmployeeRecordComponent,
		EmployeeDetailComponent,
		AddNewEmployeeComponent
	 ],
	providers: [ EmployeeRecordService ],
	bootstrap: [ AppComponent ]
})

export class AppModule {}
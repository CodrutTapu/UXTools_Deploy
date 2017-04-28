import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { UserService } from './user.service';

@Component({
    selector: 'ux-tools',
    templateUrl: './assets/app/app.component.html',
    providers: [UserService],
})

export class AppComponent  {
	currentUser:any;
	currentUserFullName:string;

	constructor(private UserService: UserService) {}

	ngOnInit() {
		this.getUser();		
	}

	currentUserSave() {
		localStorage.setItem("currentUser", this.currentUser);
	}

	getUser() {
        this.UserService.getCurrentUser()
            .subscribe(
                data => {this.currentUserFullName = data.full_name; this.currentUser = data; },
                error => alert(Error),
                	() => this.currentUserSave()
            );
    }

}

import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { GridBlock } from '../gridBlock_component/gridBlock.component';
import { gridElem } from '../models/gridElem';
import { user } from '../models/user';
import { project } from '../models/project';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
declare var $:any;

@Component({
    selector: 'view-project',
    templateUrl: 'assets/app/viewProject_component/view.project.component.html',
})

export class ViewProjectComponent {
    projectTitle:any;
    currentUser:any;

    getProject:Array<any> = [];
    gridElements:Array<gridElem> = [];
    projectExpanded:any;

    author_id:number;
    project_type:string;
    project_id:number;
    project_name:string;

    constructor(private UserService: UserService, route: ActivatedRoute) {
        this.author_id = route.snapshot.params['author_id'];
        this.project_type = route.snapshot.params['project_type'];
        this.project_id = route.snapshot.params['project_id'];
        this.project_name = route.snapshot.params['project_name'];
    }

    ngOnInit() {
        this.httpGet();
        this.getUser();
    }

    httpGet() {
        this.UserService.getProject(this.author_id, this.project_id)
            .subscribe(
                data => {this.getProject = data,this.projectExpanded = data[0].expanded},
                error => alert(Error),
                    () => this.gridElements = JSON.parse(this.getProject[0].content)
            );
    }

    getUser() {
        this.UserService.getCurrentUser()
            .subscribe(
                data => this.currentUser = data,
                error => alert(Error)
            );
    }
}

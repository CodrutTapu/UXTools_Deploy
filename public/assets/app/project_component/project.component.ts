import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { GridBlock } from '../gridBlock_component/gridBlock.component';
import { gridElem } from '../models/gridElem';
import { user } from '../models/user';
import { project } from '../models/project';
import { textModule } from '../text_module/textModule';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
declare var $:any;
declare var toastr:any;

@Component({
    selector: 'project',
    templateUrl: 'assets/app/project_component/project.component.html',
})

export class ProjectComponent {

    projectTitle:any;

    getData:Array<any> = [];
    gridElements:Array<gridElem> = [];

    author_id:number;
    project_type:string;
    project_id:number;
    project_name:string;
    subscription:any;

    constructor(private UserService: UserService, route: ActivatedRoute) {
        this.author_id = route.snapshot.params['author_id'];
        this.project_type = route.snapshot.params['project_type'];
        this.project_id = route.snapshot.params['project_id'];
        this.project_name = route.snapshot.params['project_name'];
    }

    ngOnInit() {
        this.httpGet();
        this.subscription = Observable.interval(30000).subscribe(x => {
             this.saveProjectCall();
          });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    addGridElement(dim:number) {
        var i;
        var maxId = 0;
        for (i = 0; i < this.gridElements.length; i++) {
            if (this.gridElements[i].id > maxId) {
                maxId = this.gridElements[i].id;
            }
        }
        this.gridElements.push(new gridElem(dim,maxId+1,[],'#4c7ba0'));
    }

    httpGet() {
        this.UserService.getProject(this.author_id, this.project_id)
            .subscribe(
                data => this.getData = data,
                error => alert(Error),
                    () => this.gridElements = JSON.parse(this.getData[0].content)
            );
    }

    saveProjectCall() {
        var dd = new Date().toISOString().slice(0,10);
        var dt = new Date().toTimeString().slice(0,8);
        var ajaxurl = '/projects/saveProject',
        data =  {'author_id': this.author_id, 'project_name': this.project_name,'project_id': this.project_id, 'project_content': JSON.stringify(this.gridElements), 'project_modified': dd + ' ' + dt};
        $.post(ajaxurl, data, function (response:any) {});
    }

    saveProject() {
        this.saveProjectCall();
        toastr["success"](" ", "Project Saved!");
    }

}

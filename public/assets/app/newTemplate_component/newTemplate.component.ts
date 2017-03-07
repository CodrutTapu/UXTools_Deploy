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
import { imageModule } from '../image_module/imageModule';
import { aboutModule } from '../about_module/aboutModule';
import { aboutItem } from '../about_module/aboutItem';
import { scaleChartModule } from '../scale_chart_module/scaleChartModule';
import { scaleChartModuleScale } from '../scale_chart_module/scaleChartModuleScale';
import { tagModule } from '../tag_module/tagModule';
import { tagModuleTag } from '../tag_module/tagModuleTag';
import { barGraphModule } from '../bar_graph_module/barGraphModule';
import { barGraphBar } from '../bar_graph_module/barGraphBar';
import { devicesPlatformsModule } from '../devicesPlatforms_module/devicesPlatformsModule';
import { devicePlatform } from '../devicesPlatforms_module/devicePlatform';

declare var $:any;
declare var toastr:any;

@Component({
    selector: 'new-persona',
    templateUrl: 'assets/app/newTemplate_component/newTemplate.component.html',
})

export class newTemplateComponent {

    project_id:number;
    project_name:String;

    getData:Array<any> = [];
    gridElements:Array<any> = [];

    user:any;
    first_save_flag:boolean = true;
    id:number = 3;
    subscription:any;

    constructor(private UserService: UserService, route: ActivatedRoute) {
        this.project_id = route.snapshot.params['project_id'];
        this.project_name = route.snapshot.params['project_name'];
    }

    ngOnInit() {
        this.getUser();
        this.subscription = Observable.interval(30000).subscribe(x => {
            if(this.first_save_flag) {
                this.saveNewProjectCall();
                this.first_save_flag = false;
            } else {
                this.saveProjectCall();
            }
          });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    getUser() {
        this.UserService.getCurrentUser()
            .subscribe(
                data => this.user = data,
                error => alert(Error),
                    () => this.httpGet()
            );
    }

    httpGet() {
        this.UserService.getProject(this.user.id,this.project_id)
            .subscribe(
                data => this.getData = data,
                error => alert(Error),
                    () => this.gridElements = JSON.parse(this.getData[0].content)
            );
    }

    addGridElement(dim:number) {
        this.gridElements.push(new gridElem(dim,this.id+1,[],'#4c7ba0'));
        this.id = this.id+1;
    }

    saveNewProjectCall() {
        var dd = new Date().toISOString().slice(0,10);
        var dt = new Date().toTimeString().slice(0,8);
        var ajaxurl = '/projects/saveNewProject',
        data =  {'author_id': this.user.id, 'project_name': this.project_name, 'project_content': JSON.stringify(this.gridElements), 'project_created': dd + ' ' + dt};
        $.post(ajaxurl, data, function (response:any) {
            localStorage.setItem('insertId', response);
        });
    }

    saveProjectCall() {
        var dd = new Date().toISOString().slice(0,10);
        var dt = new Date().toTimeString().slice(0,8);
        var ajaxurl = '/projects/saveProject',
        data2 =  {'author_id': this.user.id, 'project_name': this.project_name, 'project_id': localStorage.getItem('insertId'), 'project_content': JSON.stringify(this.gridElements), 'project_modified': dd + ' ' + dt};
        $.post(ajaxurl, data2, function (response:any) {});
    }

    saveProject() {
        if(this.first_save_flag) {
            this.saveNewProjectCall();
            toastr["success"](" ", "Project Created!");
            this.first_save_flag = false;
        } else {
            this.saveProjectCall();
            toastr["success"](" ", "Project Saved!");
        }
    }

}

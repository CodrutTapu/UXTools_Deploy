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
    selector: 'new-blank-state',
    templateUrl: 'assets/app/newBlankState_component/newBlankState.component.html',
})

export class newBlankStateComponent {

    project_name:any = "Blank State";

    getData:Array<any> = [];
    gridElements:Array<gridElem> = [new gridElem(4,1,[new textModule(1,'text-module','<h1>Text Field 1</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>','#F8F8F8')],'#4c7ba0'),
                                    new gridElem(4,2,[new textModule(1,'text-module','<h1>Text Field 2</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>','#F8F8F8')],'#4c7ba0'),
                                    new gridElem(4,3,[new textModule(1,'text-module','<h1>Text Field 3</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>','#F8F8F8')],'#4c7ba0')];

    user:any;
    first_save_flag:boolean = true;
    id:number = 3;
    subscription:any;

    constructor(private UserService: UserService) {}

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
                    () => console.log('Finish!')
            );
    }

    addGridElement(dim:number) {
        this.gridElements.push(new gridElem(dim,this.id+1,[],'#4c7ba0'));
        this.id = this.id+1;
    }

    saveNewProjectCall() {
        var ajaxurl = '/projects/saveNewProject',
        data =  {'author_id': this.user.id, 'project_name': this.project_name, 'project_content': JSON.stringify(this.gridElements)};
        $.post(ajaxurl, data, function (response:any) {
            localStorage.setItem('insertId', response);
        });
    }

    saveProjectCall() {
        var ajaxurl = '/projects/saveProject',
        data2 =  {'author_id': this.user.id, 'project_name': this.project_name, 'project_id': localStorage.getItem('insertId'), 'project_content': JSON.stringify(this.gridElements)};
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

import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { user } from '../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
declare var $:any;
declare var toastr:any;
declare var jsMind:any;
declare var _jm:any;

@Component({
    selector: 'new-mind-map',
    templateUrl: 'assets/app/newMindMap_component/newMindMap.component.html',
})

export class newMindMapComponent {

    project_name:any = "Default Mind Map";
    user:any;
    first_save_flag:boolean = true;
    subscription:any;

    constructor(private UserService: UserService) {}

    ngAfterViewInit() {
        $.getScript( "/assets/vendor/jsmind.custom.js", function() { });
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
                    () => console.log('Finish!')
            );
    }

    saveNewProjectCall() {
        var mind_data = _jm.get_data();
        var mind_name = mind_data.meta.name;
        var mind_str = jsMind.util.json.json2string(mind_data);
        var dd = new Date().toISOString().slice(0,10);
        var dt = new Date().toTimeString().slice(0,8);
        var ajaxurl = '/projects/saveNewProject',
        data =  {'author_id': this.user.id, 'project_name': this.project_name, 'project_content': mind_str, 'project_created': dd + ' ' + dt, 'project_type': 'mind_map'};
        $.post(ajaxurl, data, function (response:any) {
            localStorage.setItem('insertId', response);
        });
    }

    saveProjectCall() {
        var mind_data = _jm.get_data();
        var mind_name = mind_data.meta.name;
        var mind_str = jsMind.util.json.json2string(mind_data);
        var dd = new Date().toISOString().slice(0,10);
        var dt = new Date().toTimeString().slice(0,8);
        var ajaxurl = '/projects/saveProject',
        data2 =  {'author_id': this.user.id, 'project_name': this.project_name, 'project_id': localStorage.getItem('insertId'), 'project_content': mind_str, 'project_modified': dd + ' ' + dt};
        $.post(ajaxurl, data2, function (response:any) {});
    }

    saveProject() {
        if(this.first_save_flag) {
            this.saveNewProjectCall();
            this.first_save_flag = false;
            toastr["success"](" ", "Project Created!");
        } else {
            this.saveProjectCall();
            toastr["success"](" ", "Project Saved!");
        }
    }
}

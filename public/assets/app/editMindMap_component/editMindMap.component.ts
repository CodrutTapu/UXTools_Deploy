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
    selector: 'edit-mind-map',
    templateUrl: 'assets/app/editMindMap_component/editMindMap.component.html',
})

export class editMindMapComponent {
    getData:Array<any> = [];
    mindMapContent:any;
    user:any;

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
        this.getUser();
        this.httpGet();
        this.subscription = Observable.interval(30000).subscribe(x => {
            this.saveProjectCall();
          });
    }

    getUser() {
        this.UserService.getCurrentUser()
            .subscribe(
                data => this.user = data,
                error => alert(Error),
                    () => console.log('Finish!')
            );
    }

    ngAfterViewInit() {
        $.getScript( "/assets/vendor/jsmind.functions.js", function() { });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
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
        this.saveProjectCall();
        toastr["success"](" ", "Project Saved!");
    }

    httpGet() {
        this.UserService.getProject(this.author_id, this.project_id)
            .subscribe(
                data => this.getData = data,
                error => alert(Error),
                    () => localStorage.setItem('MindMapData', this.getData[0].content)
            );
    }
}

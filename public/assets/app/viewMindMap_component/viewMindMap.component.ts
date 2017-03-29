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
    selector: 'view-mind-map',
    templateUrl: 'assets/app/viewMindMap_component/viewMindMap.component.html',
})

export class viewMindMapComponent {
    getData:Array<any> = [];
    mindMapContent:any;

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

    renderMindMap(mindMapContent:any) {
        var options = {
            container:'view_jsmind_container',
            theme:'greensea',
            editable:false
        };
        var jm = new jsMind(options);
        jm.show(mindMapContent);
    }

    ngOnInit() {
        this.httpGet();
    }

    httpGet() {
        this.UserService.getProject(this.author_id, this.project_id)
            .subscribe(
                data => this.getData = data,
                error => alert(Error),
                    () => this.renderMindMap(JSON.parse(this.getData[0].content))
            );
    }
}

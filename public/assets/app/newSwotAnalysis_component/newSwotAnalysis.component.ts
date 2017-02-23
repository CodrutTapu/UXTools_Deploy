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
    templateUrl: 'assets/app/newSwotAnalysis_component/newSwotAnalysis.component.html',
})

export class newSwotAnalysisComponent {

    project_name:any = "Default SWOT Analysis";

    getData:Array<any> = [];
    gridElements:Array<gridElem> = [new gridElem(12,1,[new textModule(1,'text-module','<h1 align="center"><font color="#4c7ba0">SWOT Analysis</font></h1>','#F8F8F8'),
                                                      ],'#4c7ba0'),
                                   new gridElem(6,2,[new textModule(1,'text-module','<h1><font color="#4c7ba0">Strengths</font></h1><br><p>What makes your service the top tool for addressing consumer needs? What are your cutting-edge features, your novel capabilities that set your company apart.</p><i>Example: Reputation in marketplace. Expertise at partner level in HRM consultancy.</i>','#F8F8F8'),
                                                       ],'#4c7ba0'),
                                   new gridElem(6,3,[new textModule(1,'text-module','<h1><font color="#4c7ba0">Weaknesses</font></h1><br><p>What aspect of your company has room for growth? What part of your business could be improved to strengthen your services? What elements have prompted feedback?</p><i>Example: Shortage of consultants at operating level rather than partner level. Unable to deal with multi-disciplinary assignments because of size or lack of ability.</i>','#F8F8F8'),
                                                      ],'#4c7ba0'),
                                   new gridElem(6,4,[new textModule(1,'text-module','<h1><font color="#4c7ba0">Opportunities</font></h1><br><p>What are consumers craving? What does your community need? What skills, knowledge, and tools does your company have to extend to individuals, businesses, or organizations?</p><i>Example: Well established position with a well defined market niche. Identified market for consultancy in areas other than HRM.</i>','#F8F8F8'),
                                                      ],'#4c7ba0'),
                                   new gridElem(6,5,[new textModule(1,'text-module','<h1><font color="#4c7ba0">Threats</font></h1><br><p>What obstacles do you foresee challenging your company’s success? Which competitors have the potential to threat your business? Is your consumer market evolving in a way that poses a risk to your company’s future?</p><i>Example: Large consultancies operating at a minor level. Other small consultancies looking to invade the marketplace.</i>','#F8F8F8'),
                                                      ],'#4c7ba0')
                                   ];

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

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
    templateUrl: 'assets/app/newPersona_component/newPersona.component.html',
})

export class newPersonaComponent {

    project_name:any = "Default Persona";

    getData:Array<any> = [];
    gridElements:Array<gridElem> = [new gridElem(4,1,[new imageModule(2,'image-module','https://www.w3schools.com/howto/img_avatar.png'),
                                                      new textModule(1,'text-module','<p align="center"><font color="#ffffff">\"A quotation that captures this persons personality.\"</font></p>','#4c7ba0'),
                                                      new aboutModule(13,'about-module',[new aboutItem('<p><font color="#4c7ba0">age</font></p>','<p>1-100</p>'),
                                                            new aboutItem('<p><font color="#4c7ba0">occupation</font></p>','<p>What they do</p>'),
                                                            new aboutItem('<p><font color="#4c7ba0">work</font></p>','<p>Married, kids, etc.</p>'),
                                                            new aboutItem('<p><font color="#4c7ba0">location</font></p>','<p>City, state</p>'),
                                                            new aboutItem('<p><font color="#4c7ba0">Character</font></p>','<p>Type</p>'),
                                                        ],'#F8F8F8'),
                                                      new scaleChartModule(7,'scale-chart-module','<h1><font color="#4c7ba0">Personality</font></h1>',[new scaleChartModuleScale('<p>Introvert</p>','<p>Extrovert</p>',40),new scaleChartModuleScale('<p>Analytical</p>','<p>Creative</p>',30),new scaleChartModuleScale('<p>Conservative</p>','<p>Liberal</p>',80),new scaleChartModuleScale('<p>Passive</p>','<p>Active</p>',60)],'#F8F8F8'),
                                                      ],'#4c7ba0'),
                                   new gridElem(4,2,[new tagModule(5,'tags-module',[new tagModuleTag(1,'<p><font color="#fffffff">Trait</font></p>','#4c7ba0'),new tagModuleTag(2,'<p><font color="#fffffff">Trait</font></p>','#4c7ba0'),new tagModuleTag(3,'<p><font color="#fffffff">Trait</font></p>','#4c7ba0'),new tagModuleTag(4,'<p><font color="#fffffff">Trait</font></p>','#4c7ba0')],'#F8F8F8'),
                                                     new textModule(1,'text-module','<h1><font color="#4c7ba0">Goals</font></h1></br><ul><li><span>The goals this user hopes to achieve.</span></li><li><span>A task that needs to be completed.</span></li><li><span>A life goal to be reached.</span></li><li><span>Or an experience to be felt.</span><br></li></ul><br>','#F8F8F8'),
                                                     new textModule(1,'text-module','<h1><font color="#4c7ba0">Frustrations</font></h1></br><ul><li><span>The frustrations this user would like to avoid.</span></li><li><span>The obstacle that prevents this user from achieving their goals.</span></li><li><span>The problems with the solutions already available.</span></li><li><span>The product or service that currently does not exist.</span><br></li></ul><br>','#F8F8F8'),
                                                     new textModule(1,'text-module','<h1><font color="#4c7ba0">Bio</font></h1></br><p>The bio should be a short paragraph to describe the user journey. It should include some of their history leading up to a current use case. It may be helpful to incorporate information listed across the template and add pertinent details that may have been left out. Highlight factors of the user\'s personal and of professional life that make this user an ideal customer of your product.</p><br>','#F8F8F8'),
                                                       ],'#4c7ba0'),
                                   new gridElem(4,3,[new barGraphModule(3,'bar-graph-module','<h1><font color="#4c7ba0">Motivations</font></h1>',[new barGraphBar(30,'<p>Incentive</p>'),new barGraphBar(80,'<p>Fear</p>'),new barGraphBar(40,'<p>Achievement</p>'),new barGraphBar(25,'<p>Growth</p>'),new barGraphBar(45,'<p>Power</p>'),new barGraphBar(90,'<p>Social</p>')],'#F8F8F8'),
                                                     new devicesPlatformsModule(12,1,'devices-platforms-module',[new devicePlatform('<i class="fa fa-mobile" aria-hidden="true"></i>',true,'Mobile'),
                                                                                    new devicePlatform('<i class="fa fa-tablet" aria-hidden="true"></i>',true,'Tablet'),
                                                                                    new devicePlatform('<i class="fa fa-laptop" aria-hidden="true"></i>',true,'Laptop'),
                                                                                    new devicePlatform('<i class="fa fa-desktop" aria-hidden="true"></i>',true,'Desktop'),
                                                                                    new devicePlatform('<i class="fa fa-television" aria-hidden="true"></i>',false,'TV'),
                                                                                    new devicePlatform('<i class="fa fa-windows" aria-hidden="true"></i>',true,'Windows'),
                                                                                    new devicePlatform('<i class="fa fa-apple" aria-hidden="true"></i>',true,'Apple'),
                                                                                    new devicePlatform('<i class="fa fa-linux" aria-hidden="true"></i>',false,'Linux'),
                                                                                    new devicePlatform('<i class="fa fa-chrome" aria-hidden="true"></i>',false,'Chrome'),
                                                                                    new devicePlatform('<i class="fa fa-firefox" aria-hidden="true"></i>',false,'Firefox'),
                                                                                    new devicePlatform('<i class="fa fa-internet-explorer" aria-hidden="true"></i>',false,'IE'),
                                                                                    new devicePlatform('<i class="fa fa-safari" aria-hidden="true"></i>',false,'Safari')],'#F8F8F8'),
                                                     new barGraphModule(3,'bar-graph-module','<h1><font color="#4c7ba0">Preferred Channels</font></h1>',[new barGraphBar(35,'<p>Traditional Ads</p>'),new barGraphBar(80,'<p>Online & Social Media</p>'),new barGraphBar(20,'<p>Referral</p>'),new barGraphBar(35,'<p>Guerrilla Efforts & PR</p>')],'#F8F8F8')
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

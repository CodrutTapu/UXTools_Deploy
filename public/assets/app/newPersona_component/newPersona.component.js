var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../models/gridElem", "../text_module/textModule", "../user.service", "rxjs/Rx", "../image_module/imageModule", "../about_module/aboutModule", "../about_module/aboutItem", "../scale_chart_module/scaleChartModule", "../scale_chart_module/scaleChartModuleScale", "../tag_module/tagModule", "../tag_module/tagModuleTag", "../bar_graph_module/barGraphModule", "../bar_graph_module/barGraphBar", "../devicesPlatforms_module/devicesPlatformsModule", "../devicesPlatforms_module/devicePlatform", "rxjs/add/operator/map"], function (require, exports, core_1, gridElem_1, textModule_1, user_service_1, Rx_1, imageModule_1, aboutModule_1, aboutItem_1, scaleChartModule_1, scaleChartModuleScale_1, tagModule_1, tagModuleTag_1, barGraphModule_1, barGraphBar_1, devicesPlatformsModule_1, devicePlatform_1) {
    "use strict";
    var newPersonaComponent = (function () {
        function newPersonaComponent(UserService) {
            this.UserService = UserService;
            this.project_name = "Default Persona";
            this.getData = [];
            this.gridElements = [new gridElem_1.gridElem(4, 1, [new imageModule_1.imageModule(2, 'image-module', 'https://www.w3schools.com/howto/img_avatar.png'),
                    new textModule_1.textModule(1, 'text-module', '<p align="center"><font color="#ffffff">\"A quotation that captures this persons personality.\"</font></p>', '#4c7ba0'),
                    new aboutModule_1.aboutModule(13, 'about-module', [new aboutItem_1.aboutItem('<p><font color="#4c7ba0">age</font></p>', '<p>1-100</p>'),
                        new aboutItem_1.aboutItem('<p><font color="#4c7ba0">occupation</font></p>', '<p>What they do</p>'),
                        new aboutItem_1.aboutItem('<p><font color="#4c7ba0">work</font></p>', '<p>Married, kids, etc.</p>'),
                        new aboutItem_1.aboutItem('<p><font color="#4c7ba0">location</font></p>', '<p>City, state</p>'),
                        new aboutItem_1.aboutItem('<p><font color="#4c7ba0">Character</font></p>', '<p>Type</p>'),
                    ], '#F8F8F8'),
                    new scaleChartModule_1.scaleChartModule(7, 'scale-chart-module', '<h1><font color="#4c7ba0">Personality</font></h1>', [new scaleChartModuleScale_1.scaleChartModuleScale('<p>Introvert</p>', '<p>Extrovert</p>', 40), new scaleChartModuleScale_1.scaleChartModuleScale('<p>Analytical</p>', '<p>Creative</p>', 30), new scaleChartModuleScale_1.scaleChartModuleScale('<p>Conservative</p>', '<p>Liberal</p>', 80), new scaleChartModuleScale_1.scaleChartModuleScale('<p>Passive</p>', '<p>Active</p>', 60)], '#F8F8F8'),
                ], '#4c7ba0'),
                new gridElem_1.gridElem(4, 2, [new tagModule_1.tagModule(5, 'tags-module', [new tagModuleTag_1.tagModuleTag(1, '<p><font color="#fffffff">Trait</font></p>', '#4c7ba0'), new tagModuleTag_1.tagModuleTag(2, '<p><font color="#fffffff">Trait</font></p>', '#4c7ba0'), new tagModuleTag_1.tagModuleTag(3, '<p><font color="#fffffff">Trait</font></p>', '#4c7ba0'), new tagModuleTag_1.tagModuleTag(4, '<p><font color="#fffffff">Trait</font></p>', '#4c7ba0')], '#F8F8F8'),
                    new textModule_1.textModule(1, 'text-module', '<h1><font color="#4c7ba0">Goals</font></h1></br><ul><li><span>The goals this user hopes to achieve.</span></li><li><span>A task that needs to be completed.</span></li><li><span>A life goal to be reached.</span></li><li><span>Or an experience to be felt.</span><br></li></ul><br>', '#F8F8F8'),
                    new textModule_1.textModule(1, 'text-module', '<h1><font color="#4c7ba0">Frustrations</font></h1></br><ul><li><span>The frustrations this user would like to avoid.</span></li><li><span>The obstacle that prevents this user from achieving their goals.</span></li><li><span>The problems with the solutions already available.</span></li><li><span>The product or service that currently does not exist.</span><br></li></ul><br>', '#F8F8F8'),
                    new textModule_1.textModule(1, 'text-module', '<h1><font color="#4c7ba0">Bio</font></h1></br><p>The bio should be a short paragraph to describe the user journey. It should include some of their history leading up to a current use case. It may be helpful to incorporate information listed across the template and add pertinent details that may have been left out. Highlight factors of the user\'s personal and of professional life that make this user an ideal customer of your product.</p><br>', '#F8F8F8'),
                ], '#4c7ba0'),
                new gridElem_1.gridElem(4, 3, [new barGraphModule_1.barGraphModule(3, 'bar-graph-module', '<h1><font color="#4c7ba0">Motivations</font></h1>', [new barGraphBar_1.barGraphBar(30, '<p>Incentive</p>'), new barGraphBar_1.barGraphBar(80, '<p>Fear</p>'), new barGraphBar_1.barGraphBar(40, '<p>Achievement</p>'), new barGraphBar_1.barGraphBar(25, '<p>Growth</p>'), new barGraphBar_1.barGraphBar(45, '<p>Power</p>'), new barGraphBar_1.barGraphBar(90, '<p>Social</p>')], '#F8F8F8'),
                    new devicesPlatformsModule_1.devicesPlatformsModule(12, 1, 'devices-platforms-module', [new devicePlatform_1.devicePlatform('<i class="fa fa-mobile" aria-hidden="true"></i>', true, 'Mobile'),
                        new devicePlatform_1.devicePlatform('<i class="fa fa-tablet" aria-hidden="true"></i>', true, 'Tablet'),
                        new devicePlatform_1.devicePlatform('<i class="fa fa-laptop" aria-hidden="true"></i>', true, 'Laptop'),
                        new devicePlatform_1.devicePlatform('<i class="fa fa-desktop" aria-hidden="true"></i>', true, 'Desktop'),
                        new devicePlatform_1.devicePlatform('<i class="fa fa-television" aria-hidden="true"></i>', false, 'TV'),
                        new devicePlatform_1.devicePlatform('<i class="fa fa-windows" aria-hidden="true"></i>', true, 'Windows'),
                        new devicePlatform_1.devicePlatform('<i class="fa fa-apple" aria-hidden="true"></i>', true, 'Apple'),
                        new devicePlatform_1.devicePlatform('<i class="fa fa-linux" aria-hidden="true"></i>', false, 'Linux'),
                        new devicePlatform_1.devicePlatform('<i class="fa fa-chrome" aria-hidden="true"></i>', false, 'Chrome'),
                        new devicePlatform_1.devicePlatform('<i class="fa fa-firefox" aria-hidden="true"></i>', false, 'Firefox'),
                        new devicePlatform_1.devicePlatform('<i class="fa fa-internet-explorer" aria-hidden="true"></i>', false, 'IE'),
                        new devicePlatform_1.devicePlatform('<i class="fa fa-safari" aria-hidden="true"></i>', false, 'Safari')], '#F8F8F8'),
                    new barGraphModule_1.barGraphModule(3, 'bar-graph-module', '<h1><font color="#4c7ba0">Preferred Channels</font></h1>', [new barGraphBar_1.barGraphBar(35, '<p>Traditional Ads</p>'), new barGraphBar_1.barGraphBar(80, '<p>Online & Social Media</p>'), new barGraphBar_1.barGraphBar(20, '<p>Referral</p>'), new barGraphBar_1.barGraphBar(35, '<p>Guerrilla Efforts & PR</p>')], '#F8F8F8')
                ], '#4c7ba0')
            ];
            this.first_save_flag = true;
            this.id = 3;
        }
        newPersonaComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.getUser();
            this.subscription = Rx_1.Observable.interval(30000).subscribe(function (x) {
                if (_this.first_save_flag) {
                    _this.saveNewProjectCall();
                    _this.first_save_flag = false;
                }
                else {
                    _this.saveProjectCall();
                }
            });
        };
        newPersonaComponent.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
        };
        newPersonaComponent.prototype.getUser = function () {
            var _this = this;
            this.UserService.getCurrentUser()
                .subscribe(function (data) { return _this.user = data; }, function (error) { return alert(Error); }, function () { return console.log('Finish!'); });
        };
        newPersonaComponent.prototype.addGridElement = function (dim) {
            this.gridElements.push(new gridElem_1.gridElem(dim, this.id + 1, [], '#4c7ba0'));
            this.id = this.id + 1;
        };
        newPersonaComponent.prototype.saveNewProjectCall = function () {
            var dd = new Date().toISOString().slice(0, 10);
            var dt = new Date().toTimeString().slice(0, 8);
            var ajaxurl = '/projects/saveNewProject', data = { 'author_id': this.user.id, 'project_name': this.project_name, 'project_content': JSON.stringify(this.gridElements), 'project_created': dd + ' ' + dt };
            $.post(ajaxurl, data, function (response) {
                localStorage.setItem('insertId', response);
            });
        };
        newPersonaComponent.prototype.saveProjectCall = function () {
            var dd = new Date().toISOString().slice(0, 10);
            var dt = new Date().toTimeString().slice(0, 8);
            var ajaxurl = '/projects/saveProject', data2 = { 'author_id': this.user.id, 'project_name': this.project_name, 'project_id': localStorage.getItem('insertId'), 'project_content': JSON.stringify(this.gridElements), 'project_modified': dd + ' ' + dt };
            $.post(ajaxurl, data2, function (response) { });
        };
        newPersonaComponent.prototype.saveProject = function () {
            if (this.first_save_flag) {
                this.saveNewProjectCall();
                toastr["success"](" ", "Project Created!");
                this.first_save_flag = false;
            }
            else {
                this.saveProjectCall();
                toastr["success"](" ", "Project Saved!");
            }
        };
        return newPersonaComponent;
    }());
    newPersonaComponent = __decorate([
        core_1.Component({
            selector: 'new-persona',
            templateUrl: 'assets/app/newPersona_component/newPersona.component.html',
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], newPersonaComponent);
    exports.newPersonaComponent = newPersonaComponent;
});
//# sourceMappingURL=newPersona.component.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../models/gridElem", "../text_module/textModule", "../user.service", "rxjs/Rx", "rxjs/add/operator/map"], function (require, exports, core_1, gridElem_1, textModule_1, user_service_1, Rx_1) {
    "use strict";
    var newSwotAnalysisComponent = (function () {
        function newSwotAnalysisComponent(UserService) {
            this.UserService = UserService;
            this.project_name = "Default SWOT Analysis";
            this.getData = [];
            this.gridElements = [new gridElem_1.gridElem(12, 1, [new textModule_1.textModule(1, 'text-module', '<h1 align="center"><font color="#4c7ba0">SWOT Analysis</font></h1>', '#F8F8F8'),
                ], '#4c7ba0'),
                new gridElem_1.gridElem(6, 2, [new textModule_1.textModule(1, 'text-module', '<h1><font color="#4c7ba0">Strengths</font></h1><br><p>What makes your service the top tool for addressing consumer needs? What are your cutting-edge features, your novel capabilities that set your company apart.</p><i>Example: Reputation in marketplace. Expertise at partner level in HRM consultancy.</i>', '#F8F8F8'),
                ], '#4c7ba0'),
                new gridElem_1.gridElem(6, 3, [new textModule_1.textModule(1, 'text-module', '<h1><font color="#4c7ba0">Weaknesses</font></h1><br><p>What aspect of your company has room for growth? What part of your business could be improved to strengthen your services? What elements have prompted feedback?</p><i>Example: Shortage of consultants at operating level rather than partner level. Unable to deal with multi-disciplinary assignments because of size or lack of ability.</i>', '#F8F8F8'),
                ], '#4c7ba0'),
                new gridElem_1.gridElem(6, 4, [new textModule_1.textModule(1, 'text-module', '<h1><font color="#4c7ba0">Opportunities</font></h1><br><p>What are consumers craving? What does your community need? What skills, knowledge, and tools does your company have to extend to individuals, businesses, or organizations?</p><i>Example: Well established position with a well defined market niche. Identified market for consultancy in areas other than HRM.</i>', '#F8F8F8'),
                ], '#4c7ba0'),
                new gridElem_1.gridElem(6, 5, [new textModule_1.textModule(1, 'text-module', '<h1><font color="#4c7ba0">Threats</font></h1><br><p>What obstacles do you foresee challenging your company’s success? Which competitors have the potential to threat your business? Is your consumer market evolving in a way that poses a risk to your company’s future?</p><i>Example: Large consultancies operating at a minor level. Other small consultancies looking to invade the marketplace.</i>', '#F8F8F8'),
                ], '#4c7ba0')
            ];
            this.first_save_flag = true;
            this.id = 5;
        }
        newSwotAnalysisComponent.prototype.ngOnInit = function () {
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
        newSwotAnalysisComponent.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
        };
        newSwotAnalysisComponent.prototype.getUser = function () {
            var _this = this;
            this.UserService.getCurrentUser()
                .subscribe(function (data) { return _this.user = data; }, function (error) { return alert(Error); }, function () { return console.log('Finish!'); });
        };
        newSwotAnalysisComponent.prototype.addGridElement = function (dim) {
            this.gridElements.push(new gridElem_1.gridElem(dim, this.id + 1, [], '#4c7ba0'));
            this.id = this.id + 1;
        };
        newSwotAnalysisComponent.prototype.saveNewProjectCall = function () {
            var dd = new Date().toISOString().slice(0, 10);
            var dt = new Date().toTimeString().slice(0, 8);
            var ajaxurl = '/projects/saveNewProject', data = { 'author_id': this.user.id, 'project_name': this.project_name, 'project_content': JSON.stringify(this.gridElements), 'project_created': dd + ' ' + dt, 'project_type': 'swot' };
            $.post(ajaxurl, data, function (response) {
                localStorage.setItem('insertId', response);
            });
        };
        newSwotAnalysisComponent.prototype.saveProjectCall = function () {
            var dd = new Date().toISOString().slice(0, 10);
            var dt = new Date().toTimeString().slice(0, 8);
            var ajaxurl = '/projects/saveProject', data2 = { 'author_id': this.user.id, 'project_name': this.project_name, 'project_id': localStorage.getItem('insertId'), 'project_content': JSON.stringify(this.gridElements), 'project_modified': dd + ' ' + dt };
            $.post(ajaxurl, data2, function (response) { });
        };
        newSwotAnalysisComponent.prototype.saveProject = function () {
            if (this.first_save_flag) {
                this.saveNewProjectCall();
                this.first_save_flag = false;
                toastr["success"](" ", "Project Created!");
            }
            else {
                this.saveProjectCall();
                toastr["success"](" ", "Project Saved!");
            }
        };
        return newSwotAnalysisComponent;
    }());
    newSwotAnalysisComponent = __decorate([
        core_1.Component({
            selector: 'new-persona',
            templateUrl: 'assets/app/newSwotAnalysis_component/newSwotAnalysis.component.html',
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], newSwotAnalysisComponent);
    exports.newSwotAnalysisComponent = newSwotAnalysisComponent;
});
//# sourceMappingURL=newSwotAnalysis.component.js.map
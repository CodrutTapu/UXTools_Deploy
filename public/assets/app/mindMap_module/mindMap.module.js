var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../cloneModule_service/cloneModule.service", "rxjs/Rx", "rxjs/add/operator/map"], function (require, exports, core_1, cloneModule_service_1, Rx_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MindMapModule = (function () {
        function MindMapModule(_cloneModuleService) {
            this._cloneModuleService = _cloneModuleService;
        }
        MindMapModule.prototype.ngOnInit = function () {
            var _this = this;
            this.subscription = Rx_1.Observable.interval(1000).subscribe(function (x) {
                var mind_data = _jm.get_data();
                var mind_name = mind_data.meta.name;
                var mind_str = jsMind.util.json.json2string(mind_data);
                _this.module.content = mind_str;
            });
        };
        MindMapModule.prototype.ngOnDestroy = function () {
            this.subscription.unsubscribe();
        };
        MindMapModule.prototype.cloneModule = function (gE, module) {
            this._cloneModuleService.cloneModule(gE, module);
        };
        MindMapModule.prototype.deleteMindMapModule = function (gE, module) {
            gE.modules.splice(gE.modules.indexOf(module), 1);
        };
        MindMapModule.prototype.ngAfterViewInit = function () {
            if (this.module.content == 'mind map') {
                $.getScript("/assets/vendor/jsmind.custom.js", function () { });
            }
            else {
                localStorage.setItem('mind_map_content', this.module.content);
                $.getScript("/assets/vendor/jsmind.edit.js", function () { });
            }
        };
        return MindMapModule;
    }());
    MindMapModule = __decorate([
        core_1.Component({
            selector: 'mind-map-module',
            templateUrl: 'assets/app/mindMap_module/mindMap.module.html',
            styleUrls: ['assets/app/mindMap_module/mindMap.module.css'],
            inputs: ['gE', 'gridElements', 'module'],
            providers: [cloneModule_service_1.cloneModuleService]
        }),
        __metadata("design:paramtypes", [cloneModule_service_1.cloneModuleService])
    ], MindMapModule);
    exports.MindMapModule = MindMapModule;
});
//# sourceMappingURL=mindMap.module.js.map
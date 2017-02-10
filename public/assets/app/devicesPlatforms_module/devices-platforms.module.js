var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "../cloneModule_service/cloneModule.service"], function (require, exports, core_1, cloneModule_service_1) {
    "use strict";
    var DevicesPlatformsModule = (function () {
        function DevicesPlatformsModule(_cloneModuleService) {
            this._cloneModuleService = _cloneModuleService;
        }
        DevicesPlatformsModule.prototype.cloneModule = function (gE, module) {
            this._cloneModuleService.cloneModule(gE, module);
        };
        DevicesPlatformsModule.prototype.ngOnInit = function () {
            setTimeout(function () {
                $('[data-toggle="tooltip"]').tooltip();
            }, 500);
        };
        DevicesPlatformsModule.prototype.deleteDevicesPlatformsModule = function (gE, module) {
            gE.modules.splice(gE.modules.indexOf(module), 1);
        };
        DevicesPlatformsModule.prototype.switchDevicePlatformItemStatus = function (dp) {
            dp.status = !dp.status;
            setTimeout(function () {
                $('[data-toggle="tooltip"]').tooltip();
            }, 500);
        };
        return DevicesPlatformsModule;
    }());
    DevicesPlatformsModule = __decorate([
        core_1.Component({
            selector: 'devices-platforms-module',
            templateUrl: 'assets/app/devicesPlatforms_module/devices-platforms.module.html',
            styleUrls: ['assets/app/devicesPlatforms_module/devices-platforms.module.css'],
            inputs: ['gE', 'gridElements', 'module'],
            providers: [cloneModule_service_1.cloneModuleService]
        }),
        __metadata("design:paramtypes", [cloneModule_service_1.cloneModuleService])
    ], DevicesPlatformsModule);
    exports.DevicesPlatformsModule = DevicesPlatformsModule;
});
//# sourceMappingURL=devices-platforms.module.js.map
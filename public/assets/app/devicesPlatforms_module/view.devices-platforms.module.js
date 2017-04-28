var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ViewDevicesPlatformsModule = (function () {
        function ViewDevicesPlatformsModule() {
        }
        ViewDevicesPlatformsModule.prototype.ngOnInit = function () {
            setTimeout(function () {
                $('[data-toggle="tooltip"]').tooltip();
            }, 500);
        };
        return ViewDevicesPlatformsModule;
    }());
    ViewDevicesPlatformsModule = __decorate([
        core_1.Component({
            selector: 'view-devices-platforms-module',
            templateUrl: 'assets/app/devicesPlatforms_module/view.devices-platforms.module.html',
            styleUrls: ['assets/app/devicesPlatforms_module/devices-platforms.module.css'],
            inputs: ['gE', 'module']
        })
    ], ViewDevicesPlatformsModule);
    exports.ViewDevicesPlatformsModule = ViewDevicesPlatformsModule;
});
//# sourceMappingURL=view.devices-platforms.module.js.map
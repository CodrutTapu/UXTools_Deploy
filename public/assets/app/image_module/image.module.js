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
    Object.defineProperty(exports, "__esModule", { value: true });
    var ImageModule = (function () {
        function ImageModule(_cloneModuleService) {
            this._cloneModuleService = _cloneModuleService;
        }
        ImageModule.prototype.cloneModule = function (gE, module) {
            this._cloneModuleService.cloneModule(gE, module);
        };
        ImageModule.prototype.deleteImageModule = function (gE, module) {
            gE.modules.splice(gE.modules.indexOf(module), 1);
        };
        ImageModule.prototype.changeImageUrl = function (module) {
            module.url = this.imageUrl;
        };
        ImageModule.prototype.deleteImageUrl = function (module) {
            module.url = 'images/img-default.png';
        };
        return ImageModule;
    }());
    ImageModule = __decorate([
        core_1.Component({
            selector: 'image-module',
            templateUrl: 'assets/app/image_module/image.module.html',
            styleUrls: ['assets/app/image_module/image.module.css'],
            inputs: ['gE', 'gridElements', 'module'],
            providers: [cloneModule_service_1.cloneModuleService]
        }),
        __metadata("design:paramtypes", [cloneModule_service_1.cloneModuleService])
    ], ImageModule);
    exports.ImageModule = ImageModule;
});
//# sourceMappingURL=image.module.js.map
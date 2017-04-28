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
    var SocialMediaModule = (function () {
        function SocialMediaModule(_cloneModuleService) {
            this._cloneModuleService = _cloneModuleService;
        }
        SocialMediaModule.prototype.cloneModule = function (gE, module) {
            this._cloneModuleService.cloneModule(gE, module);
        };
        SocialMediaModule.prototype.deleteSocialMediaModule = function (gE, module) {
            gE.modules.splice(gE.modules.indexOf(module), 1);
        };
        SocialMediaModule.prototype.updateSocialLinks = function (module) {
            module.facebookUrl = this.facebookUrl;
            module.twitterUrl = this.twitterUrl;
            module.linkedinUrl = this.linkedinUrl;
            module.externalUrl = this.externalUrl;
        };
        SocialMediaModule.prototype.ngOnInit = function () {
            this.facebookUrl = this.module.facebookUrl;
            this.twitterUrl = this.module.twitterUrl;
            this.linkedinUrl = this.module.linkedinUrl;
            this.externalUrl = this.module.externalUrl;
        };
        return SocialMediaModule;
    }());
    SocialMediaModule = __decorate([
        core_1.Component({
            selector: 'social-media-module',
            templateUrl: 'assets/app/social_media_module/social-media.module.html',
            styleUrls: ['assets/app/social_media_module/social-media.module.css'],
            inputs: ['gE', 'gridElements', 'module'],
            providers: [cloneModule_service_1.cloneModuleService]
        }),
        __metadata("design:paramtypes", [cloneModule_service_1.cloneModuleService])
    ], SocialMediaModule);
    exports.SocialMediaModule = SocialMediaModule;
});
//# sourceMappingURL=social-media.module.js.map
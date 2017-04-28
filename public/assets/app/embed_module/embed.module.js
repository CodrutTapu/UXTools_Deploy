var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/platform-browser", "../cloneModule_service/cloneModule.service"], function (require, exports, core_1, platform_browser_1, cloneModule_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmbedModule = (function () {
        function EmbedModule(sanitizer, _cloneModuleService) {
            this.sanitizer = sanitizer;
            this._cloneModuleService = _cloneModuleService;
        }
        EmbedModule.prototype.cloneModule = function (gE, module) {
            this._cloneModuleService.cloneModule(gE, module);
        };
        EmbedModule.prototype.ngOnInit = function () {
            this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.module.content);
        };
        EmbedModule.prototype.deleteEmbedModule = function (gE, module) {
            gE.modules.splice(gE.modules.indexOf(module), 1);
        };
        EmbedModule.prototype.changeEmbedUrl = function (module) {
            module.content = this.embedUrl;
            this.url = this.sanitizer.bypassSecurityTrustResourceUrl(module.content);
        };
        EmbedModule.prototype.updateEmbedTitle = function (module) {
            $(document).off('click', '.editable-embed-title').on('click', '.editable-embed-title', function () {
                $(this).summernote({
                    airMode: true,
                    popover: {
                        air: [
                            ['all', ['style', 'fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
                        ]
                    },
                    disableDragAndDrop: true,
                    callbacks: {
                        onChange: function (contents, $editable) {
                            module.title = contents;
                        }
                    }
                });
            });
        };
        return EmbedModule;
    }());
    EmbedModule = __decorate([
        core_1.Component({
            selector: 'embed-module',
            templateUrl: 'assets/app/embed_module/embed.module.html',
            styleUrls: ['assets/app/embed_module/embed.module.css'],
            inputs: ['gE', 'gridElements', 'module'],
            providers: [cloneModule_service_1.cloneModuleService]
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer, cloneModule_service_1.cloneModuleService])
    ], EmbedModule);
    exports.EmbedModule = EmbedModule;
});
//# sourceMappingURL=embed.module.js.map
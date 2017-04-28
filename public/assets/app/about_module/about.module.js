var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "./aboutItem", "../cloneModule_service/cloneModule.service"], function (require, exports, core_1, aboutItem_1, cloneModule_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AboutModule = (function () {
        function AboutModule(_cloneModuleService) {
            this._cloneModuleService = _cloneModuleService;
        }
        AboutModule.prototype.cloneModule = function (gE, module) {
            this._cloneModuleService.cloneModule(gE, module);
        };
        AboutModule.prototype.deleteAboutModule = function (gE, module) {
            gE.modules.splice(gE.modules.indexOf(module), 1);
        };
        AboutModule.prototype.addAboutItem = function (module) {
            module.content.push(new aboutItem_1.aboutItem('<p>new item name</p>', '<p>New item value</p>'));
        };
        AboutModule.prototype.deleteAboutItem = function (module, item) {
            module.content.splice(module.content.indexOf(item), 1);
        };
        AboutModule.prototype.updateAboutItemName = function (aI, module) {
            $(document).off('click', '.editable-about-item-name').on('click', '.editable-about-item-name', function () {
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
                            aI.name = contents;
                        }
                    }
                });
                $(this).parent().find('.note-editable').css('background', module.bgColor);
            });
        };
        AboutModule.prototype.updateAboutItemValue = function (aI, module) {
            $(document).off('click', '.editable-about-item-value').on('click', '.editable-about-item-value', function () {
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
                            aI.value = contents;
                        }
                    }
                });
                $(this).parent().find('.note-editable').css('background', module.bgColor);
            });
        };
        return AboutModule;
    }());
    AboutModule = __decorate([
        core_1.Component({
            selector: 'about-module',
            templateUrl: 'assets/app/about_module/about.module.html',
            styleUrls: ['assets/app/about_module/about.module.css'],
            inputs: ['gE', 'gridElements', 'module'],
            providers: [cloneModule_service_1.cloneModuleService]
        }),
        __metadata("design:paramtypes", [cloneModule_service_1.cloneModuleService])
    ], AboutModule);
    exports.AboutModule = AboutModule;
});
//# sourceMappingURL=about.module.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "./tagModuleTag", "../cloneModule_service/cloneModule.service"], function (require, exports, core_1, tagModuleTag_1, cloneModule_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TagModule = (function () {
        function TagModule(_cloneModuleService) {
            this._cloneModuleService = _cloneModuleService;
            this.bgColors = ['#4c7ba0', '#ffffff', '#ee4039', '#f07171', '#124666', '#737373', '#f8b13d', '#00b5c8', '#E3E5E6', '#b05574'];
            this.customTagBgColor = '#E3E5E6';
        }
        TagModule.prototype.cloneModule = function (gE, module) {
            this._cloneModuleService.cloneModule(gE, module);
        };
        TagModule.prototype.deleteTagModule = function (gE, module) {
            gE.modules.splice(gE.modules.indexOf(module), 1);
        };
        TagModule.prototype.addTag = function (gE, module) {
            var i, j;
            var maxId = 0;
            for (i = 0; i < gE.modules.length; i++) {
                if (gE.modules[i].id == 5) {
                    for (j = 0; j < gE.modules[i].tags.length; j++) {
                        if (gE.modules[i].tags[j].id > maxId) {
                            maxId = gE.modules[i].tags[j].id;
                        }
                    }
                }
            }
            module.tags.push(new tagModuleTag_1.tagModuleTag(maxId + 1, '<p>New Tag</p>', '#e3e5e6'));
        };
        TagModule.prototype.deleteTag = function (module, tag) {
            module.tags.splice(module.tags.indexOf(tag), 1);
        };
        TagModule.prototype.updateTag = function (tag) {
            $(document).off('click', '.editable-tag').on('click', '.editable-tag', function () {
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
                            tag.name = contents;
                        }
                    }
                });
                $(this).parent().find('.note-editable').css('background', tag.color);
            });
        };
        TagModule.prototype.tagBgColorToggle = function (tag) {
            var tagId = tag.id;
            $('.tag-bg-colors-list-' + tagId).toggle();
        };
        TagModule.prototype.updateTagBgColor = function (tag) {
            if (this.customTagBgColor[0] != '#') {
                this.customTagBgColor = "#" + this.customTagBgColor;
            }
            ;
            tag.color = this.customTagBgColor;
        };
        TagModule.prototype.selectTagBgColor = function (tag, bgC) {
            tag.color = bgC;
        };
        return TagModule;
    }());
    TagModule = __decorate([
        core_1.Component({
            selector: 'tag-module',
            templateUrl: 'assets/app/tag_module/tag.module.html',
            styleUrls: ['assets/app/tag_module/tag.module.css'],
            inputs: ['gE', 'gridElements', 'module'],
            providers: [cloneModule_service_1.cloneModuleService]
        }),
        __metadata("design:paramtypes", [cloneModule_service_1.cloneModuleService])
    ], TagModule);
    exports.TagModule = TagModule;
});
//# sourceMappingURL=tag.module.js.map
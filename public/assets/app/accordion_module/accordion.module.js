var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "./accordionItem", "../cloneModule_service/cloneModule.service"], function (require, exports, core_1, accordionItem_1, cloneModule_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AccordionModule = (function () {
        function AccordionModule(_cloneModuleService) {
            this._cloneModuleService = _cloneModuleService;
        }
        AccordionModule.prototype.cloneModule = function (gE, module) {
            this._cloneModuleService.cloneModule(gE, module);
        };
        AccordionModule.prototype.ngOnInit = function () {
            $('.accordion-module').on('show.bs.collapse', '.collapse', function () {
                $(this).parents().eq(2).find('.collapse.in').collapse('hide');
            });
        };
        AccordionModule.prototype.deleteAccordionModule = function (gE, module) {
            gE.modules.splice(gE.modules.indexOf(module), 1);
        };
        AccordionModule.prototype.addAccordionItem = function (gE, module) {
            var i, j;
            var maxId = 0;
            for (i = 0; i < gE.modules.length; i++) {
                if (gE.modules[i].id == 9) {
                    for (j = 0; j < gE.modules[i].items.length; j++) {
                        if (gE.modules[i].items[j].id.length == 5) {
                            if (parseInt(gE.modules[i].items[j].id[4]) > maxId) {
                                maxId = parseInt(gE.modules[i].items[j].id[4]);
                            }
                        }
                        else if (gE.modules[i].items[j].id.length == 6) {
                            if (parseInt(gE.modules[i].items[j].id[4] + gE.modules[i].items[j].id[5]) > maxId) {
                                maxId = parseInt(gE.modules[i].items[j].id[4] + gE.modules[i].items[j].id[5]);
                            }
                        }
                    }
                }
            }
            maxId++;
            module.items.push(new accordionItem_1.accordionItem('item' + maxId, 'New Item Title', '<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>'));
        };
        AccordionModule.prototype.deleteAccordionItem = function (module, item) {
            module.items.splice(module.items.indexOf(item), 1);
        };
        AccordionModule.prototype.updateAccordionTitle = function (module) {
            $(document).off('click', '.editable-accordion-title').on('click', '.editable-accordion-title', function () {
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
                $(this).parent().find('.note-editable').css('background', module.bgColor);
            });
        };
        AccordionModule.prototype.updateAccordionItemTitle = function (item, event) {
            item.title = event.target.value;
        };
        AccordionModule.prototype.updateAccordionItemContent = function (item) {
            $(document).off('click', '.editable-accordion-item-content').on('click', '.editable-accordion-item-content', function () {
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
                            item.content = contents;
                        }
                    }
                });
            });
        };
        return AccordionModule;
    }());
    AccordionModule = __decorate([
        core_1.Component({
            selector: 'accordion-module',
            templateUrl: 'assets/app/accordion_module/accordion.module.html',
            styleUrls: ['assets/app/accordion_module/accordion.module.css'],
            inputs: ['gE', 'gridElements', 'module'],
            providers: [cloneModule_service_1.cloneModuleService]
        }),
        __metadata("design:paramtypes", [cloneModule_service_1.cloneModuleService])
    ], AccordionModule);
    exports.AccordionModule = AccordionModule;
});
//# sourceMappingURL=accordion.module.js.map
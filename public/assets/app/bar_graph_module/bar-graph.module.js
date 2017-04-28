var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "./barGraphBar", "../cloneModule_service/cloneModule.service"], function (require, exports, core_1, barGraphBar_1, cloneModule_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BarGraphModule = (function () {
        function BarGraphModule(_cloneModuleService) {
            this._cloneModuleService = _cloneModuleService;
        }
        BarGraphModule.prototype.cloneModule = function (gE, module) {
            this._cloneModuleService.cloneModule(gE, module);
        };
        BarGraphModule.prototype.deleteBarGraphModule = function (gE, module) {
            gE.modules.splice(gE.modules.indexOf(module), 1);
        };
        BarGraphModule.prototype.addBarGraph = function (module) {
            module.bars.push(new barGraphBar_1.barGraphBar(50, '<p>New Label</p>'));
        };
        BarGraphModule.prototype.deleteBar = function (module, bar) {
            module.bars.splice(module.bars.indexOf(bar), 1);
        };
        BarGraphModule.prototype.adjustBarLength = function (event, bar) {
            var pBLength = $('.progress').width();
            bar.value = Math.ceil((event.layerX * 100) / pBLength);
        };
        BarGraphModule.prototype.updateBarGraphTitle = function (module) {
            $(document).off('click', '.editable-barGrpah-title').on('click', '.editable-barGrpah-title', function () {
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
        BarGraphModule.prototype.updateBarLabel = function (bar, module) {
            $(document).off('click', '.editable-bar-label').on('click', '.editable-bar-label', function () {
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
                            bar.label = contents;
                        }
                    }
                });
                $(this).parent().find('.note-editable').css('background', module.bgColor);
            });
        };
        return BarGraphModule;
    }());
    BarGraphModule = __decorate([
        core_1.Component({
            selector: 'bar-graph-module',
            templateUrl: 'assets/app/bar_graph_module/bar-graph.module.html',
            styleUrls: ['assets/app/bar_graph_module/bar-graph.module.css'],
            inputs: ['gE', 'gridElements', 'module'],
            providers: [cloneModule_service_1.cloneModuleService]
        }),
        __metadata("design:paramtypes", [cloneModule_service_1.cloneModuleService])
    ], BarGraphModule);
    exports.BarGraphModule = BarGraphModule;
});
//# sourceMappingURL=bar-graph.module.js.map
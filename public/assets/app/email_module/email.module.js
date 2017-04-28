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
    var EmailModule = (function () {
        function EmailModule(_cloneModuleService) {
            this._cloneModuleService = _cloneModuleService;
        }
        EmailModule.prototype.cloneModule = function (gE, module) {
            this._cloneModuleService.cloneModule(gE, module);
        };
        EmailModule.prototype.deleteEmailModule = function (gE, module) {
            gE.modules.splice(gE.modules.indexOf(module), 1);
        };
        EmailModule.prototype.updateEmail = function (module) {
            module.email = this.email;
        };
        EmailModule.prototype.updateEmailContent = function (module) {
            $(document).off('click', '.editable-email-content').on('click', '.editable-email-content', function () {
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
                            module.content = contents;
                        }
                    }
                });
                $(this).parent().find('.note-editable').css('background', module.bgColor);
            });
        };
        return EmailModule;
    }());
    EmailModule = __decorate([
        core_1.Component({
            selector: 'email-module',
            templateUrl: 'assets/app/email_module/email.module.html',
            styleUrls: ['assets/app/email_module/email.module.css'],
            inputs: ['gE', 'gridElements', 'module'],
            providers: [cloneModule_service_1.cloneModuleService]
        }),
        __metadata("design:paramtypes", [cloneModule_service_1.cloneModuleService])
    ], EmailModule);
    exports.EmailModule = EmailModule;
});
//# sourceMappingURL=email.module.js.map
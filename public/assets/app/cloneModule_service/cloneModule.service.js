var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "../text_module/textModule", "../image_module/imageModule", "../bar_graph_module/barGraphModule", "../bar_graph_module/barGraphBar", "../social_media_module/socialMediaModule", "../tag_module/tagModule", "../tag_module/tagModuleTag", "../email_module/emailModule", "../scale_chart_module/scaleChartModule", "../scale_chart_module/scaleChartModuleScale", "../pie_chart_module/pieChartModule", "../accordion_module/accordionModule", "../accordion_module/accordionItem", "../tabs_module/tabsModule", "../tabs_module/tabsItem", "../embed_module/embedModule", "../devicesPlatforms_module/devicesPlatformsModule", "../devicesPlatforms_module/devicePlatform", "../about_module/aboutModule", "../about_module/aboutItem", "../counting_module/countingModule", "rxjs/add/operator/map"], function (require, exports, core_1, textModule_1, imageModule_1, barGraphModule_1, barGraphBar_1, socialMediaModule_1, tagModule_1, tagModuleTag_1, emailModule_1, scaleChartModule_1, scaleChartModuleScale_1, pieChartModule_1, accordionModule_1, accordionItem_1, tabsModule_1, tabsItem_1, embedModule_1, devicesPlatformsModule_1, devicePlatform_1, aboutModule_1, aboutItem_1, countingModule_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var cloneModuleService = (function () {
        function cloneModuleService() {
        }
        cloneModuleService.prototype.cloneModule = function (gE, module) {
            var i;
            switch (module.id) {
                case 1:
                    gE.modules.push(new textModule_1.textModule(1, 'text-module', module.content, module.bgColor));
                    break;
                case 2:
                    gE.modules.push(new imageModule_1.imageModule(2, 'image-module', module.url));
                    break;
                case 3:
                    var new_bars = [];
                    for (i = 0; i < module.bars.length; i++) {
                        new_bars[i] = new barGraphBar_1.barGraphBar(module.bars[i].value, module.bars[i].label);
                    }
                    gE.modules.push(new barGraphModule_1.barGraphModule(3, 'bar-graph-module', module.title, new_bars, module.bgColor));
                    break;
                case 4:
                    gE.modules.push(new socialMediaModule_1.socialMediaModule(4, 'social-media-module', module.facebookUrl, module.twitterUrl, module.linkedinUrl, module.externalUrl, '#F8F8F8'));
                    break;
                case 5:
                    var new_tags = [];
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
                    for (i = 0; i < module.tags.length; i++) {
                        new_tags[i] = new tagModuleTag_1.tagModuleTag(maxId + i + 1, module.tags[i].name, module.tags[i].color);
                    }
                    gE.modules.push(new tagModule_1.tagModule(5, 'tags-module', new_tags, module.bgColor));
                    break;
                case 6:
                    gE.modules.push(new emailModule_1.emailModule(6, 'email-module', module.email, module.content, module.bgColor));
                    break;
                case 7:
                    var new_scales = [];
                    var i;
                    for (i = 0; i < module.scales.length; i++) {
                        new_scales[i] = new scaleChartModuleScale_1.scaleChartModuleScale(module.scales[i].sideA, module.scales[i].sideB, module.scales[i].value);
                    }
                    gE.modules.push(new scaleChartModule_1.scaleChartModule(7, 'scale-chart-module', module.title, new_scales, module.bgColor));
                    break;
                case 8:
                    var i, j;
                    var maxId = 0;
                    for (i = 0; i < gE.modules.length; i++) {
                        if (gE.modules[i].id == 8) {
                            if (gE.modules[i].pieId > maxId) {
                                maxId = gE.modules[i].pieId;
                            }
                        }
                    }
                    var new_labels = [];
                    var new_data = [];
                    for (i = 0; i < module.labels.length; i++) {
                        new_labels[i] = module.labels[i];
                        new_data[i] = module.data[i];
                    }
                    gE.modules.push(new pieChartModule_1.pieChartModule(8, maxId + 1, 'pie-chart-module', module.title, new_labels, new_data, module.bgColor));
                    break;
                case 9:
                    var i, j;
                    var maxId = 0;
                    var new_items = [];
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
                    for (i = 0; i < module.items.length; i++) {
                        maxId = maxId + 1;
                        new_items[i] = new accordionItem_1.accordionItem('item' + maxId, module.items[i].title, module.items[i].content);
                    }
                    gE.modules.push(new accordionModule_1.accordionModule(9, 'accordion-module', module.title, new_items, module.bgColor));
                    break;
                case 10:
                    var i, j;
                    var maxId = 0;
                    var new_items = [];
                    for (i = 0; i < gE.modules.length; i++) {
                        if (gE.modules[i].id == 10) {
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
                    for (i = 0; i < module.items.length; i++) {
                        maxId = maxId + 1;
                        new_items[i] = new tabsItem_1.tabsItem('item' + maxId, 'Tab', '<p>Nulla condimentum finibus massa, sit amet viverra purus luctus ac. Fusce ut erat sapien 1.</p>');
                    }
                    gE.modules.push(new tabsModule_1.tabsModule(10, 'tabs-module', new_items, module.bgColor));
                    break;
                case 11:
                    gE.modules.push(new embedModule_1.embedModule(11, 'embed-module', module.title, module.content));
                    break;
                case 12:
                    var new_options = [];
                    var i;
                    var maxId = 0;
                    for (i = 0; i < gE.modules.length; i++) {
                        if (gE.modules[i].id == 12) {
                            if (gE.modules[i].moduleId > maxId) {
                                maxId = gE.modules[i].moduleId;
                            }
                        }
                    }
                    for (i = 0; i < module.options.length; i++) {
                        new_options[i] = new devicePlatform_1.devicePlatform(module.options[i].content, module.options[i].status, module.options[i].name);
                    }
                    gE.modules.push(new devicesPlatformsModule_1.devicesPlatformsModule(12, maxId + 1, 'devices-platforms-module', new_options, module.bgColor));
                    break;
                case 13:
                    var new_content = [];
                    for (i = 0; i < module.content.length; i++) {
                        new_content[i] = new aboutItem_1.aboutItem(module.content[i].name, module.content[i].value);
                    }
                    gE.modules.push(new aboutModule_1.aboutModule(13, 'about-module', new_content, module.bgColor));
                    break;
                case 14:
                    gE.modules.push(new countingModule_1.countingModule(14, 'counting-module', [module.content[0], module.content[1]], module.bgColor));
                    break;
                case 15:
                    gE.modules.push(new textModule_1.textModule(15, 'mind-map-module', 'mind map', module.bgColor));
                    break;
                default:
                    console.log("Err");
            }
        };
        return cloneModuleService;
    }());
    cloneModuleService = __decorate([
        core_1.Injectable()
    ], cloneModuleService);
    exports.cloneModuleService = cloneModuleService;
});
//# sourceMappingURL=cloneModule.service.js.map
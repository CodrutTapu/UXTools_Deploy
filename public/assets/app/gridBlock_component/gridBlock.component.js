var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "../text_module/textModule", "../image_module/imageModule", "../bar_graph_module/barGraphModule", "../bar_graph_module/barGraphBar", "../social_media_module/socialMediaModule", "../tag_module/tagModule", "../tag_module/tagModuleTag", "../email_module/emailModule", "../scale_chart_module/scaleChartModule", "../scale_chart_module/scaleChartModuleScale", "../pie_chart_module/pieChartModule", "../accordion_module/accordionModule", "../accordion_module/accordionItem", "../tabs_module/tabsModule", "../tabs_module/tabsItem", "../embed_module/embedModule", "../devicesPlatforms_module/devicesPlatformsModule", "../devicesPlatforms_module/devicePlatform", "../about_module/aboutModule", "../about_module/aboutItem", "../counting_module/countingModule"], function (require, exports, core_1, textModule_1, imageModule_1, barGraphModule_1, barGraphBar_1, socialMediaModule_1, tagModule_1, tagModuleTag_1, emailModule_1, scaleChartModule_1, scaleChartModuleScale_1, pieChartModule_1, accordionModule_1, accordionItem_1, tabsModule_1, tabsItem_1, embedModule_1, devicesPlatformsModule_1, devicePlatform_1, aboutModule_1, aboutItem_1, countingModule_1) {
    "use strict";
    var GridBlock = (function () {
        function GridBlock() {
            this.gridElements = [];
            this.gE_modules_options = {
                group: 'gE_modules',
                handle: '.move',
                animation: 150
            };
        }
        GridBlock.prototype.minGridElem = function (gE) {
            if (gE.dim == 2) {
                alert("Too Small");
                gE.dim = 2;
            }
            else {
                gE.dim -= 2;
            }
        };
        GridBlock.prototype.maxGridElem = function (gE) {
            if (gE.dim == 12) {
                alert("Too Large");
                gE.dim = 12;
            }
            else {
                gE.dim += 2;
            }
        };
        GridBlock.prototype.clearGridElement = function (gE) {
            gE.modules = [];
        };
        GridBlock.prototype.deleteGridElem = function (gE) {
            this.gridElements.splice(this.gridElements.indexOf(gE), 1);
        };
        GridBlock.prototype.addTextModule = function (gE) {
            gE.modules.push(new textModule_1.textModule(1, 'text-module', '<h1>New Text Field</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra felis in sem porta feugiat.</p>', '#F8F8F8'));
            $('.add-module-modal').modal('hide');
        };
        GridBlock.prototype.addImageModule = function (gE) {
            gE.modules.push(new imageModule_1.imageModule(2, 'image-module', 'images/img-default.png'));
            $('.add-module-modal').modal('hide');
        };
        GridBlock.prototype.addBarGraphModule = function (gE) {
            gE.modules.push(new barGraphModule_1.barGraphModule(3, 'bar-graph-module', '<h1>Bar Graph</h1>', [new barGraphBar_1.barGraphBar(30, '<p>Label 1</p>'), new barGraphBar_1.barGraphBar(50, '<p>Label 2</p>'), new barGraphBar_1.barGraphBar(100, '<p>Label 3</p>')], '#F8F8F8'));
            $('.add-module-modal').modal('hide');
        };
        GridBlock.prototype.addSocialMediaModule = function (gE) {
            gE.modules.push(new socialMediaModule_1.socialMediaModule(4, 'social-media-module', 'facebook', 'twitter', 'linkedin', 'external', '#F8F8F8'));
            $('.add-module-modal').modal('hide');
        };
        GridBlock.prototype.addTagModule = function (gE) {
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
            gE.modules.push(new tagModule_1.tagModule(5, 'tags-module', [new tagModuleTag_1.tagModuleTag(maxId + 1, '<p>Tag 1</p>', '#e3e5e6'), new tagModuleTag_1.tagModuleTag(maxId + 2, '<p>Tag 2</p>', '#e3e5e6'), new tagModuleTag_1.tagModuleTag(maxId + 3, '<p>Tag 3</p>', '#e3e5e6')], '#F8F8F8'));
            $('.add-module-modal').modal('hide');
        };
        GridBlock.prototype.addEmailModule = function (gE) {
            gE.modules.push(new emailModule_1.emailModule(6, 'email-module', 'you@yourmail.com', '<h2>This is a form field to collect emails.</h2><p>Give them a good reason.</p>', '#F8F8F8'));
            $('.add-module-modal').modal('hide');
        };
        GridBlock.prototype.addScaleChartModule = function (gE) {
            gE.modules.push(new scaleChartModule_1.scaleChartModule(7, 'scale-chart-module', '<h1>Scale Chart</h1>', [new scaleChartModuleScale_1.scaleChartModuleScale('<p>Side A</p>', '<p>Side B</p>', 0), new scaleChartModuleScale_1.scaleChartModuleScale('<p>Side A</p>', '<p>Side B</p>', 50), new scaleChartModuleScale_1.scaleChartModuleScale('<p>Side A</p>', '<p>Side B</p>', 100)], '#F8F8F8'));
            $('.add-module-modal').modal('hide');
        };
        GridBlock.prototype.addPieChartModule = function (gE) {
            var i, j;
            var maxId = 0;
            for (i = 0; i < gE.modules.length; i++) {
                if (gE.modules[i].id == 8) {
                    if (gE.modules[i].pieId > maxId) {
                        maxId = gE.modules[i].pieId;
                    }
                }
            }
            gE.modules.push(new pieChartModule_1.pieChartModule(8, maxId + 1, 'pie-chart-module', '<h1>Pie Chart</h1>', ["Red", "Blue", "Yellow"], [12, 19, 3], '#F8F8F8'));
            $('.add-module-modal').modal('hide');
        };
        GridBlock.prototype.addAccordionModule = function (gE) {
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
            var maxId1 = maxId + 1;
            var maxId2 = maxId + 2;
            var maxId3 = maxId + 3;
            gE.modules.push(new accordionModule_1.accordionModule(9, 'accordion-module', '<h1>Accordion</h1>', [new accordionItem_1.accordionItem('item' + maxId1, 'Item 1', '<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>'), new accordionItem_1.accordionItem('item' + maxId2, 'Item 2', '<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>'), new accordionItem_1.accordionItem('item' + maxId3, 'Item 3', '<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>')], '#F8F8F8'));
            $('.add-module-modal').modal('hide');
        };
        GridBlock.prototype.addTabsModule = function (gE) {
            var i, j;
            var maxId = 0;
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
            var maxId1 = maxId + 1;
            var maxId2 = maxId + 2;
            var maxId3 = maxId + 3;
            gE.modules.push(new tabsModule_1.tabsModule(10, 'tabs-module', [new tabsItem_1.tabsItem('item' + maxId1, 'Tab 1', '<p>Nulla condimentum finibus massa, sit amet viverra purus luctus ac. Fusce ut erat sapien 1.</p>'), new tabsItem_1.tabsItem('item' + maxId2, 'Tab 2', '<p>Nulla condimentum finibus massa, sit amet viverra purus luctus ac. Fusce ut erat sapien 2.</p>'), new tabsItem_1.tabsItem('item' + maxId3, 'Tab 3', '<p>Nulla condimentum finibus massa, sit amet viverra purus luctus ac. Fusce ut erat sapien 3.</p>')], '#F8F8F8'));
            $('.add-module-modal').modal('hide');
        };
        GridBlock.prototype.addEmbedModule = function (gE) {
            gE.modules.push(new embedModule_1.embedModule(11, 'embed-module', '<h1>Embed</h1>', 'https://www.youtube.com/embed/rn5s6H_Yamo'));
            $('.add-module-modal').modal('hide');
        };
        GridBlock.prototype.addDevicesPlatformsModule = function (gE) {
            var i;
            var maxId = 0;
            for (i = 0; i < gE.modules.length; i++) {
                if (gE.modules[i].id == 12) {
                    if (gE.modules[i].moduleId > maxId) {
                        maxId = gE.modules[i].moduleId;
                    }
                }
            }
            gE.modules.push(new devicesPlatformsModule_1.devicesPlatformsModule(12, maxId + 1, 'devices-platforms-module', [new devicePlatform_1.devicePlatform('<i class="fa fa-mobile" aria-hidden="true"></i>', true, 'Mobile'),
                new devicePlatform_1.devicePlatform('<i class="fa fa-tablet" aria-hidden="true"></i>', true, 'Tablet'),
                new devicePlatform_1.devicePlatform('<i class="fa fa-laptop" aria-hidden="true"></i>', true, 'Laptop'),
                new devicePlatform_1.devicePlatform('<i class="fa fa-desktop" aria-hidden="true"></i>', false, 'Desktop'),
                new devicePlatform_1.devicePlatform('<i class="fa fa-television" aria-hidden="true"></i>', false, 'TV'),
                new devicePlatform_1.devicePlatform('<i class="fa fa-windows" aria-hidden="true"></i>', false, 'Windows'),
                new devicePlatform_1.devicePlatform('<i class="fa fa-apple" aria-hidden="true"></i>', false, 'Apple'),
                new devicePlatform_1.devicePlatform('<i class="fa fa-linux" aria-hidden="true"></i>', false, 'Linux'),
                new devicePlatform_1.devicePlatform('<i class="fa fa-chrome" aria-hidden="true"></i>', false, 'Chrome'),
                new devicePlatform_1.devicePlatform('<i class="fa fa-firefox" aria-hidden="true"></i>', false, 'Firefox'),
                new devicePlatform_1.devicePlatform('<i class="fa fa-internet-explorer" aria-hidden="true"></i>', false, 'IE'),
                new devicePlatform_1.devicePlatform('<i class="fa fa-safari" aria-hidden="true"></i>', false, 'Safari')], '#F8F8F8'));
            $('.add-module-modal').modal('hide');
        };
        GridBlock.prototype.addAboutModule = function (gE) {
            gE.modules.push(new aboutModule_1.aboutModule(13, 'about-module', [new aboutItem_1.aboutItem('<p>age</p>', '<p>1-100</p>'),
                new aboutItem_1.aboutItem('<p>occupation</p>', '<p>What they do</p>'),
                new aboutItem_1.aboutItem('<p>status</p>', '<p>Single, Marries, Etc</p>'),
                new aboutItem_1.aboutItem('<p>location</p>', '<p>Where they live/work</p>'),
                new aboutItem_1.aboutItem('<p>tier</p>', '<p>Frequency of use</p>'),
                new aboutItem_1.aboutItem('<p>archetype</p>', '<p>Character model</p>'),
            ], '#F8F8F8'));
            $('.add-module-modal').modal('hide');
        };
        GridBlock.prototype.addSimpleCountingModule = function (gE) {
            gE.modules.push(new countingModule_1.countingModule(14, 'counting-module', ['<p class="counting-value"><span class="number">00</span></p>', '<p class="counting-description">Something you want to count</p>'], '#F8F8F8'));
            $('.add-module-modal').modal('hide');
        };
        GridBlock.prototype.addSufixedCountingModule = function (gE) {
            gE.modules.push(new countingModule_1.countingModule(14, 'counting-module', ['<p class="counting-value"><span class="number">00</span><span class="counting-sufix"> min</span></p>', '<p class="counting-description">Something you want to count</p>'], '#F8F8F8'));
            $('.add-module-modal').modal('hide');
        };
        GridBlock.prototype.addIntervalCountingModule = function (gE) {
            gE.modules.push(new countingModule_1.countingModule(14, 'counting-module', ['<p class="counting-value"><span class="number">00-00</span></p>', '<p class="counting-description">Something you want to count</p>'], '#F8F8F8'));
            $('.add-module-modal').modal('hide');
        };
        GridBlock.prototype.addPrefixedCountingModule = function (gE) {
            gE.modules.push(new countingModule_1.countingModule(14, 'counting-module', ['<p class="counting-value"><span class="counting-prefix">$ <span><span class="number">00</span></p>', '<p class="counting-description">Something you want to count</p>'], '#F8F8F8'));
            $('.add-module-modal').modal('hide');
        };
        return GridBlock;
    }());
    GridBlock = __decorate([
        core_1.Component({
            selector: 'grid-block',
            templateUrl: 'assets/app/gridBlock_component/grid-block.html',
            styleUrls: ['assets/app/gridBlock_component/grid-block.css'],
            inputs: ['gridElements', 'currentUser']
        })
    ], GridBlock);
    exports.GridBlock = GridBlock;
});
//# sourceMappingURL=gridBlock.component.js.map
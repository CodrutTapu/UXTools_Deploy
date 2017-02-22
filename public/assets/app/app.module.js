var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/platform-browser", "@angular/core", "@angular/forms", "@angular/http", "@angular/router", "./app.component", "./dashboard/dashboard.component", "./newPersona_component/newPersona.component", "./newSwotAnalysis_component/newSwotAnalysis.component", "./newBlankState_component/newBlankState.component", "ng2-dnd", "angular-sortablejs", "./project_component/project.component", "./viewProject_component/view.project.component", "./gridBlock_component/gridBlock.component", "./text_module/text.module", "./text_module/view.text.module", "./image_module/image.module", "./image_module/view.image.module", "./bar_graph_module/bar-graph.module", "./bar_graph_module/view.bar-graph.module", "./social_media_module/social-media.module", "./social_media_module/view.social-media.module", "./tag_module/tag.module", "./tag_module/view.tag.module", "./email_module/email.module", "./email_module/view.email.module", "./embed_module/embed.module", "./embed_module/view.embed.module", "./scale_chart_module/scale-chart.module", "./scale_chart_module/view.scale-chart.module", "./pie_chart_module/pie-chart.module", "./pie_chart_module/view.pie-chart.module", "./accordion_module/accordion.module", "./accordion_module/view.accordion.module", "./tabs_module/tabs.module", "./tabs_module/view.tabs.module", "./devicesPlatforms_module/devices-platforms.module", "./devicesPlatforms_module/view.devices-platforms.module", "./about_module/about.module", "./about_module/view.about.module", "./counting_module/counting.module", "./counting_module/view.counting.module", "./colorScheme_component/colorScheme.module", "./bgColor_component/bgColor.module"], function (require, exports, platform_browser_1, core_1, forms_1, http_1, router_1, app_component_1, dashboard_component_1, newPersona_component_1, newSwotAnalysis_component_1, newBlankState_component_1, ng2_dnd_1, angular_sortablejs_1, project_component_1, view_project_component_1, gridBlock_component_1, text_module_1, view_text_module_1, image_module_1, view_image_module_1, bar_graph_module_1, view_bar_graph_module_1, social_media_module_1, view_social_media_module_1, tag_module_1, view_tag_module_1, email_module_1, view_email_module_1, embed_module_1, view_embed_module_1, scale_chart_module_1, view_scale_chart_module_1, pie_chart_module_1, view_pie_chart_module_1, accordion_module_1, view_accordion_module_1, tabs_module_1, view_tabs_module_1, devices_platforms_module_1, view_devices_platforms_module_1, about_module_1, view_about_module_1, counting_module_1, view_counting_module_1, colorScheme_module_1, bgColor_module_1) {
    "use strict";
    var appRoutes = [
        { path: '', component: dashboard_component_1.DashboardComponent },
        { path: 'new/persona', component: newPersona_component_1.newPersonaComponent },
        { path: 'new/swot_analysis', component: newSwotAnalysis_component_1.newSwotAnalysisComponent },
        { path: 'new/blank_state', component: newBlankState_component_1.newBlankStateComponent },
        { path: 'view/:author_id/:project_id/:project_name', component: view_project_component_1.ViewProjectComponent },
        { path: 'edit/:author_id/:project_id/:project_name', component: project_component_1.ProjectComponent },
    ];
    var AppModule = (function () {
        function AppModule() {
        }
        return AppModule;
    }());
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                project_component_1.ProjectComponent,
                newPersona_component_1.newPersonaComponent,
                newSwotAnalysis_component_1.newSwotAnalysisComponent,
                newBlankState_component_1.newBlankStateComponent,
                view_project_component_1.ViewProjectComponent,
                gridBlock_component_1.GridBlock,
                text_module_1.TextModule,
                view_text_module_1.ViewTextModule,
                image_module_1.ImageModule,
                view_image_module_1.ViewImageModule,
                bar_graph_module_1.BarGraphModule,
                view_bar_graph_module_1.ViewBarGraphModule,
                social_media_module_1.SocialMediaModule,
                view_social_media_module_1.ViewSocialMediaModule,
                tag_module_1.TagModule,
                view_tag_module_1.ViewTagModule,
                email_module_1.EmailModule,
                view_email_module_1.ViewEmailModule,
                embed_module_1.EmbedModule,
                view_embed_module_1.ViewEmbedModule,
                scale_chart_module_1.ScaleChartModule,
                view_scale_chart_module_1.ViewScaleChartModule,
                pie_chart_module_1.PieChartModule,
                view_pie_chart_module_1.ViewPieChartModule,
                accordion_module_1.AccordionModule,
                view_accordion_module_1.ViewAccordionModule,
                tabs_module_1.TabsModule,
                view_tabs_module_1.ViewTabsModule,
                devices_platforms_module_1.DevicesPlatformsModule,
                view_devices_platforms_module_1.ViewDevicesPlatformsModule,
                about_module_1.AboutModule,
                view_about_module_1.ViewAboutModule,
                counting_module_1.CountingModule,
                view_counting_module_1.ViewCountingModule,
                colorScheme_module_1.colorSchemeModule,
                bgColor_module_1.bgColorModule
            ],
            imports: [
                router_1.RouterModule.forRoot(appRoutes),
                ng2_dnd_1.DndModule.forRoot(),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular_sortablejs_1.SortablejsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    exports.AppModule = AppModule;
});
//# sourceMappingURL=app.module.js.map
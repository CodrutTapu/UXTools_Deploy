define(["require", "exports", "./app.component", "@angular/core/testing", "@angular/platform-browser"], function (require, exports, app_component_1, testing_1, platform_browser_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('AppComponent', function () {
        var de;
        var comp;
        var fixture;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [app_component_1.AppComponent]
            })
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
            comp = fixture.componentInstance;
            de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        });
        it('should create component', function () { return expect(comp).toBeDefined(); });
        it('should have expected <h1> text', function () {
            fixture.detectChanges();
            var h1 = de.nativeElement;
            expect(h1.innerText).toMatch(/angular/i, '<h1> should say something about "Angular"');
        });
    });
});
//# sourceMappingURL=app.component.spec.js.map
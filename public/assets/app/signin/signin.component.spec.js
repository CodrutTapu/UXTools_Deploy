define(["require", "exports", "@angular/core/testing", "./signin.component"], function (require, exports, testing_1, signin_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('SigninComponent', function () {
        var component;
        var fixture;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [signin_component_1.SigninComponent]
            })
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(signin_component_1.SigninComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
        it('should create', function () {
            expect(component).toBeTruthy();
        });
    });
});
//# sourceMappingURL=signin.component.spec.js.map
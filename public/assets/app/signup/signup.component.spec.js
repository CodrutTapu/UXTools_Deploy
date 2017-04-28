define(["require", "exports", "@angular/core/testing", "./signup.component"], function (require, exports, testing_1, signup_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('SignupComponent', function () {
        var component;
        var fixture;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [signup_component_1.SignupComponent]
            })
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(signup_component_1.SignupComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
        it('should create', function () {
            expect(component).toBeTruthy();
        });
    });
});
//# sourceMappingURL=signup.component.spec.js.map
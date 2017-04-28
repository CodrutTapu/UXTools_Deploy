var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core", "@angular/http", "@angular/http", "rxjs/add/operator/map"], function (require, exports, core_1, http_1, http_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserService = (function () {
        function UserService(http) {
            this.http = http;
        }
        UserService.prototype.create = function (full_name, email, password) {
            var body = new http_2.URLSearchParams();
            body.set('full_name', full_name);
            body.set('email', email);
            body.set('password', password);
            return this.http.post('/auth/signup', body)
                .map(function (response) { return response.json(); });
        };
        UserService.prototype.authenticate = function (email, password) {
            var body = new http_2.URLSearchParams();
            body.set('email', email);
            body.set('password', password);
            return this.http.post('/auth/signin', body)
                .map(function (response) { return response.json(); });
        };
        UserService.prototype.getProjects = function (author_id) {
            return this.http.get('/dashboard/getProjects/' + author_id)
                .map(function (res) { return res.json(); });
        };
        UserService.prototype.getCurrentUser = function () {
            return this.http.get('/getCurrentUser')
                .map(function (res) { return res.json(); });
        };
        UserService.prototype.getProject = function (author_id, project_id) {
            return this.http.get('/projects/getProject/' + author_id + '/' + project_id)
                .map(function (res) { return res.json(); });
        };
        return UserService;
    }());
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    exports.UserService = UserService;
});
//# sourceMappingURL=user.service.js.map
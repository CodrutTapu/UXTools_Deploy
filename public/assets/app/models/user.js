define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var user = (function () {
        function user(id, firstName, lastName, email, password, documents) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.password = password;
            this.documents = documents;
        }
        return user;
    }());
    exports.user = user;
});
//# sourceMappingURL=user.js.map
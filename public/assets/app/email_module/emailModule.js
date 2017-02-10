define(["require", "exports"], function (require, exports) {
    "use strict";
    var emailModule = (function () {
        function emailModule(id, name, email, content, bgColor) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.content = content;
            this.bgColor = bgColor;
        }
        return emailModule;
    }());
    exports.emailModule = emailModule;
});
//# sourceMappingURL=emailModule.js.map
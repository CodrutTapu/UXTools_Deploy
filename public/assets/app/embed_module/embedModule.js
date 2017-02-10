define(["require", "exports"], function (require, exports) {
    "use strict";
    var embedModule = (function () {
        function embedModule(id, name, title, content) {
            this.id = id;
            this.name = name;
            this.title = title;
            this.content = content;
        }
        return embedModule;
    }());
    exports.embedModule = embedModule;
});
//# sourceMappingURL=embedModule.js.map
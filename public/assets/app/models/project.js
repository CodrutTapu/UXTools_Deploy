define(["require", "exports"], function (require, exports) {
    "use strict";
    var project = (function () {
        function project(name, content) {
            this.name = name;
            this.content = content;
        }
        return project;
    }());
    exports.project = project;
});
//# sourceMappingURL=project.js.map
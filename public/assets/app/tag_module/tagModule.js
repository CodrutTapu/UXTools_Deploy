define(["require", "exports"], function (require, exports) {
    "use strict";
    var tagModule = (function () {
        function tagModule(id, name, tags, bgColor) {
            this.id = id;
            this.name = name;
            this.tags = tags;
            this.bgColor = bgColor;
        }
        return tagModule;
    }());
    exports.tagModule = tagModule;
});
//# sourceMappingURL=tagModule.js.map
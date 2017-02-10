define(["require", "exports"], function (require, exports) {
    "use strict";
    var textModule = (function () {
        function textModule(id, name, content, bgColor) {
            this.id = id;
            this.name = name;
            this.content = content;
            this.bgColor = bgColor;
        }
        return textModule;
    }());
    exports.textModule = textModule;
});
//# sourceMappingURL=textModule.js.map
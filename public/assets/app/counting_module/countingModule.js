define(["require", "exports"], function (require, exports) {
    "use strict";
    var countingModule = (function () {
        function countingModule(id, name, content, bgColor) {
            this.id = id;
            this.name = name;
            this.content = content;
            this.bgColor = bgColor;
        }
        return countingModule;
    }());
    exports.countingModule = countingModule;
});
//# sourceMappingURL=countingModule.js.map
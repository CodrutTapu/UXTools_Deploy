define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var barGraphModule = (function () {
        function barGraphModule(id, name, title, bars, bgColor) {
            this.id = id;
            this.name = name;
            this.title = title;
            this.bars = bars;
            this.bgColor = bgColor;
        }
        return barGraphModule;
    }());
    exports.barGraphModule = barGraphModule;
});
//# sourceMappingURL=barGraphModule.js.map
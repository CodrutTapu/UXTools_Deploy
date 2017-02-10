define(["require", "exports"], function (require, exports) {
    "use strict";
    var scaleChartModule = (function () {
        function scaleChartModule(id, name, title, scales, bgColor) {
            this.id = id;
            this.name = name;
            this.title = title;
            this.scales = scales;
            this.bgColor = bgColor;
        }
        return scaleChartModule;
    }());
    exports.scaleChartModule = scaleChartModule;
});
//# sourceMappingURL=scaleChartModule.js.map
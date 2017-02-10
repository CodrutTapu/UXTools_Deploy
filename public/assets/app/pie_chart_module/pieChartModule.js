define(["require", "exports"], function (require, exports) {
    "use strict";
    var pieChartModule = (function () {
        function pieChartModule(id, pieId, name, title, labels, data, bgColor) {
            this.id = id;
            this.pieId = pieId;
            this.name = name;
            this.title = title;
            this.labels = labels;
            this.data = data;
            this.bgColor = bgColor;
        }
        return pieChartModule;
    }());
    exports.pieChartModule = pieChartModule;
});
//# sourceMappingURL=pieChartModule.js.map
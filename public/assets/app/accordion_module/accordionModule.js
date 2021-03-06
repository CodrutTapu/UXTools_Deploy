define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var accordionModule = (function () {
        function accordionModule(id, name, title, items, bgColor) {
            this.id = id;
            this.name = name;
            this.title = title;
            this.items = items;
            this.bgColor = bgColor;
        }
        return accordionModule;
    }());
    exports.accordionModule = accordionModule;
});
//# sourceMappingURL=accordionModule.js.map
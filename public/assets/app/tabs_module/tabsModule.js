define(["require", "exports"], function (require, exports) {
    "use strict";
    var tabsModule = (function () {
        function tabsModule(id, name, items, bgColor) {
            this.id = id;
            this.name = name;
            this.items = items;
            this.bgColor = bgColor;
        }
        return tabsModule;
    }());
    exports.tabsModule = tabsModule;
});
//# sourceMappingURL=tabsModule.js.map
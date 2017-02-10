define(["require", "exports"], function (require, exports) {
    "use strict";
    var tabsItem = (function () {
        function tabsItem(id, title, content) {
            this.id = id;
            this.title = title;
            this.content = content;
        }
        return tabsItem;
    }());
    exports.tabsItem = tabsItem;
});
//# sourceMappingURL=tabsItem.js.map
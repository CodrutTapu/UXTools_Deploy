define(["require", "exports"], function (require, exports) {
    "use strict";
    var accordionItem = (function () {
        function accordionItem(id, title, content) {
            this.id = id;
            this.title = title;
            this.content = content;
        }
        return accordionItem;
    }());
    exports.accordionItem = accordionItem;
});
//# sourceMappingURL=accordionItem.js.map
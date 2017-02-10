define(["require", "exports"], function (require, exports) {
    "use strict";
    var imageModule = (function () {
        function imageModule(id, name, url) {
            this.id = id;
            this.name = name;
            this.url = url;
        }
        return imageModule;
    }());
    exports.imageModule = imageModule;
});
//# sourceMappingURL=imageModule.js.map
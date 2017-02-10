define(["require", "exports"], function (require, exports) {
    "use strict";
    var devicePlatform = (function () {
        function devicePlatform(content, status, name) {
            this.content = content;
            this.status = status;
            this.name = name;
        }
        return devicePlatform;
    }());
    exports.devicePlatform = devicePlatform;
});
//# sourceMappingURL=devicePlatform.js.map
define(["require", "exports"], function (require, exports) {
    "use strict";
    var devicesPlatformsModule = (function () {
        function devicesPlatformsModule(id, moduleId, name, options, bgColor) {
            this.id = id;
            this.moduleId = moduleId;
            this.name = name;
            this.options = options;
            this.bgColor = bgColor;
        }
        return devicesPlatformsModule;
    }());
    exports.devicesPlatformsModule = devicesPlatformsModule;
});
//# sourceMappingURL=devicesPlatformsModule.js.map
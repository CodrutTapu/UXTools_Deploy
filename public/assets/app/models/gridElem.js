define(["require", "exports"], function (require, exports) {
    "use strict";
    var gridElem = (function () {
        function gridElem(dim, id, modules, csColor) {
            this.dim = dim;
            this.id = id;
            this.modules = modules;
            this.csColor = csColor;
        }
        return gridElem;
    }());
    exports.gridElem = gridElem;
});
//# sourceMappingURL=gridElem.js.map
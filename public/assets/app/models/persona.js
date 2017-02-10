define(["require", "exports"], function (require, exports) {
    "use strict";
    var persona = (function () {
        function persona(name, content) {
            this.name = name;
            this.content = content;
        }
        return persona;
    }());
    exports.persona = persona;
});
//# sourceMappingURL=persona.js.map
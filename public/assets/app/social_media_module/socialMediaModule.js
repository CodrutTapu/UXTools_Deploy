define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var socialMediaModule = (function () {
        function socialMediaModule(id, name, facebookUrl, twitterUrl, linkedinUrl, externalUrl, bgColor) {
            this.id = id;
            this.name = name;
            this.facebookUrl = facebookUrl;
            this.twitterUrl = twitterUrl;
            this.linkedinUrl = linkedinUrl;
            this.externalUrl = externalUrl;
            this.bgColor = bgColor;
        }
        return socialMediaModule;
    }());
    exports.socialMediaModule = socialMediaModule;
});
//# sourceMappingURL=socialMediaModule.js.map
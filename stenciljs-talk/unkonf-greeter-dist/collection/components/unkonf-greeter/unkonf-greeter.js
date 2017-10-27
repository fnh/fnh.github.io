import { } from '@stencil/core';
var UnkonfGreeter = /** @class */ (function () {
    function UnkonfGreeter() {
    }
    UnkonfGreeter.prototype.render = function () {
        return (h("div", null,
            "Hello, ",
            this.first,
            " ",
            this.last));
    };
    return UnkonfGreeter;
}());
export { UnkonfGreeter };

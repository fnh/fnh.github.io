/*! Built with http://stenciljs.com */

unkonf.loadComponents(

/**** module id (dev mode) ****/
"unkonf-greeter",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
"use strict";
// @stencil/core

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

exports['unkonf-greeter'] = UnkonfGreeter;
},


/***************** unkonf-greeter *****************/
[
/** unkonf-greeter: tag **/
"unkonf-greeter",

/** unkonf-greeter: members **/
[
  [ "first", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "last", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ]
],

/** unkonf-greeter: host **/
{}

]
);
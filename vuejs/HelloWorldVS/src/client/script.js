(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.unknown = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (Script) {
    var Main = Script.Main = function (Main) {
      new Vue({
        el: "#app",
        data: {
          message: "Hello from F#!"
        }
      });
      return Main;
    }({});

    return Script;
  }({});
});
//# sourceMappingURL=script.js.map
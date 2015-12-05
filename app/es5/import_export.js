System.registerModule("app/es5/import_export.js", [], function() {
  "use strict";
  var __moduleName = "app/es5/import_export.js";
  var x = 2;
  var $__default = 3;
  function sayHello(name) {
    return "Hello, " + name;
  }
  ;
  function getCounterValue() {
    return counter;
  }
  var counter = 0;
  counter++;
  return {
    get x() {
      return x;
    },
    get default() {
      return $__default;
    },
    get sayHello() {
      return sayHello;
    },
    get getCounterValue() {
      return getCounterValue;
    }
  };
});

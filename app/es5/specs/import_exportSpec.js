System.registerModule("app/es5/specs/import_exportSpec.js", [], function() {
  "use strict";
  var __moduleName = "app/es5/specs/import_exportSpec.js";
  var x = System.get("app/es5/import_export.js").x;
  var xalias = System.get("app/es5/import_export.js").x;
  var y = System.get("app/es5/import_export.js").default;
  var z = System.get("app/es5/import_export.js").default;
  var $__4 = System.get("app/es5/import_export.js"),
      x1 = $__4.x,
      y1 = $__4.default,
      sayHello = $__4.sayHello;
  var wm = System.get("app/es5/import_export.js");
  var $__5 = System.get("app/es5/import_export.js"),
      z2 = $__5.default,
      x2 = $__5.x,
      f2 = $__5.sayHello;
  var z3 = System.get("app/es5/import_export.js").default;
  var wm1 = System.get("app/es5/import_export.js");
  System.get("app/es5/import_export.js");
  describe('imports and exports', function() {
    describe('import keyword', function() {
      it('import {name} from \'module.js\'  // imports named exports through destructuring', function() {
        expect(x).toBe(2);
      });
      it('import {name as nameAlias} from \'module.js\' // creates an alias using \'as\' ', function() {
        expect(xalias).toBe(2);
      });
      it('import {name1,name2} from \'module.js\' // can import all/multiple named exports at once', function() {
        expect(x1).toBe(2);
        expect(y1).toBe(3);
        expect(sayHello('Chaitanya')).toBe('Hello, Chaitanya');
      });
      it('import {default as name} from \'module.js\' //can use special \'default\' keyword for importing default export', function() {
        expect(y).toBe(3);
      });
      it('import defaultMember from \'module.js\' // default export can be referenced directly, without destructuring ', function() {
        expect(z).toBe(3);
      });
      it('import * as moduleAlias from \'module.js\' //imports the whole module object into a variable(moduleAlias)', function() {
        expect(wm.x).toBe(2);
        expect(wm.default).toBe(3);
        expect(wm.sayHello('Chaitanya')).toBe('Hello, Chaitanya');
      });
      it('import defaultMember, {name1, name2}  from \'module.js\' //default and named exports syntax can be combined', function() {
        expect(z2).toBe(3);
        expect(x2).toBe(2);
        expect(f2('Chaitanya')).toBe("Hello, Chaitanya");
      });
      it('import defaultMember, * as moduleAlias  from \'module.js\' //can combine default and whole module syntax can be combined', function() {
        expect(z3).toBe(3);
        expect(wm1.x).toBe(2);
        expect(wm1.default).toBe(3);
        expect(wm1.sayHello('Chaitanya')).toBe('Hello, Chaitanya');
      });
      it('import \'module.js\' // import the entire module for side effects only, without importing any bindings ', function() {
        expect(wm1.getCounterValue()).toBe(1);
      });
      it('infact, multiple imports of the same module would only ever run the module just once!', function() {
        expect(wm.getCounterValue()).toBe(1);
      });
    });
  });
  return {};
});

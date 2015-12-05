System.registerModule("app/es5/specs/variables_and_parametersSpec.js", [], function() {
  "use strict";
  var __moduleName = "app/es5/specs/variables_and_parametersSpec.js";
  describe('let keyword', function() {
    it('gives block scoping, unlike var', function() {
      var varfn = function() {
        if (false) {
          var x = 2;
        }
        return x;
      };
      var letfn = function() {
        if (true) {
          var y$__7 = 2;
        }
        return y;
      };
      expect(varfn()).toBeUndefined();
      expect(letfn).toThrowError(ReferenceError, 'y is not defined');
    });
  });
  describe('const keyword', function() {
    it('is used to declare a read only variable', function() {
      var fn = function() {
        var x = 12;
        return x;
      };
      expect(fn()).toBe(12);
    });
    it('like let, also creates a block scoped variable', function() {
      var fn = function() {
        if (true) {
          var x$__8 = 2;
        }
        return x;
      };
      expect(fn).toThrowError(ReferenceError);
    });
  });
  describe('destructuring', function() {
    it('can destructure arrays', function() {
      var $__3,
          $__4;
      var $__2 = [3, 2],
          x = ($__3 = $__2[Symbol.iterator](), ($__4 = $__3.next()).done ? void 0 : $__4.value),
          y = ($__4 = $__3.next()).done ? void 0 : $__4.value;
      expect(x).toBe(3);
      expect(y).toBe(2);
    });
    it('and arrays need not match in length', function() {
      var $__3,
          $__4;
      var $__2 = [1, 2, 3, 4],
          x = ($__3 = $__2[Symbol.iterator](), ($__4 = $__3.next()).done ? void 0 : $__4.value),
          y = ($__4 = $__3.next()).done ? void 0 : $__4.value;
      expect(x).toBe(1);
      expect(y).toBe(2);
    });
    it('and items can be skipped in the middle', function() {
      var $__3,
          $__4;
      var $__2 = [1, 2, 3, 4],
          x = ($__3 = $__2[Symbol.iterator](), ($__4 = $__3.next()).done ? void 0 : $__4.value),
          y = ($__3.next(), ($__4 = $__3.next()).done ? void 0 : $__4.value),
          z = ($__4 = $__3.next()).done ? void 0 : $__4.value;
      expect(x).toBe(1);
      expect(y).toBe(3);
      expect(z).toBe(4);
    });
    it('unmatched items are going to be undefined', function() {
      var $__3,
          $__4;
      var $__2 = [2, 3],
          y = ($__3 = $__2[Symbol.iterator](), $__3.next(), ($__4 = $__3.next()).done ? void 0 : $__4.value),
          z = ($__4 = $__3.next()).done ? void 0 : $__4.value;
      expect(y).toBe(3);
      expect(z).toBeUndefined();
    });
    it('can destructure objects', function() {
      var $__2 = {
        name: 'Chaitanya',
        age: 32
      },
          name = $__2.name,
          age = $__2.age;
      expect(name).toBe('Chaitanya');
      expect(age).toBe(32);
    });
    it('but the destructuring is a bit counter intuitive with the object properties on the left hand side', function() {
      var $__2 = {
        name: 'Chaitanya',
        age: 32
      },
          nameVar = $__2.name,
          ageVar = $__2.age;
      expect(nameVar).toBe('Chaitanya');
      expect(ageVar).toBe(32);
    });
    it('can destructure even complex objects', function() {
      var complexObj = {
        name: {
          firstName: 'Chaitanya',
          lastName: 'Kuchimanchi'
        },
        age: 32
      };
      var $__2 = complexObj,
          lnVar = $__2.name.lastName,
          ageVar = $__2.age;
      expect(lnVar).toBe('Kuchimanchi');
    });
    it('and there\'s a shortcut if you want to have the same variable name as property', function() {
      var complexObj = {
        name: {
          firstName: 'Chaitanya',
          lastName: 'Kuchimanchi'
        },
        age: 32
      };
      var $__2 = complexObj,
          lastName = $__2.name.lastName,
          age = $__2.age;
      expect(lastName).toBe('Kuchimanchi');
      expect(age).toBe(32);
    });
    it('it works with function parameters, too!', function() {
      var myFn = function($__2) {
        var $__3 = $__2,
            data = $__3.data,
            subdomain = $__3.url.subdomain;
        return subdomain;
      };
      expect(myFn({
        data: 'test',
        url: {
          address: 'http://www.test.com',
          subdomain: 'test.com'
        }
      })).toBe("test.com");
    });
  });
  describe("default parameters", function() {
    it('provides default values', function() {
      var fn = function() {
        var arg = arguments[0] !== (void 0) ? arguments[0] : 'default';
        return arg;
      };
      expect(fn()).toBe('default');
    });
    it('works only with undefined, not nulls or empty strings', function() {
      var fn = function() {
        var arg = arguments[0] !== (void 0) ? arguments[0] : 'default';
        return arg;
      };
      expect(fn()).toBe('default');
      expect(fn(undefined)).toBe('default');
      expect(fn(null)).toBe(null);
      expect(fn('')).toBe('');
    });
    it('works with destructuring parameters, too', function() {
      var fn = function($__2) {
        var $__4,
            $__5;
        var $__3 = $__2,
            data = ($__4 = $__3.data) === void 0 ? "default" : $__4,
            subdomain = ($__5 = $__3.subdomain) === void 0 ? "test.com" : $__5;
        return subdomain;
      };
      expect(fn({data: 'data override'})).toBe('test.com');
    });
    it('but not when top level property is null, as it would reference an undefined (good to have that feature perhaps?)', function() {
      var fn = function($__2) {
        var $__4,
            $__6;
        var $__3 = $__2,
            data = ($__4 = $__3.data) === void 0 ? "default" : $__4,
            $__5 = $__3.url,
            subdomain = ($__6 = $__5.subdomain) === void 0 ? "test.com" : $__6;
        return subdomain;
      };
      expect(function() {
        fn({data: 'data override'});
      }).toThrowError();
    });
  });
  describe('rest parameters...', function() {
    it('allow you to accept varied number of parameters', function() {
      var myfn = function(name, age) {
        for (var rest = [],
            $__1 = 2; $__1 < arguments.length; $__1++)
          rest[$__1 - 2] = arguments[$__1];
        var sum = 0;
        rest.forEach(function(item) {
          sum = sum + item;
        });
        return sum;
      };
      var res = myfn('Chaitanya', '32', 1, 2, 3, 4);
      expect(res).toBe(10);
    });
    it('rest parameters are actual arrays, unlike arguments', function() {
      var restfn = function() {
        for (var rest = [],
            $__1 = 0; $__1 < arguments.length; $__1++)
          rest[$__1] = arguments[$__1];
        return Array.isArray(rest);
      };
      var normalfn = function() {
        return Array.isArray(arguments);
      };
      expect(restfn()).toBe(true);
      expect(normalfn()).toBe(false);
    });
  });
  describe('spread operator', function() {
    it('similar in syntax is that it uses ... but outside of function argument list, expands the array', function() {
      var fn = function(x, y, z) {
        return x + y + z;
      };
      expect(fn(1, 2, 3)).toBe(6);
    });
    it('can be used to build arrays', function() {
      var arr = [2, 3, 4];
      var newarr = $traceurRuntime.spread([1], arr, [5, 6, 7]);
      expect(newarr).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
  });
  describe('template literals....', function() {
    it('can be used for variable replacements within a string', function() {
      var name = 'Chaitanya';
      var templateString = ("Hello, " + name);
      expect(templateString).toBe('Hello, Chaitanya');
    });
    it('what if there\'s no variable defined at all? It\'ll just remove it totally', function() {
      var templateString = ("Hello, " + name + "!");
      expect(templateString).toBe('Hello, !');
    });
    it('can make use of tags, which are custom functions to process the template', function() {
      var name = 'Chaitanya';
      var year = 2016;
      var exStrings,
          exValues;
      var debugTag = function(strings) {
        for (var values = [],
            $__1 = 1; $__1 < arguments.length; $__1++)
          values[$__1 - 1] = arguments[$__1];
        exStrings = strings;
        exValues = values;
      };
      var templateString = debugTag($traceurRuntime.getTemplateObject(["Hello ", " , Welcome to (", ")?"]), name, year);
      expect(exStrings).toEqual(['Hello ', ' , Welcome to (', ')?']);
      expect(exValues).toEqual(['Chaitanya', 2016]);
    });
  });
  return {};
});

System.registerModule("app/es5/specs/functional_programmingSpec.js", [], function() {
  "use strict";
  var __moduleName = "app/es5/specs/functional_programmingSpec.js";
  describe("Functional programming ......", function() {
    describe("Arrow functions...", function() {
      it('provide a concise syntax for simple method body', function() {
        var add = function(x, y) {
          return x + y;
        };
        expect(add(2, 3)).toBe(5);
      });
      it('parenthesis can be skipped if there\'s just one parameter', function() {
        var square = function(x) {
          return x * x;
        };
        expect(square(3)).toBe(9);
      });
      it('parenthesis are required if there are no parameters', function() {
        var someValue = function() {
          return 20;
        };
        expect(someValue()).toBe(20);
      });
      it('function body needs to be enclosed in curly braces if there\'s more than one statement and return keyword is also MUST then', function() {
        var bigFn = function(x) {
          x = x + 1;
          return x * 2;
        };
        expect(bigFn(2)).toBe(6);
      });
      it('is most useful when working with passing around functions , like to say, array methods', function() {
        var arr = [1, 2, 3];
        var sum = 0;
        arr.forEach(function(x) {
          return sum += x;
        });
        expect(sum).toBe(6);
        var newarr = arr.map(function(x) {
          return 2 * x;
        });
        expect(newarr).toEqual([2, 4, 6]);
      });
      it("arrow functions and async....the 'this' pointer is safe... :)", function(done) {
        var $__1 = this;
        this.testProp = true;
        setTimeout(function() {
          expect(this.testProp).toBeUndefined();
          done();
        }, 10);
        setTimeout(function() {
          return expect($__1.testProp).not.toBeUndefined();
        });
      });
    });
    describe('iterables and iterators...an iterable collection (of any items) gives access to an iterator ' + 'that allows you to step through one item at a time.... ', function() {
      it('arrays have iterators built in..', function() {
        var numbers = [2, 3, 4];
        var sum = 0;
        var iterator = numbers.values();
        var next = iterator.next();
        while (!next.done) {
          sum += next.value;
          next = iterator.next();
        }
        expect(sum).toBe(9);
      });
      it('for ..of is a shortcut to iterate which builds that done and next call sequence internally', function() {
        var numbers = [2, 3, 4];
        var sum = 0;
        for (var i in numbers) {
          sum += numbers[i];
        }
        expect(sum).toBe(9);
        sum = 0;
        var $__5 = true;
        var $__6 = false;
        var $__7 = undefined;
        try {
          for (var $__3 = void 0,
              $__2 = (numbers)[Symbol.iterator](); !($__5 = ($__3 = $__2.next()).done); $__5 = true) {
            var n = $__3.value;
            {
              sum += n;
            }
          }
        } catch ($__8) {
          $__6 = true;
          $__7 = $__8;
        } finally {
          try {
            if (!$__5 && $__2.return != null) {
              $__2.return();
            }
          } finally {
            if ($__6) {
              throw $__7;
            }
          }
        }
        expect(sum).toBe(9);
      });
      it('but how does for..of get to know the iterator?', function() {
        var numbers = [2, 3, 4];
        var sum = 0;
        var iterator = numbers[Symbol.iterator]();
        var next = iterator.next();
        while (!next.done) {
          sum += next.value;
          next = iterator.next();
        }
        expect(sum).toBe(9);
      });
    });
  });
  return {};
});

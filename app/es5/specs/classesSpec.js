System.registerModule("app/es5/specs/classesSpec.js", [], function() {
  "use strict";
  var __moduleName = "app/es5/specs/classesSpec.js";
  describe("OOPS concepts....in ES6", function() {
    describe("class keyword...", function() {
      it("creates a class!", function() {
        var Employee = function() {
          function Employee() {}
          return ($traceurRuntime.createClass)(Employee, {someMethod: function() {
              return "first method!";
            }}, {});
        }();
        var e = new Employee();
        expect(e.someMethod()).toBe("first method!");
        expect(Employee.prototype.someMethod).toBe(e.someMethod);
      });
      it("can have constructor and maintain state, too!", function() {
        var Employee = function() {
          function Employee(name) {
            this._name = name;
          }
          return ($traceurRuntime.createClass)(Employee, {getName: function() {
              return this._name;
            }}, {});
        }();
        var e1 = new Employee("CK");
        var e2 = new Employee("AC");
        expect(e1.getName()).toBe("CK");
        expect(e2.getName()).toBe("AC");
      });
      it("can have getters and setters", function() {
        var Employee = function() {
          function Employee(name) {
            this.name = name;
          }
          return ($traceurRuntime.createClass)(Employee, {
            get name() {
              return this._name;
            },
            set name(newValue) {
              this._name = newValue;
            }
          }, {});
        }();
        var e1 = new Employee("CK");
        var e2 = new Employee("AC");
        expect(e1.name).toBe("CK");
        expect(e2.name).toBe("AC");
        e1.name = "TEST";
        expect(e1.name).toBe("TEST");
        expect(e1._name).toBe("TEST");
      });
    });
    describe("Inheritance ", function() {
      it(' is simple..using extends', function() {
        var Person = function() {
          function Person(name) {
            this.name = name;
          }
          return ($traceurRuntime.createClass)(Person, {
            get name() {
              return this._name;
            },
            set name(newValue) {
              this._name = newValue;
            }
          }, {});
        }();
        var Employee = function($__super) {
          function Employee(name, title) {
            $traceurRuntime.superConstructor(Employee).call(this, name);
            this.title = title;
          }
          return ($traceurRuntime.createClass)(Employee, {
            get title() {
              return this._title;
            },
            set title(newValue) {
              this._title = newValue;
            }
          }, {}, $__super);
        }(Person);
        var p = new Person("CK");
        var e = new Employee("AC", "PM");
        expect(p.name).toBe("CK");
        expect(e.name).toBe("AC");
        expect(e.title).toBe("PM");
      });
      it("super refers to super/base class, but its value depends on the call context", function() {
        var Person = function() {
          function Person(name) {
            this.name = name;
          }
          return ($traceurRuntime.createClass)(Person, {
            get name() {
              return this._name;
            },
            set name(newValue) {
              this._name = newValue;
            },
            method: function() {
              return "base";
            }
          }, {});
        }();
        var Employee = function($__super) {
          function Employee(name, title) {
            $traceurRuntime.superConstructor(Employee).call(this, name);
            this.title = title;
          }
          return ($traceurRuntime.createClass)(Employee, {
            get title() {
              return this._title;
            },
            set title(newValue) {
              this._title = newValue;
            },
            method: function() {
              return "derived " + $traceurRuntime.superGet(this, Employee.prototype, "method").call(this);
            }
          }, {}, $__super);
        }(Person);
        var p = new Person("CK");
        var e = new Employee("AC", "PM");
        expect(p.method()).toBe("base");
        expect(e.method()).toBe("derived base");
      });
    });
  });
  return {};
});

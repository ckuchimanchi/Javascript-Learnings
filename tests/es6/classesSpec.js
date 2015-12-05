describe("OOPS concepts....in ES6",function () {
    describe("class keyword...", function () {
        it("creates a class!", function () {

            class Employee {
                someMethod() {
                    return "first method!";
                }
            }

            let e = new Employee();
            expect(e.someMethod()).toBe("first method!");

      //proves that class is jsut a shortcut to using prototypes as that's what is done behind the scenes
            expect(Employee.prototype.someMethod).toBe(e.someMethod);

        });

        it("can have constructor and maintain state, too!", function () {

            class Employee {
                constructor(name) {
                    this._name = name;
                }

                getName() {
                    return this._name;
                }

            }

            let e1 = new Employee("CK");
            let e2 = new Employee("AC");

            expect(e1.getName()).toBe("CK");
            expect(e2.getName()).toBe("AC");

        });


        it("can have getters and setters", function () {

             class Employee {

                 constructor(name) {
                     // initially
                     //this._name = name;
                     //then modified to use getters in constructor
                     this.name = name;
                 }

                 //defines getter
                 get name() {
                     return this._name;
                 }
                 //defines setter
                 // Try commenting out this setter
                 // it wouldn't assing a name property, rather error out that it has only a getter
                 // so it will work only if both are commented :)
                 set name(newValue) {
                     this._name = newValue;
                 }
             }


             let e1 = new Employee("CK");
             let e2 = new Employee("AC");

             expect(e1.name).toBe("CK");
             expect(e2.name).toBe("AC");

            e1.name = "TEST";

            expect(e1.name).toBe("TEST");

                             //Remember _name would still be accessible outside for objects. It's not at all hidden

            expect(e1._name).toBe("TEST");


        })
    })

    describe("Inheritance ",function () {
        it(' is simple..using extends',function () {

            class Person {
                constructor(name) {
                    this.name = name;
                }

                get name() {
                    return this._name;
                }
                set name(newValue) {
                    this._name = newValue;
                }

            }

            class Employee extends Person {
                constructor(name,title) {
                    super(name);
                    this.title = title;
                }
                get title() {
                    return this._title;
                }

                set title(newValue) {
                    this._title = newValue;
                }
            }


            let p = new Person("CK");
            let e = new Employee("AC","PM");

            expect(p.name).toBe("CK");
            expect(e.name).toBe("AC");

            expect(e.title).toBe("PM");

        });

        it("super refers to super/base class, but its value depends on the call context", function () {

          class Person {
              constructor(name) {
                  this.name = name;
              }

              get name() {
                  return this._name;
              }
              set name(newValue) {
                  this._name = newValue;
              }

              method() {
                return "base";
              }

          }

          class Employee extends Person {
              constructor(name,title) {
                  super(name);
                  this.title = title;
              }
              get title() {
                  return this._title;
              }

              set title(newValue) {
                  this._title = newValue;
              }

              method() {
                return "derived " + super.method();
              }
          }


          let p = new Person("CK");
          let e = new Employee("AC","PM");

          expect(p.method()).toBe("base");
          expect(e.method()).toBe("derived base");


        });
    })
})

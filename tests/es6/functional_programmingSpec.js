describe("Functional programming ......", function () {
    describe("Arrow functions...", function () {
        it ('provide a concise syntax for simple method body', function () {
            let add = (x,y) =>  x+y;
            
            expect(add(2,3)).toBe(5);
        });
        
        it('parenthesis can be skipped if there\'s just one parameter', function() {
            let square = x => x * x ;
            expect(square(3)).toBe(9);
        });
        
        it('parenthesis are required if there are no parameters', function() {
            let someValue = () => 20 ;
            expect(someValue()).toBe(20);
        });
        
        
        it('function body needs to be enclosed in curly braces if there\'s more than one statement and return keyword is also MUST then',function () {
            let bigFn = (x) => { x = x+1 ; 
                                return x * 2;
                               };
            expect(bigFn(2)).toBe(6);
        });
        
        it('is most useful when working with passing around functions , like to say, array methods', function () {
            let arr = [1,2,3];            
            let sum = 0;
            
            arr.forEach(x => sum += x);
            
            expect(sum).toBe(6);
            
            let newarr = arr.map(x=>2*x);
            
            expect(newarr).toEqual([2,4,6]);
            
        });    
    
        
       it("arrow functions and async....the 'this' pointer is safe... :)",function (done) {
           this.testProp = true;
           
           setTimeout(function () {
              expect(this.testProp).toBeUndefined(); 
              //NOTE: if you don't call done, you'll have a passing test! and can overlook it, although jasmine prints out a "SPEC HAS NO EXPECTATIONS" note
              done();
           },10);
           
           setTimeout(() => expect(this.testProp).not.toBeUndefined());
           
           
       }) 
        
    });
    
    
    describe('iterables and iterators...an iterable collection (of any items) gives access to an iterator ' + 
             'that allows you to step through one item at a time.... ',    function () {
       
        
        it('arrays have iterators built in..', function () {
                let numbers = [2,3,4];
                let sum = 0;
                let iterator = numbers.values();
                let next  = iterator.next();
                while (!next.done) {
                    sum += next.value;
                    next = iterator.next();
                }
            
                expect(sum).toBe(9);
            
        });
        
        it('for ..of is a shortcut to iterate which builds that done and next call sequence internally',function () {
            
                let numbers = [2,3,4];
                let sum = 0 ; 
            
                // Note: 
                // For in ... let's you loop through KEYS
                // For arrays, keys are nothing but the indexes
                // For objects, well, they are the KEYS ;)
                // So in case of for in, you'll have to explicitly get the values through indexing like item[key]
                // In case of for of, you get the value directly! and ONE at a time!
            
                // In example
            
                for ( let i in numbers) {
                    sum += numbers[i];
                }
            
                expect(sum).toBe(9);
            
                sum = 0 ; 
            
                for (let n of numbers) {
                    sum += n;
                }
            
                expect(sum).toBe(9);
                
        });
        
        it('but how does for..of get to know the iterator?', function () {
                // There's a special property called Symbol.iterator
                // We'll learn about symbols later...but for now, the iterator is accessible through....
            
               let numbers = [2,3,4];
                let sum = 0;
                let iterator = numbers[Symbol.iterator](); // This is the only change....
                let next  = iterator.next();
                while (!next.done) {
                    sum += next.value;
                    next = iterator.next();
                }
            
                expect(sum).toBe(9);
                
                // Again, let's learn about Symbols later...
                            
        });
        
        
        
    });
})
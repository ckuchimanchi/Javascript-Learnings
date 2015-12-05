"use strict";
describe('let keyword', function() {
    it('gives block scoping, unlike var', function() {
        
        
        
        var varfn = function() {
            
            if(false) { //false or true doesn't matter as variable is always hoisted to the top
                var x = 2;    
            }
            return x; 
        }
        
        var letfn = function() {            
        
            if(true) {                
                let y = 2;                    
            }
            
            return y;        
        }       
        
        expect(varfn()).toBeUndefined();
        expect(letfn).toThrowError(ReferenceError,'y is not defined');      
        
        
        // with for (not sure why) traceur is transpiling to using 'var' ?? 
        
        /*
        var letfor = function() {
            
            for(let i=0;i<10;i++) {
                
            }
            return i;
        }       
        
        
//        var varfor = function() {
//            for ( var i = 0; i < 10; i++) {
//                
//            }
//            return i;
//        }
        
        
        
        expect(letfor).toThrowError(ReferenceError);
        //expect(varfor()).toBe(10);
        
        */
    });
    
    
})

describe('const keyword', function() {
    it('is used to declare a read only variable', function() {
       
        var fn = function() {
            const x = 12;       
            //x = 13;     //Throws error x is read-only
            return x;
        }
        
        expect(fn()).toBe(12);
        
    });
    
    it('like let, also creates a block scoped variable', function() {
        
        var fn = function() {
            if ( true ) {
                const x = 2;    
            }    
            return x;
        }
        
        expect(fn).toThrowError(ReferenceError);
        
    })
})

describe('destructuring', function() {
    
    it('can destructure arrays', function() {
        
        
        //left side are just variables
        let [x,y] = [3,2]; //right side is an array
        
        
        expect(x).toBe(3);
        expect(y).toBe(2);
    });
    
    it('and arrays need not match in length',function() {
        let [x,y] = [1,2,3,4];
        
        expect(x).toBe(1);
        expect(y).toBe(2);
    });
    
    it('and items can be skipped in the middle',function() {
        let [x,,y,z] = [1,2,3,4];
        
        expect(x).toBe(1);
        expect(y).toBe(3);
        expect(z).toBe(4);
    });
 
    it('unmatched items are going to be undefined',function() {
        let [,y,z] = [2,3];
        
        expect(y).toBe(3);
        expect(z).toBeUndefined();
    });
    
    it('can destructure objects',function() {
       
        
        let {name:name, age:age} = {name: 'Chaitanya', age: 32};
        
        expect(name).toBe('Chaitanya');
        expect(age).toBe(32);
                
    });
    
    it('but the destructuring is a bit counter intuitive with the object properties on the left hand side',function () {
       
        let {name: nameVar, age: ageVar} = {name: 'Chaitanya', age: 32};
        
        expect(nameVar).toBe('Chaitanya');
        expect(ageVar).toBe(32);
        
    });
    
    it('can destructure even complex objects',function() {
        
        var complexObj = {name:   {
                                   firstName: 'Chaitanya', 
                                   lastName: 'Kuchimanchi'
                                  },
                          age: 32
                        };
        let {name: 
             {lastName: lnVar}, 
             age: ageVar
            } = complexObj;  
                    
        
        expect(lnVar).toBe('Kuchimanchi');
    });
    
    it('and there\'s a shortcut if you want to have the same variable name as property',function () {
        var complexObj = {name:   {
                                   firstName: 'Chaitanya', 
                                   lastName: 'Kuchimanchi'
                                  },
                          age: 32
                        };
        let {name: 
             {lastName}, 
             age
            } = complexObj;  
        
        expect(lastName).toBe('Kuchimanchi');
        expect(age).toBe(32);
        
    });
    
    it('it works with function parameters, too!', function () {
       var myFn = function({data,url:{subdomain}}) {
           return subdomain;
       } 
        
              
       expect(myFn(
        {data: 'test',
         url: {
          address: 'http://www.test.com',
          subdomain: 'test.com'
         }       
        }
       )).toBe("test.com");
       
    });
})

describe("default parameters",function () {
    it('provides default values',function() {
        var fn = function(arg = 'default') {
            return arg;
        }
        
        expect(fn()).toBe('default');
    });
    
    it('works only with undefined, not nulls or empty strings',function() {
        var fn = function(arg = 'default') {
            return arg;
        }
        
        
        expect(fn()).toBe('default');
        //same as not passing 
        expect(fn(undefined)).toBe('default');
        expect(fn(null)).toBe(null);
        expect(fn('')).toBe('');
    });
    
    it('works with destructuring parameters, too', function () {
        var fn = function({data = "default", subdomain = "test.com"}) {
            return subdomain;
        }
        
        expect(fn({data:'data override'})).toBe('test.com');
    });
    
    
    it('but not when top level property is null, as it would reference an undefined (good to have that feature perhaps?)', function () {
        var fn = function({data = "default", url : {subdomain = "test.com"}}) {
            return subdomain;
        }
        
        expect(function() {
            fn({data:'data override'})}).toThrowError();
    });
});

describe('rest parameters...',function() {
   
    it('allow you to accept varied number of parameters', function () {
        var myfn = function(name,age,...rest) {
            var sum = 0;
            rest.forEach(function(item) {
                sum = sum + item;
            })
            return sum;
        };
        
        let res = myfn('Chaitanya','32',1,2,3,4);
        expect(res).toBe(10);
    })
    
    it('rest parameters are actual arrays, unlike arguments', function() {
        
        var restfn = function(...rest) {
            return Array.isArray(rest);
        }
        
        var normalfn = function() {
            return Array.isArray(arguments);
        }
        
        expect(restfn()).toBe(true);
        // arguments looks like an array, but it isn't!
        expect(normalfn()).toBe(false);
        
    });
});


describe('spread operator',function () {
    it('similar in syntax is that it uses ... but outside of function argument list, expands the array', function () {
        var fn = function(x,y,z) {
            return x+y+z;    
        };
        
        expect(fn(1,2,3)).toBe(6);               
    })
    
    it('can be used to build arrays',function() {
        var arr = [2,3,4];
        
        var newarr = [1,...arr,5,6,7];
        
        expect(newarr).toEqual([1,2,3,4,5,6,7])
    });
})

describe('template literals....',function () {
    it('can be used for variable replacements within a string',function () {
        let name = 'Chaitanya';
        let templateString = `Hello, ${name}`;
        expect(templateString).toBe('Hello, Chaitanya');
    });
    
    
    it('what if there\'s no variable defined at all? It\'ll just remove it totally',function () {
        let templateString = `Hello, ${name}!`;
        expect(templateString).toBe('Hello, !');
    });
    
    it('can make use of tags, which are custom functions to process the template',function () {
        let name = 'Chaitanya';
        let year = 2016;
        
        let exStrings,exValues;
        
        // its important to have the values defined as rest parameter...else only the first value will be passed!
        var debugTag = function(strings,...values) {
            exStrings = strings;
            exValues = values;
        }
        
        let templateString = debugTag `Hello ${name} , Welcome to (${year})?`;
        //note: observe even the spaces in the array elements
        expect (exStrings).toEqual(['Hello ',' , Welcome to (',')?']);
        expect(exValues).toEqual(['Chaitanya',2016]);
    })

});






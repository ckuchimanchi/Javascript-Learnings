import {x} from 'app/es5/import_export.js';
import {x as xalias} from 'app/es5/import_export.js';
import {default as y} from 'app/es5/import_export.js';
import z from 'app/es5/import_export.js';
//all at once
import {x as x1,default as y1,sayHello} from 'app/es5/import_export.js';   
// you can import the whole module
import * as wm from 'app/es5/import_export.js';
import z2, {x as x2,sayHello as f2}  from 'app/es5/import_export.js';
import z3, * as wm1  from 'app/es5/import_export.js';
import 'app/es5/import_export.js';


describe('imports and exports', function() {
    
    describe('import keyword', function() {

    it('import {name} from \'module.js\'  // imports named exports through destructuring' , function() {        
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
        
    
    it('import * as moduleAlias from \'module.js\' //imports the whole module object into a variable(moduleAlias)',function() {
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

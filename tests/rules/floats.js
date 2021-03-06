(function(){

    /*global YUITest, CSSLint*/
    var Assert = YUITest.Assert;
    
    YUITest.TestRunner.add(new YUITest.TestCase({
    
        name: "Floats Rule Errors",
           
        "10 floats should result in a warning": function(){
            var result = CSSLint.verify(".foo { float: left; } .foo { float: left; } .foo { float: left; } .foo { float: left; } .foo { float: left; } .foo { float: left; } .foo { float: left; } .foo { float: left; } .foo { float: left; } .foo { float: left; }", { "floats": 1 });
            Assert.areEqual(1, result.messages.length);
            Assert.areEqual("warning", result.messages[0].type);
            Assert.areEqual("Too many floats (10), abstraction needed.", result.messages[0].message);
        },
        
        "9 floats should not result in a warning": function(){
            var result = CSSLint.verify(".foo { float: left; } .foo { float: left; } .foo { float: left; } .foo { float: left; } .foo { float: left; } .foo { float: left; } .foo { float: left; } .foo { float: left; }", { "floats": 1 });
            Assert.areEqual(0, result.messages.length);
        },
        
        "11 floats should result in a warning": function(){
            var result = CSSLint.verify(".foo { float: left; } .foo { float: left; } .foo { float: left; } .foo { float: left; } .foo { float: left; } .foo { float: left; } .foo { float: left; } .foo { float: left; } .foo { float: left; } .foo { float: left; } .foo { float: left; }", { "floats": 1 });
            Assert.areEqual(1, result.messages.length);
            Assert.areEqual("warning", result.messages[0].type);
            Assert.areEqual("Too many floats (11), abstraction needed.", result.messages[0].message);
        }        
    }));     

})();

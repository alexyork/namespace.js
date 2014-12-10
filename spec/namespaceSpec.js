describe("namespace.js", function() {

    it("should be able to create namespaces one level deep", function() {
        namespace("Foo");
        
        expect(window["Foo"]).toBeDefined();
    });

    it("should be able to create namespaces two levels deep", function() {
        namespace("Foo.Bar");

        expect(window["Foo"]).toBeDefined();
        expect(window["Foo"]["Bar"]).toBeDefined();
    });

    it("should be able to create namespaces three levels deep", function() {
        namespace("Foo.Bar.Baz");

        expect(window["Foo"]).toBeDefined();
        expect(window["Foo"]["Bar"]).toBeDefined();
        expect(window["Foo"]["Bar"]["Baz"]).toBeDefined();
    });

    it("should return the object namespace it created", function() {
        var result = namespace("Foo.Bar");

        expect(result).toEqual(window["Foo"]["Bar"]);
    });

    it("should ignore invalid inputs", function() {
        var result = namespace("");
        expect(result).toBeUndefined();

        result = namespace(null);
        expect(result).toBeUndefined();
    });

    it("should not wipe out existing namespaces", function() {
        window["Foo"] = { Baz: "foobaz" };
        
        namespace("Foo.Baz");
        expect(window["Foo"]).toBeDefined();
        expect(window["Foo"]["Baz"]).toBeDefined();
        expect(window.Foo.Baz).toEqual("foobaz");
    });

    beforeEach(function() {
        delete window["Foo"];
    });
    afterEach(function() {
        delete window["Foo"];
    });

});
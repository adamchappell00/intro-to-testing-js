// Global definitions/instances
var myObject = {
    size : "Large",
    state: 2
}

// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello()).toBe("string");
    })
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
    it('should return the string that contains the word "Hello" when executed', function() {
        expect(sayHello()).toContain("Hello");
    });
    it('should return a string greeting the input', function() {
        expect(sayHello("Adam")).toBe("Hello Adam!");
        expect(sayHello("Jay")).toBe("Hello Jay!");
    });
    it('should return the string of "Hello World" when executed without an input', function() {
        expect(sayHello()).toBe("Hello World!");
    });
    it('should return the string of "Hello World!" when executed with a value of false as an input ', function() {
        expect(sayHello(false)).toBe("Hello World!");
    });
    it('should return the string of "Hello World!" when executed with a value of true as an input ', function() {
        expect(sayHello(true)).toBe("Hello World!");
    });
    it('should return the string of "Hello World!" when executed with a null value ', function() {
        expect(sayHello(null)).toBe("Hello World!");
    });
    it('should return the string of "Hello World!" when executed with an empty string: "" ', function() {
        expect(sayHello("")).toBe("Hello World!");
    });
    it('should return the string of "Hello World!" when executed with an Array', function() {
        expect(sayHello([1])).toBe("Hello World!");
    });
    it('should return the string of "Hello World!" when executed with an Object that is not undefined', function() {
        expect(sayHello(myObject)).toBe("Hello World!");
    });
})
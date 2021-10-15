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
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string that contains the word "Hello" when executed', function() {
        expect(sayHello()).toContain("Hello");
    });
    it('should return the string of "Hello Adam" when passed the Parameter of "Adam": sayHello("Adam")', function() {
        expect(sayHello('Adam')).toBe("Hello Adam");
    });
})
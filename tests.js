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
        expect(typeof sayHello).toBe('function');
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
describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean value', function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when executed with the number 5', function() {
        expect(isFive(5)).toBe(true);
    });
    it("should return true when executed with the string of '5'", function() {
        expect(isFive("5")).toBe(true);
    });
})
describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean value', function() {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when executed with isEven(2)', function() {
        expect(isEven(2)).toBe(true);
    });
    it("should return true when executed with isEven(-4)", function() {
        expect(isEven(-4)).toBe(true);
    });
    it("should return false when executed with isEven(3)", function() {
        expect(isEven(-4)).toBe(true);
    });
    it("should return false when executed with isEven('banana')", function() {
        expect(isEven('banana')).toBe(false);
    });
    it("should return true when executed with isEven('8')", function() {
        expect(isEven("8")).toBe(true);
    });
    it("should return false when executed with isEven(Infinity)", function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it("should return false when executed with a boolean input: isEven(true or isEven(false)", function() {
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
    });
    it("should return false when executed without an argument:  isEven()", function() {
        expect(isEven()).toBe(false);
    });
})
describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean value', function() {
        expect(typeof isVowel()).toBe('boolean');
    });
    it("should return true when executed with isVowel('a')", function() {
        expect(isVowel('a')).toBe(true);
    });
    it("should return true when executed with isVowel('A')", function() {
        expect(isVowel('A')).toBe(true);
    });
    it("should return false when executed with isVowel('y')", function() {
        expect(isVowel('y')).toBe(false);
    });
    it("should return false when executed with isVowel(4)", function() {
        expect(isVowel(4)).toBe(false);
    });
    it("should return false when executed with  a boolean value: isVowel(true) or isVowel(False)", function() {
        expect(isVowel(true)).toBe(false);
        expect(isVowel(false)).toBe(false);
    });
    it("should return false when executed without an argument:  isVowel()", function() {
        expect(isVowel()).toBe(false);
    });
    it("should return false when executed with isVowel('banana')", function() {
        expect(isVowel('banana')).toBe(false);
    });
})

describe('add', function() {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return a number value', function () {
        expect(typeof add()).toBe('number');
    });
    it("should return 5 when executed with add(2,3)", function() {
        expect(add(2,3)).toBe(5);
    });
    it("should return -12 when executed with add(-3,-9)", function() {
        expect(add(-3,-9)).toBe(-12);
    });
    it("should return 11 when executed with add('5',6)", function() {
        expect(add("5",6)).toBe(11);
    });
    it("should return 6 when executed with add('-4','10')", function() {
        expect(add("-4","10")).toBe(6);
    });
    it("should return NaN when executed with add('banana','split')", function() {
        expect(add("banana","split")+ " ").toContain("NaN");
    });
    it("should return NaN when executed with add(2,'apples')", function() {
        expect(add(2,"apples")+ " ").toContain("NaN");
    });
    it("should return NaN when executed without a parameter: add()", function() {
        expect(add()+ " ").toContain("NaN");
    });
})

/*


 */
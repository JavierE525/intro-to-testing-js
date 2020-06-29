// Unit tests for the helloWorld function
///////////////////// helloWorld  ////////////////////////
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

/////////////////////  sayHello   ////////////////////////
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello("World")).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello("true")).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
    it("should never return 'boolean' when called", function() {
        expect(sayHello()).not.toBe("boolean");
    });
    it("should never return '-15' when called", function() {
        expect(sayHello()).not.toBe("-15");
    });
});
/////////////////////  isFive   ////////////////////////
describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it("should return 'boolean' when called", function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it("should return true when the imput is the number 5", function() {
        expect(isFive(5)).toBe(true);
    });
    it("should return true when the imput is a  string 5", function() {
        expect(isFive("5")).toBe(true);
    });
    it("should return false when the imput is invalid-'Bingo'", function() {
        expect(isFive("Bingo")).toBe(false);
    });
    it("should return false when the imput is invalid-'1'", function() {
        expect(isFive(1)).toBe(false);
    });
    it("should return false when the imput is invalid-'[]'", function() {
        expect(isFive([])).toBe(false);
    });
    it("should return false when the imput is invalid-'-25'", function() {
        expect(isFive(-25)).toBe(false);
    });
});

/////////////////////  isEven   ////////////////////////
describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it("should return 'boolean' when called", function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it("should return true when the input is even", function() {
        expect(isEven(4)).toBe(true);
        expect(isEven(34)).toBe(true);
        expect(isEven(-34)).toBe(true);
        expect(isEven(200)).toBe(true);
    });
    it("should false when the input is not even", function() {
        expect(isEven("toy")).toBe(false);
        expect(isEven(87)).toBe(false);
        expect(isEven(-1)).toBe(false);
        expect(isEven("true")).toBe(false);
    });
});

/////////////////////  isVowel   ////////////////////////
describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it("should return 'boolean' when called", function() {
        expect(typeof isVowel()).toBe("boolean");
    });
    it("should return true if we find a CAPITAL vowel", function() {
        expect(isVowel("A")).toBe(true);
        expect(isVowel("E")).toBe(true);
        expect(isVowel("I")).toBe(true);
        expect(isVowel("O")).toBe(true);
        expect(isVowel("U")).toBe(true);
    });
    it("should return true if we find a LOWER CASE vowel", function() {
        expect(isVowel("A")).toBe(true);
        expect(isVowel("e")).toBe(true);
        expect(isVowel("I")).toBe(true);
        expect(isVowel("o")).toBe(true);
        expect(isVowel("u")).toBe(true);
    });
    it("should return false if we do not find a vowel", function() {
        expect(isVowel("1")).toBe(false);
        expect(isVowel(1)).toBe(false);
        expect(isVowel(0)).toBe(false);
        expect(isVowel("test")).toBe(false);
        expect(isVowel("Test1")).toBe(false);
        expect(isVowel(true)).toBe(false);
        expect(isVowel(false)).toBe(false);
        expect(isVowel()).toBe(false);
    });
});

/////////////////////  add   ////////////////////////
describe('add', function() {
    it('should be a defined function', function() {
        expect(typeof add).toBe('function');
    });
    it("should return the addition of any two numbers", function() {
        expect(add(5, 2)).toBe(7);
        expect(add(8, 4)).toBe(12);
        expect(add(-3, 5)).toBe(2);
        expect(add(3, 5)).toBe(8);
        expect(add(-2, "12")).toBe(10);
    });
    it("should return NaN for all invalid inputs", function() {
        expect(isVowel("test", "test")).toBe(false);
        expect(isVowel("test", 1)).toBe(false);
        expect(isVowel(1, "test")).toBe(false);
        expect(isVowel()).toBe(false);
    });
});
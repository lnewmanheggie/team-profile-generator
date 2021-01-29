const Intern = require("../lib/intern");
const { test, expect } = require("@jest/globals");

test("Can set school via constructor", () => {
    const schoolTest = "Foo";
    const i = new Intern("Bob", 123, "test", schoolTest);
    expect(i.school).toBe(schoolTest)
})

test("Can get school via getSchool()", () => {
    const schoolTest = "Foo";
    const i = new Intern("Bob", 123, "test", schoolTest);
    expect(i.getSchool()).toBe(schoolTest)
})

test("getRole() returns Intern", () => {
    const roleTest = "Intern";
    const i = new Intern("Bob", 123, "test", "Foo");
    expect(i.getRole()).toBe(roleTest)
})
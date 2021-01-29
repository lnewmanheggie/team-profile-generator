const Manager = require("../lib/manager");
const { test, expect } = require("@jest/globals");

test("Can set office number via constructor", () => {
    const officeTest = 1234;
    const m = new Manager("Bob", 123, "test", officeTest);
    expect(m.officeNumber).toBe(officeTest)
})

test("Can get office number via getOffice()", () => {
    const officeTest = 1234;
    const m = new Manager("Bob", 123, "test", officeTest);
    expect(m.getOffice()).toBe(officeTest)
})

test("getRole() returns Manager", () => {
    const roleTest = "Manager";
    const m = new Manager("Bob", 123, "test", 1234);
    expect(m.getRole()).toBe(roleTest)
})
const { test, expect } = require('@jest/globals');
const Employee = require('../lib/employee');

test("Can create Employee object", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name via constructor", () => {
    const nameTest = "Alice";
    const e = new Employee(nameTest);
    expect(e.name).toBe(nameTest);
});

test("Can set ID via constructor", () => {
    const idTest = 123;
    const e = new Employee("Alice", idTest);
    expect(e.id).toBe(idTest);
});

test("Can set email via constructor", () => {
    const emailTest = "123@test.com";
    const e = new Employee("Alice", 123, emailTest);
    expect(e.email).toBe(emailTest);
})

test("Can get name via getName()", () => {
    const nameTest = "Alice";
    const e = new Employee(nameTest);
    expect(e.getName()).toBe(nameTest)
})

test("Can get id via getId", () => {
    const idTest = 123;
    const e = new Employee("Alice", idTest);
    expect(e.getId()).toBe(idTest);
})

test("Can get email via getEmail()", () => {
    const emailTest = "123@test.com";
    const e = new Employee("Alice", 123, emailTest);
    expect(e.getEmail()).toBe(emailTest);
})

test("Can get role via getRole()", () => {
    const roleTest = "Employee";
    const e = new Employee("Alice", 123, "123@test.com");
    expect(e.getRole()).toBe(roleTest);
})
const Engineer = require("../lib/engineer");
const { test, expect } = require("@jest/globals");

test("Can set github via constructor", () => {
    const githubTest = "Foo";
    const en = new Engineer("Bob", 123, "test", githubTest);
    expect(en.github).toBe(githubTest)
})

test("Can get github via getGithub()", () => {
    const githubTest = "Foo";
    const en = new Engineer("Bob", 123, "test", githubTest);
    expect(en.getGithub()).toBe(githubTest)
})

test("getRole() returns Engineer", () => {
    const roleTest = "Engineer";
    const en = new Engineer("Bob", 123, "test", "github");
    expect(en.getRole()).toBe(roleTest)
})
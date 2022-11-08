const { expect } = require("@jest/globals");
const {
  implementingCommand,
  headings,
  rover,
} = require("./utils");


test("Testing the function that implement the command", () => {
  expect(implementingCommand("FLFFFRFLB")).toBe(
    "(0 , 1) NORTH STOPPED"
  ); /**Note: it returns stopped because if faced an obstacle [0,1] */
});

test("Testing the function that implement the command", () => {
  expect(implementingCommand("fsdsdwfref")).toBe(
    "Please Enter A Valid Command"
  );
});

test("Testing the function that implement the command", () => {
  expect(implementingCommand("345!@4fblr")).toBe(
    "Please Enter A Valid Command"
  );
});

test("Testing the implementing function", () => {
  expect(implementingCommand("344")).toBe("Please Enter A Valid Command");
});

test("testing the length of headings array, sholud be 4", () => {
  expect(headings.length).toBe(4);
});

test("testing rover object", () => {
  expect(rover).toEqual({ x: 0, y: 0, heading: 0 });
});

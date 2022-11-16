const userService = require("../app");
const emptyValueChecker = require("../inputValidator");
describe("Mongodb name validation", () => {
  //   logger.info("Testing began");
  test("To check if entered value is a valid string", () => {
    // const result= testing.reg("John");
    //const {stin}=testing.reg("adf");

    expect(emptyValueChecker("sfd")).toEqual(true);
  });

  test("To check if entered value is an empty string", () => {
    //const result= testing.reg("  ");
    //const {stin}=testing.reg(" ");
    expect(emptyValueChecker(" ")).toEqual(false);
  });
});
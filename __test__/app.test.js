const request=require('supertest');
const {app}= require('../app');
const { emptyUserChecker } = require("../app");
const logger = require('../logger.js');

jest.useFakeTimers();

describe('unit test cases for validation function', () => {
  logger.info("Function Testing began")

  describe('To check if entered value is a valid string', ()=> {
    test(`should respond with boolean value 'true' `, () => {
      expect(emptyUserChecker("sfd")).toEqual(true);
    });
  })

  describe('To check if entered value is an empty string', ()=> {
  test(`should respond with boolean value 'false' `, () => {
      expect(emptyUserChecker(" ")).toEqual(false);
    });
  })

});

describe("Unit test cases for APIs", () => {
  logger.info("API Testing began")
  
  describe("Checking response for loading of user page", () => {
  test("should respond with a status code of 200", async () => {
      const response = await request(app).get("/")
      expect(response.statusCode).toBe(200)
    })
  })

  describe("Checking response for valid input in Add user feature", () => {
  test("should respond with a 200 status code", async () => {
      // jest.setTimeout(10 * 1000);
      const response= await request(app).post("/users").send({  
          name: "username"
      })
      expect(response.statusCode).toBe(200)
    },60_000)
  })


  describe("Checking response for invalid input in Add user feature", () => {
    test("should respond with a status code of 400", async () => {
    const bodyData = [
    {name: " "}
    ]
    for (const body of bodyData) {
    const response = await request(app).post("/users").send(body)
    expect(response.statusCode).toBe(400)
    }
    })
    })

  describe("Checking response for valid input in Find user feature ", () => {
    test("should respond with a status code of 200 ", async () => {
        const reqData = "username"
        const response = await request(app).get("/user/"+reqData)
        expect(response.statusCode).toBe(200)
    })
  })

  describe("Checking response for non existing user in Find user feature", () => {
      test("should respond with a status code of 404", async () => {
        const reqData = "xyz"
        const response = await request(app).get("/user/"+reqData)
        expect(response.statusCode).toBe(404)
      })
  })

  describe("Checking response for List user feature", () => {
      test("should respond with a status code of 200", async () => {
          const response = await request(app).get("/users")
          expect(response.statusCode).toBe(200)
      })
  })

  describe("Checking response for Update feature when only name is sent", () => {
    test("should respond with a status code of 500", async () => {
        const response= await request(app).put("/users").send({
          name: "username",
          _id:" "
        })
        expect(response.statusCode).toBe(500)
      })
  })

  describe("Checking response for Update feature when no data is sent", () => {
    test("should respond with a status code of 400", async () => {
    const response= await request(app).put("/users").send({
    name: " ",
    _id: " "
    })
    expect(response.statusCode).toBe(400)    
    })
    })

    describe("Checking response for Update feature when data is sent", () => {
      test("should respond with a status code of 200", async () => {
      const response= await request(app).put("/users").send({
      name: "new name",
      _id:"6369ecdb61e386e2beae7802"
      })
      expect(response.statusCode).toBe(200)
      })
      })

      describe("Checking response for delete feature when only name is sent", () => {
        test("should respond with a status code of 500", async () => {
        const response= await request(app).delete("/users").send({
        name: "username",
        _id:" "
        })
        expect(response.statusCode).toBe(500)
        })
        })

        describe("Checking response for delete feature when no data is sent", () => {
          test("should respond with a status code of 500", async () => {
          const response= await request(app).delete("/users").send({
          name: "",
          _id:" "
          })
          expect(response.statusCode).toBe(500)
          })
          })
})
const request = require("supertest");
const userRouter = require("./userRouter");
const db = require("../../database/db");

describe("userRouter.js", () => {
  describe("GET /", () => {
    it("should respond with 200 ok status", async () => {
      const res = await request(userRouter).get("/");
      expect(res.status).toBe(200);
    });
  });
});

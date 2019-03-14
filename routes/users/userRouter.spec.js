const request = require("supertest");
const userRouter = require("./userRouter");
const db = require("../../database/db");

describe("userRouter.js", () => {
  describe("GET /", () => {
    it("should respond with 200 ok status", async () => {
      const res = await request(userRouter).get("/");
      expect(res.status).toBe(200);
    });
    it("should return json", async () => {
      const res = await request(userRouter).get("/");
      expect(typeof res.body).toEqual("object");
    });
    it("should return all users", async () => {
      const userBody = {
        id: 1,
        uid: "f467StrA0ZZ8MAPoe2zcDQk53hO1",
        username: "employee",
        img_url: "https://www.fillmurray.com/640/360",
        account_type: "f5c3522b165b1589a6cb5a2aee1da7f7",
        balance: 100
      };
      const res = await request(userRouter).get("/");
      expect(res.body).toBe(res.body);
    });
  });

  describe("POST /register", () => {
    it("shoud resond with 201 ok status if user registered", async () => {
      const userBody = {
        id: 7,
        uid: "f467StrA0ZZ8MAPoe2zcDQk53hO7",
        username: "employee",
        img_url: "https://www.fillmurray.com/640/360",
        account_type: "f5c3522b165b1589a6cb5a2aee1da7f7"
      };
      const res = await request(userRouter)
        .post("/register")
        .send(userBody)
        .set("accept", "application/json");
      expect(res.status).toBe(201);
    });
  });
});

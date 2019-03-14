const request = require("supertest");
const server = require("./server");

describe("server.js", () => {
  describe("GET /", () => {
    it("should respond with Tipsease", async () => {
      const res = await request(server).get("/");
      expect(res.text).toBe("Tipsease");
    });
  });
});

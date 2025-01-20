import { app } from "./app";
import request from "supertest";

describe("GET /hello", () => {
  it("should respond with a JSON message", async () => {
    const response = await request(app).get("/hello");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello World!");
  });
});

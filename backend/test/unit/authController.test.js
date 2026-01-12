const {
  register,
  login,
  refresh,
  logout,
  profile,
  delete: deleteUser
} = require("../../src/controllers/authController");

const User = require("../../src/models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

jest.mock("../../src/models/User");
jest.mock("bcrypt");
jest.mock("jsonwebtoken");

const mockRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnThis();
  res.json = jest.fn().mockReturnThis();
  res.sendStatus = jest.fn().mockReturnThis();
  res.cookie = jest.fn();
  res.clearCookie = jest.fn();
  return res;
};

describe("Auth Controller Tests", () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("register()", () => {

    it("should return 400 if missing fields", async () => {
      const req = { body: { email: "a@test.com" } };
      const res = mockRes();

      await register(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
    });

    it("should return 400 if user already exists", async () => {
      const req = { body: { username: "onkar", email: "a@test.com", password: "123456" } };
      const res = mockRes();

      User.findOne.mockResolvedValueOnce({ _id: "123" });

      await register(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
    });

    it("should create user successfully", async () => {
      const req = {
        body: { username: "onkar", email: "a@test.com", password: "123456" }
      };
      const res = mockRes();

      User.findOne
        .mockResolvedValueOnce(null) // email check
        .mockResolvedValueOnce(null); // username check

      bcrypt.hash.mockResolvedValue("hashed");
      jwt.sign.mockReturnValue("token");

      User.create.mockResolvedValue({
        _id: "1",
        username: "onkar",
        email: "a@test.com",
        password: "hashed",
        toObject() {
          return { _id: "1", username: "onkar", email: "a@test.com" };
        },
        save: jest.fn()
      });

      await register(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalled();
    });
  });

  describe("login()", () => {

    it("should return 400 if no email/password", async () => {
      const req = { body: {} };
      const res = mockRes();

      await login(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
    });

    it("should return 400 if user not found", async () => {
      const req = { body: { email: "a@test.com", password: "123" } };
      const res = mockRes();

      User.findOne.mockResolvedValue(null);

      await login(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
    });

    it("should login successfully", async () => {
      const req = { body: { email: "a@test.com", password: "123456" } };
      const res = mockRes();

      User.findOne.mockResolvedValue({
        _id: "1",
        password: "hashed",
        refreshToken: null,
        save: jest.fn(),
        toObject() {
          return { _id: "1", email: "a@test.com" };
        }
      });

      bcrypt.compare.mockResolvedValue(true);
      jwt.sign.mockReturnValue("token");

      await login(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe("refresh()", () => {

    it("should return 401 if no cookie", async () => {
      const req = { cookies: {} };
      const res = mockRes();

      await refresh(req, res);

      expect(res.sendStatus).toHaveBeenCalledWith(401);
    });

    it("should return 403 if token invalid", async () => {
      const req = { cookies: { refreshToken: "bad" } };
      const res = mockRes();

      User.findOne.mockResolvedValue(null);

      await refresh(req, res);

      expect(res.sendStatus).toHaveBeenCalledWith(403);
    });
  });

  describe("logout()", () => {

    it("should clear cookie and logout", async () => {
      const req = { cookies: { refreshToken: "abc" } };
      const res = mockRes();

      User.findOneAndUpdate.mockResolvedValue(true);

      await logout(req, res);

      expect(res.clearCookie).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ message: "Logged out" });
    });
  });

  describe("profile()", () => {
    it("should return user profile", async () => {
      const req = { user: { id: "1" } };
      const res = mockRes();

      User.findById.mockReturnValue({
        select: jest.fn().mockResolvedValue({ _id: "1", username: "onkar" })
      });

      await profile(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe("delete()", () => {
    it("should delete user", async () => {
      const req = { user: { id: "1" } };
      const res = mockRes();

      User.findByIdAndDelete.mockResolvedValue(true);

      await deleteUser(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

});

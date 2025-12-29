const router = require("express").Router();
const ctrl = require("../controllers/authController");
const auth = require("../middleware/auth");
const authorize = require("../middleware/authorize");

router.post("/register", ctrl.register);
router.post("/login", ctrl.login);
router.post("/refresh", ctrl.refresh);
router.post("/logout", ctrl.logout);

router.get("/profile", auth, ctrl.profile);
router.get("/admin", auth, authorize(["admin"]), ctrl.admin);
router.delete("/delete", auth, ctrl.delete)

module.exports = router;
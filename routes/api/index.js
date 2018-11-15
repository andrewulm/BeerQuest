const router = require("express").Router();
const noteRoutes = require("./notes");
const linkRoutes = require("./links");

router.use("/notes", noteRoutes);
router.use("/links", linkRoutes);

module.exports = router;

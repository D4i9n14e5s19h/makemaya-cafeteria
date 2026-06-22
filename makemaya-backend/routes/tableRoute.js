const express = require("express");
const router = express.Router();

const {
  addTable,
  getTables,
  updateTable
} = require("../controllers/tableController");

// ✅ THESE ROUTES ARE REQUIRED
router.post("/", addTable);
router.get("/", getTables);
router.patch("/:id", updateTable);

module.exports = router;
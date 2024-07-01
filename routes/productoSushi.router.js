const express = require("express");
const router = express.Router();

const controller = require('../controllers/productoSushi.controller')

router.get("/", controller.index);
router.get("/:id", controller.show);
router.post("/", controller.createProduct);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

module.exports = router;

import { Router } from "express";
import ProvinceController from "../controllers/ProvinceController";
import RegencyController from "../controllers/RegencyController";
var cors = require("express-cors");

const router = Router();

router.use(
  cors({
    allowedOrigins: ["*"],
  })
);
// Province
router.get("/province", ProvinceController.find);
router.get("/province/:id", ProvinceController.findOne);
router.post("/province", ProvinceController.create);
router.patch("/province/:id", ProvinceController.update);
router.delete("/province/:id", ProvinceController.delete);

// Regency
router.get("/regency", RegencyController.find);
router.get("/regency/:id", RegencyController.findOne);
router.post("/regency", RegencyController.create);
router.patch("/regency/:id", RegencyController.update);
router.delete("/regency/:id", RegencyController.delete);

export default router;

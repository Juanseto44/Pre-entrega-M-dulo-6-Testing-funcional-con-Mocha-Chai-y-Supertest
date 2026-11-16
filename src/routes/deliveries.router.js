import { Router } from "express";
import { getDeliveries, getDeliveryById } from "../controllers/deliveries.controller.js";

// Las rutas solo conectan un path con el método del Controller
const router = Router();

router.get("/", getDeliveries);
router.get("/:id", getDeliveryById);

export default router;

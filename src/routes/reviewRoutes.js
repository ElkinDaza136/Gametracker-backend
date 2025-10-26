import express from "express";
import {
  obtenerReseñas,
  obtenerReseñasPorJuego,
  agregarReseña,
  editarReseña,
  eliminarReseña
} from "../controllers/reviewController.js";

const router = express.Router();

router.get("/", obtenerReseñas);
router.get("/juego/:juegoId", obtenerReseñasPorJuego);
router.post("/", agregarReseña);
router.put("/:id", editarReseña);
router.delete("/:id", eliminarReseña);

export default router;
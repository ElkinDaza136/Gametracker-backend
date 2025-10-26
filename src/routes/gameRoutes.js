import express from "express";
import {
  obtenerJuegos,
  obtenerJuegoPorId,
  agregarJuego,
  editarJuego,
  eliminarJuego
} from "../controllers/gameController.js";

const router = express.Router();

// Métodos RESTful
router.get("/", obtenerJuegos);        // GET → leer todos
router.get("/:id", obtenerJuegoPorId); // GET → leer uno
router.post("/", agregarJuego);        // POST → crear
router.put("/:id", editarJuego);       // PUT → actualizar
router.delete("/:id", eliminarJuego);  // DELETE → eliminar

export default router;
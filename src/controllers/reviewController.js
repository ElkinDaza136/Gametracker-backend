import Review from "../models/Review.js";
import Game from "../models/Game.js";

// ✅ GET /api/reseñas - Obtener todas las reseñas
export const obtenerReseñas = async (req, res) => {
  try {
    const reseñas = await Review.find().populate("juegoId");
    res.json(reseñas);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener reseñas", error: error.message });
  }
};

// ✅ GET /api/reseñas/juego/:juegoId - Reseñas de un juego específico
export const obtenerReseñasPorJuego = async (req, res) => {
  try {
    const { juegoId } = req.params;
    const reseñas = await Review.find({ juegoId }).sort({ fechaCreacion: -1 });
    res.json(reseñas);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener reseñas por juego", error: error.message });
  }
};

// ✅ POST /api/reseñas - Crear nueva reseña
export const agregarReseña = async (req, res) => {
  try {
    const { juegoId } = req.body;
    const juego = await Game.findById(juegoId);
    if (!juego) return res.status(400).json({ mensaje: "Juego no encontrado" });

    const nuevaReseña = new Review(req.body);
    const guardada = await nuevaReseña.save();
    res.status(201).json(guardada);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al agregar reseña", error: error.message });
  }
};

// ✅ PUT /api/reseñas/:id - Editar reseña existente
export const editarReseña = async (req, res) => {
  try {
    const actualizada = await Review.findByIdAndUpdate(
      req.params.id,
      { ...req.body, fechaActualizacion: Date.now() },
      { new: true }
    );
    if (!actualizada) return res.status(404).json({ mensaje: "Reseña no encontrada" });
    res.json(actualizada);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al editar reseña", error: error.message });
  }
};

// ✅ DELETE /api/reseñas/:id - Eliminar reseña
export const eliminarReseña = async (req, res) => {
  try {
    const eliminada = await Review.findByIdAndDelete(req.params.id);
    if (!eliminada) return res.status(404).json({ mensaje: "Reseña no encontrada" });
    res.json({ mensaje: "Reseña eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar reseña", error: error.message });
  }
};
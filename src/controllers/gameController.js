import Game from "../models/Game.js";

// ✅ GET /api/juegos - Obtener todos los juegos
export const obtenerJuegos = async (req, res) => {
  try {
    const juegos = await Game.find().sort({ fechaCreacion: -1 });
    res.json(juegos);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener juegos", error: error.message });
  }
};

// ✅ GET /api/juegos/:id - Obtener un juego específico
export const obtenerJuegoPorId = async (req, res) => {
  try {
    const juego = await Game.findById(req.params.id);
    if (!juego) return res.status(404).json({ mensaje: "Juego no encontrado" });
    res.json(juego);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener el juego", error: error.message });
  }
};

// ✅ POST /api/juegos - Crear nuevo juego
export const agregarJuego = async (req, res) => {
  try {
    const nuevoJuego = new Game(req.body);
    const guardado = await nuevoJuego.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al agregar juego", error: error.message });
  }
};

// ✅ PUT /api/juegos/:id - Editar juego existente
export const editarJuego = async (req, res) => {
  try {
    const actualizado = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ mensaje: "Juego no encontrado" });
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al editar juego", error: error.message });
  }
};

// ✅ DELETE /api/juegos/:id - Eliminar juego
export const eliminarJuego = async (req, res) => {
  try {
    const eliminado = await Game.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ mensaje: "Juego no encontrado" });
    res.json({ mensaje: "Juego eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar juego", error: error.message });
  }
};
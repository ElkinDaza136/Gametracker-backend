import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    genero: { type: String },
    plataforma: { type: String },
    añoLanzamiento: { type: Number },
    desarrollador: { type: String },
    imagenPortada: { type: String }, 
    descripcion: { type: String },
    completado: { type: Boolean, default: false },
    puntuacion: { type: Number, default: 0 },   
    horasJugadas: { type: Number, default: 0 },  
    
    fechaCreacion: { type: Date, default: Date.now }
});

export default mongoose.model('Game', gameSchema);
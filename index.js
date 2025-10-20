import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import gameRoutes from "./src/routes/gameRoutes.js";
import reviewRoutes from "./src/routes/reviewRoutes.js";

dotenv.config();
await connectDB();

app.use(cors());
app.use(express.json());
const app = express();

// Rutas
app.use('/api/juegos', gameRoutes);
app.use('/api/reseñas', reviewRoutes);


app.get('/', (req, res) => {
    res.send('Gametracker API está funcionando')
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Servidor corriendo en ${PORT}')
});
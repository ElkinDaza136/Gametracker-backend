import mongoose from 'mongoose';

const connectDB = async () => {
try {
const uri = process.env.MONGO_URI;
if (!uri) throw new Error('MONGO_URI no definido en .env');
await mongoose.connect(uri, {
useNewUrlParser: true,
useUnifiedTopology: true
});
console.log('✅ Conectado a MongoDB Atlas');
} catch (error) {
console.error('❌ Error al conectar a MongoDB:', error.message);
process.exit(1);
}
};


export default connectDB;
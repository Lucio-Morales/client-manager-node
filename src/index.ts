import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mainRouter from './routes';
import dotenv from 'dotenv';

dotenv.config();
console.log('[DEBUG] JWT_SECRET:', process.env.JWT_SECRET);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());

app.use('/', mainRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

import express from 'express';
import morgan from 'morgan';
import saludoRouter from './src/routes/saludo.route.js';
import mascotaRouter from './src/routes/mascota.route.js';
import { Middleware, validarApiKey } from './src/middlewares/global.middleware.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(Middleware);
//app.use(validarApiKey);

app.use(express.json());
//app.use(morgan('dev'));

app.use('/saludo', saludoRouter);
app.use('/mascota', mascotaRouter);


app.listen(PORT, ()=>{
    console.log(`API Mascotas está corriendo en el puerto ${PORT}`);
});

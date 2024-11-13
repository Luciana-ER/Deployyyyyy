import express from 'express'
import morgan from  'morgan'
import authRoutes from  './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import taskRoutes from  './routes/task.routes.js'
import cors  from 'cors'


const app = express()

// const allowedOrigins = [
//     'https://deployyyyyy3.onrender.com', //dominio de render
//         // Dominio de tu frontend en Vercel
// ];

app.use(cors({
    origin: 'https://deployyyyyyfront3.onrender.com', //pongo direccion de frontend
    credentials: true
}));

// Configuración de Content Security Policy
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' 'unsafe-inline'; object-src 'none'; frame-ancestors 'self';");
    next();
});

// app.use(cors({
//     origin: 'https://deployyyyyy-render.onrender.com',
//     credentials: true
// }))
app.use(morgan('dev'));
app.use(express.json())
app.use(cookieParser())

app.use('/api',authRoutes)
app.use('/api',taskRoutes)

export default app
import express from 'express'
import morgan from  'morgan'
import authRoutes from  './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import taskRoutes from  './routes/task.routes.js'
import cors  from 'cors'


const app = express()

const allowedOrigins = [
    'https://deployyyyyy3.onrender.com', //dominio de render
    'https://deploy1-36ygujpt4-lucianas-projects-fa92e4b0.vercel.app/' // Dominio de tu frontend en Vercel
];

app.use(cors({
    origin: allowedOrigins,
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
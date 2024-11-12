import express from 'express'
import morgan from  'morgan'
import authRoutes from  './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import taskRoutes from  './routes/task.routes.js'
import cors  from 'cors'


const app = express()

const allowedOrigins = [
    'https://deployyyyyy2-render.onrender.com', //dominio de render
    'https://deploy-459wm7vgup-lucianas-projects-fa92e4b0.vercel.app' // Dominio de tu frontend en Vercel
];

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

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
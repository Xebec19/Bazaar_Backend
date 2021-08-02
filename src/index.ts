import express from 'express'
import cors from 'cors'
import Logger from './connections/logger'
import * as de from 'dotenv'
import morganMiddleware from './connections/morgan'
const app = express()
const port = process.env.PORT || 3000

const dotenv = de.config();
if (dotenv.error) { Logger.error('Error occurred while setting dot env files : ', dotenv.error); }


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(morganMiddleware); // to log http requests

// Test route
app.get('/', (req: any, res: any) => {
  res.send('Hello!')
})

// Main routes
app.use('/api/public', require('./routes/public'))
app.use('/api/user', require('./routes/profile'))
app.use('/api/shop', require('./routes/shop'))
app.use('/api/cart', require('./routes/cart'))
app.use('/api/order', require('./routes/order'))

const server = app.listen(port, () => {
  Logger.info(`Server listening at http://localhost:${port}`)
})

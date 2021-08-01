import express from 'express'
import cors from 'cors'
const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({extended:false}));  
app.use(express.json());
app.use(cors())

// Test route
app.get('/', (req:any, res:any) => {
  res.send('Hello!')
})

// Main routes
app.use('/api/public',require('./routes/public'))
app.use('/api/user',require('./routes/profile'))
app.use('/api/shop',require('./routes/shop'))
app.use('/api/cart',require('./routes/cart'))
app.use('/api/order',require('./routes/order'))

const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

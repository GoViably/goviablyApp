const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
require('express-async-errors')
const morgan = require('morgan')

const { dirname } = require('path')
const { fileURLToPath } = require('url')
const path = require('path')

const helmet = require('helmet')
const xss = require('xss-clean')
const mongoSanitize = require('express-mongo-sanitize')

// db and authenticateUser
const connectDB = require('./db/connect.js')

// routers
const authRouter = require('./routes/authRoutes.js')
const jobsRouter = require('./routes/jobsRoutes.js')
const productRouter = require('./routes/productRoutes')
const reviewRouter = require('./routes/reviewRoutes')
const orderRouter = require('./routes/orderRoutes')

// middleware
const notFoundMiddleware = require('./middleware/not-found.js')
const errorHandlerMiddleware = require('./middleware/error-handler.js')
const authenticateUser = require('./middleware/auth.js')

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

// const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(path.resolve(__dirname, './client/build')))

app.use(express.json())
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobsRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/reviews', reviewRouter)
app.use('/api/v1/orders', orderRouter)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 4000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()

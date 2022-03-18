const { readFile } = require('fs/promises')

const dotenv = require('dotenv')
dotenv.config()

const connectDB = require('./db/connect.js')
const Product = require('./models/Product.js')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    await Product.deleteMany()
    const jsonProducts = JSON.parse(await readFile('./mock-dataProducts.json'))
    await Product.create(jsonProducts)
    console.log('Success!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()

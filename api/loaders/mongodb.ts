import mongoose from 'mongoose'

const { DATABASE_URL, NODE_ENV } = process.env

mongoose.set('debug', NODE_ENV === "development")

const mongoServer = {
  start: async () => {
    return await mongoose.connect(String(DATABASE_URL), { autoIndex: true })
  }
}

export default mongoServer

import mongoose from "mongoose"

const URI =
  "mongodb+srv://viniciusasetorio:vinicius10@cluster0.steitdp.mongodb.net/?retryWrites=true&w=majority"

const databaseConnection = async () => {
    if (!global.mongoose) {
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(URI)
    }
}

export default databaseConnection
const mongoose = require('mongoose')
const password = 'aditya1997'
const DbName = 'shopnext'
const connectionString = `mongodb+srv://MongoDbUser:${password}@neog-cluster.d8w2z.mongodb.net/${DbName}?retryWrites=true&w=majority`


const dbConnection = async () => {
    try {

        const connect = await mongoose.connect(connectionString)

        console.log(`connection successful for DB ${DbName}`)

    } catch (error) {
        console.log('error in DB Connection', error)
    }
}

module.exports = { dbConnection }
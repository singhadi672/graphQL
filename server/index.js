const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const app = express()
const schema = require('./schemas')
const cors = require('cors')
const { dbConnection } = require('./db/connection.db')

app.use(cors())

const port = 5000
// connecting to DB
dbConnection()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})
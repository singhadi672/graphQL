const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");


const ClientType = new GraphQLObjectType({
    name: "Clienteee",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    }),

})

module.exports = { ClientType }
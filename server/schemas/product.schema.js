const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInterfaceType, GraphQLInt, GraphQLBoolean } = require("graphql");


const ProductType = new GraphQLObjectType({
    name: "products",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        image: { type: GraphQLString },
        price: { type: GraphQLString },
        rating: { type: GraphQLInt },
        available: { type: GraphQLBoolean },
        category: { type: GraphQLString },
        type: { type: GraphQLString }
    })
})

module.exports = { ProductType }

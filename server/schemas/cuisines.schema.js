const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = require("graphql");
const { ProductType } = require("./product.schema");
const { Product } = require("../db/product.dbschema");


const CuisineType = new GraphQLObjectType({
    name: "Cuisine",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        image: { type: GraphQLString },
        description: { type: GraphQLString },
        products: {
            type: new GraphQLList(ProductType),
            resolve: (parent, args) => {
                return Product.find({ category: parent?.name })
            }
        }
    })
})

module.exports = { CuisineType }
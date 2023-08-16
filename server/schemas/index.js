const { GraphQLObjectType, GraphQLBoolean, GraphQLSchema, GraphQLString, GraphQLID, GraphQLList } = require("graphql");
const { ClientType } = require("./client.schema");
const { clients, projects } = require("../db/sampleData");
const { ProjectType } = require("./project.schema");
const mongoose = require('mongoose')

const { Product } = require("../db/product.dbschema");
const { ProductType } = require("./product.schema");
const { CuisineType } = require("./cuisines.schema");
const { Cuisines } = require("../db/cuizines.dbschema");


const RootQuery = new GraphQLObjectType({
    name: 'rootQuery',
    description: "this is a root query structure",
    fields: {
        client: {
            type: ClientType,
            description: 'get a specific client data',
            args: { id: { type: GraphQLID }, name: { type: GraphQLString } },
            resolve: (parent, args) => (clients?.find(item => item?.id === args?.id && item?.name === args?.name))
        },
        clients: {
            type: new GraphQLList(ClientType),
            description: "get all clients data",
            resolve: () => { return clients },
        },
        project: {
            type: ProjectType,
            description: 'get a specific project data',
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                return projects?.find(project => project?.id === args?.id)
            }
        },
        products: {
            type: new GraphQLList(ProductType),
            description: 'get all products from mongoDB',
            resolve: async () => {
                const response = await Product.find()
                return response
            }
        },
        product: {
            type: ProductType,
            description: "get a product details based on ID",
            args: { id: { type: GraphQLID } },
            resolve: async (parent, args) => {
                return Product.findById(args?.id)
            }
        },
        cuisine: {
            type: CuisineType,
            description: "get a quisine data",
            args: { cuisineId: { type: GraphQLID } },
            resolve: (parent, args) => {
                return Cuisines.findById(args?.cuisineId)
            }
        },
        cuisines: {
            type: new GraphQLList(CuisineType),
            description: "get all quisine data",
            resolve: async (parent, args) => {
                return await Cuisines.find()
            }
        }
    },

})

const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    fields: {
        addCuisine: {
            type: CuisineType,
            args: { name: { type: GraphQLString }, image: { type: GraphQLString }, description: { type: GraphQLString } },
            resolve: async (parent, args) => {
                const cuisine = new Cuisines({
                    name: args?.name,
                    image: args?.image,
                    description: args?.description
                })

                const data = await cuisine.save()

                return {
                    name: args?.name,
                    image: args?.image,
                    description: args?.description,
                    id: data?.id
                }
            }
        }

    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})
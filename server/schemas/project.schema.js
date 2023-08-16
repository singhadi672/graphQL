const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");
const { ClientType } = require("./client.schema");
const { projects, clients } = require("../db/sampleData");



const ProjectType = new GraphQLObjectType({
    name: "projectType",
    fields: () => ({
        id: { type: GraphQLID },
        clientId: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        client: {
            type: ClientType,
            resolve: (parent) => {
                return clients?.find(item => item?.id == parent?.clientId)
            }
        }
    })
})

module.exports = { ProjectType }
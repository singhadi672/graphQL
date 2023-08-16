import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
query getProducts {
    
    products{
        name
        id
        image
        description
    }
}`

const GET_CUISINES = gql`
query getCuisines{

    cuisines{
        name
        description
    }
}`

const CREATE_CUISINE = gql`
mutation addCuisine($name: String, $image:String, $description:String) {
    addCuisine(name: $name, image: $image, description: $description){
        name
        description
        image
    }
}`

export { GET_PRODUCTS, GET_CUISINES, CREATE_CUISINE }
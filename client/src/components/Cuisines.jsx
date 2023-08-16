import { useMutation, useQuery } from "@apollo/client"
import { CREATE_CUISINE, GET_CUISINES } from "../queries/getProduct"
import { useState } from "react"

export default function Cuisines() {

    const [name, setName] = useState(null)
    const [desc, setDesc] = useState(null)
    const [img, setImg] = useState(null)

    const { loading, error, data } = useQuery(GET_CUISINES)

    const [createCuisine] = useMutation(CREATE_CUISINE, {
        variables: { name, description: desc, image: img },
        // to add new incoming data to the cache to update the store immediately
        // can also be achieved using useState edit on onClick function
        
        update(cache, { data: addCuisine }) {
            const { cuisines } = cache?.readQuery({ query: GET_CUISINES })
            cache.writeQuery({ query: GET_CUISINES, data: { cuisines: [...cuisines, addCuisine] } })
        }
    })

    console.log(data, loading)

    return (
        <div>
            <div style={{ border: '1px solid red', borderRadius: '5px', padding: '1rem', width: '40%', margin: 'auto' }}>
                <p>Create a Cuisine</p>
                <div>
                    <span>name</span>
                    <input type="text" name="" id="" onChange={(e) => setName(e?.target?.value)} />
                </div>
                <div>
                    <span>description</span>
                    <input type="text" name="" id="" onChange={(e) => setDesc(e?.target?.value)} />
                </div>
                <div>
                    <span>image link</span>
                    <input type="text" name="" id="" onChange={(e) => setImg(e?.target?.value)} />
                </div>
                <button onClick={async () => {
                    try {
                        const data = await createCuisine()
                        console.log(data)
                    } catch (error) {
                        console.log(error)
                    }
                }}>Create</button>
            </div>
            {loading && <p>Loading...</p>}
            {data && data?.cuisines?.map(item => (
                <div style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', width: '90%', border: '1px solid pink', margin: '1rem auto' }}>
                    <p>{item?.name}</p>
                    <p>{item?.description}</p>
                </div>
            ))}
        </div>
    )
}
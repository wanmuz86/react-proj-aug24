import axios from "axios"
import { useEffect, useState } from "react"

// When calling this hook, we need to pass url
const useFetch = (url) => {
    // This hook will return three states
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // When the url change, I will run this function (creating a listener on the url state) = > useEffect

    useEffect(() => {

        // Define the function
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get(url)
              
                if (response.status !== 200){
                    throw new Error("Network response was not ok")
                }
        
                setData(response.data)
                

            } catch (error) {
                console.log(error)
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }

        // Execute the function
        fetchData();


    }, [url])

    return {data,loading, error}

}
export default useFetch;
import React from 'react'
import useFetch from '../../libs/hooks/useFetch'
import Card from '../Card/Card'

const Featured = () => {

    // Calling back the custom hook that we created
    const { loading, data, error } = useFetch("https://fakestoreapi.com/products?limit=6")

    return (
        <div>
            {loading && <p>loading</p>}
            {error && <p className='text-danger'>Something is wrong</p>}
            {data &&
                <div >
                    <div className='row'>
                        {
                            data.map(val => <div className='col-4'><Card product={val}/></div>)
                        }
                    </div>
                </div>}
        </div>
    )
}

export default Featured
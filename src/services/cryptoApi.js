import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoApiHeaders = {
    'x-rapidapi-key': 'd6b85aaa0dmsh006c3e69b7f7862p1cd85djsn3b5ce4d006ba',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url)=> ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: ( builder ) => ({
        getCryptos: builder.query({
            query: ()=> createRequest('/coins')
        })
    })
})

// redux tolkit creates hooks you can call instantly to get all the data for query. It comes with loading states, finalized states and everything needed for making api calls.
export const { useGetCryptosQuery } = cryptoApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoExchangeApiHeaders = {
    'x-rapidapi-key': 'd6b85aaa0dmsh006c3e69b7f7862p1cd85djsn3b5ce4d006ba',
    'x-rapidapi-host': 'crypto-market-prices.p.rapidapi.com'
  }
const baseUrl = 'https://crypto-market-prices.p.rapidapi.com'
const createRequest = (url)=> ({ url, headers: cryptoExchangeApiHeaders})

export const cryptoExchangesApi  = createApi({
    reducerPath: 'cryptoExchangesApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: ( builder ) => ({
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        }),
    })
})

export const { useGetExchangesQuery } = cryptoExchangesApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders = {
    'x-rapidapi-key': 'd6b85aaa0dmsh006c3e69b7f7862p1cd85djsn3b5ce4d006ba',
    'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com'
  }
const baseUrl = 'https://real-time-news-data.p.rapidapi.com'
const createRequest = (url)=> ({ url, headers: cryptoNewsApiHeaders})

export const cryptoNewsApi  = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: ( builder ) => ({
        getNews: builder.query({
            query: ({newsCategory, count })=> createRequest(`/search?query=${newsCategory}&limit=${count}&time_published=anytime&country=US&lang=en`)
        })
    })
})

export const { useGetNewsQuery } = cryptoNewsApi
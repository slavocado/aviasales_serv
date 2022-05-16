import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API, URL } from '@ts/constants/api'
import { Ticket } from '@ts/types/ticket'

interface TicketsResponse {
  tickets: Ticket[]
}

// Define a service using a base URL and expected endpoints
export const ticketsApi = createApi({
  reducerPath: 'ticketsApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getAllTickets: builder.query<TicketsResponse, string>({
      query: () => `${API}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllTicketsQuery } = ticketsApi

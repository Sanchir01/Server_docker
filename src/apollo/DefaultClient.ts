import { ApolloClient, InMemoryCache } from '@apollo/client'

export const clietn = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_SERVER_URL,
	cache: new InMemoryCache(),
})

import { HttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'
import {
	NextSSRApolloClient,
	NextSSRInMemoryCache,
} from '@apollo/experimental-nextjs-app-support/ssr'

export const { getClient } = registerApolloClient(() => {
	const authLink = setContext((_, { headers }) => {
		return {
			headers: {
				...headers,
				authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjk1MzkxNzA1LCJleHAiOjE2OTYxNjkzMDV9.tTUWWSqKbQrGDetGCXHG2jC3CDK1xqGAJqT9tCkSqAE`,
			},
		}
	})
	const myLink = new HttpLink({
		uri: process.env.NEXT_PUBLIC_SERVER_URL,
	})
	return new NextSSRApolloClient({
		cache: new NextSSRInMemoryCache(),
		link: authLink.concat(myLink),
	})
})

import { EnumTokens } from '@/service/auth.service'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import Cookies from 'js-cookie'
const link = createHttpLink({
	uri: process.env.NEXT_PUBLIC_SERVER_URL,
	credentials: 'include',
})
const authLink = setContext((_, { headers }) => {
	const accessToken = Cookies.get(EnumTokens.REFRESH_TOKEN)

	return {
		headers: {
			...headers,
			authorization: accessToken ? `Bearer ${accessToken}` : '',
		},
	}
})
export const clietn = new ApolloClient({
	cache: new InMemoryCache(),
	connectToDevTools: true,
	link: authLink.concat(link),
})

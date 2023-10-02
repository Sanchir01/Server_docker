import { NextResponse, type NextRequest } from 'next/server'
import { GetNewTokenDocument } from '../graphql/gql/graphql'
import { clietn } from './apollo/DefaultClient'
import { EnumTokens } from './service/auth.service'

export async function middleware(request: NextRequest) {
	const accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value
	const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value
	if (refreshToken === undefined) {
		return NextResponse.redirect(new URL('/auth/login', request.url))
	}
	if (accessToken === undefined) {
		const resp = await clietn.mutate({ mutation: GetNewTokenDocument })
		console.log(resp)
	}
	return console.log(refreshToken)
}

export const config = {
	matcher: ['/catalog/:path*'],
}

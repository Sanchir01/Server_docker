import Cookies from 'js-cookie'
export enum EnumTokens {
	ACCESS_TOKEN = 'accessToken',
	REFRESH_TOKEN = 'refreshToken',
}
export const AuthService = {
	saveTokenToStorage: (refreshToken: string) => {
		Cookies.set(EnumTokens.REFRESH_TOKEN, refreshToken, {
			expires: 5,
			domain: 'localhost',
			secure: false,
		})
	},
	removerTokenFromStorage: () => {
		Cookies.remove(EnumTokens.REFRESH_TOKEN)
		Cookies.remove(EnumTokens.ACCESS_TOKEN)
	},

	logout: () => {
		AuthService.removerTokenFromStorage()
	},
}
